import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";

const AUTH_SECRET = new TextEncoder().encode(
  process.env.ADMIN_SECRET || "fallback_default_secret_antigravity_gunjan_portfolio_2026_super_key"
);

const ADMIN_COOKIE_NAME = "admin_session";
const USER_COOKIE_NAME = "user_session";
const TOKEN_EXPIRY = "7d";

export interface AdminPayload {
  role: "admin";
  adminEmail: string;
  authenticatedAt: number;
}

export interface UserPayload {
  userId: string;
  name: string;
  email: string;
  role: string;
  company?: string | null;
  avatar?: string | null;
  authenticatedAt: number;
}

/**
 * Native Web Crypto password hashing (SHA-256 + Salt)
 */
export async function hashPassword(password: string): Promise<string> {
  const encoder = new TextEncoder();
  const salt = crypto.randomUUID();
  const data = encoder.encode(password + ":" + salt);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
  return `${salt}:${hashHex}`;
}

/**
 * Native Web Crypto password verification
 */
export async function verifyPassword(password: string, storedHash: string): Promise<boolean> {
  const [salt, expectedHash] = storedHash.split(":");
  if (!salt || !expectedHash) return false;
  const encoder = new TextEncoder();
  const data = encoder.encode(password + ":" + salt);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const actualHash = hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
  return actualHash === expectedHash;
}

/**
 * Creates an encrypted JWT session token for the admin.
 */
export async function createAdminToken(adminEmail: string = "gunjansah63@gmail.com"): Promise<string> {
  return new SignJWT({
    role: "admin",
    adminEmail,
    authenticatedAt: Date.now(),
  })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(TOKEN_EXPIRY)
    .sign(AUTH_SECRET);
}

/**
 * Creates an encrypted JWT session token for regular users/recruiters.
 */
export async function createUserToken(user: {
  id: string;
  name: string;
  email: string;
  role: string;
  company?: string | null;
  avatar?: string | null;
}): Promise<string> {
  return new SignJWT({
    userId: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
    company: user.company || null,
    avatar: user.avatar || null,
    authenticatedAt: Date.now(),
  })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(TOKEN_EXPIRY)
    .sign(AUTH_SECRET);
}

/**
 * Verifies an admin JWT token.
 */
export async function verifyAdminToken(token: string): Promise<AdminPayload | null> {
  try {
    const { payload } = await jwtVerify(token, AUTH_SECRET);
    if (payload.role === "admin") {
      return payload as unknown as AdminPayload;
    }
    return null;
  } catch {
    return null;
  }
}

/**
 * Verifies a user JWT token.
 */
export async function verifyUserToken(token: string): Promise<UserPayload | null> {
  try {
    const { payload } = await jwtVerify(token, AUTH_SECRET);
    if (payload.userId && payload.email) {
      return payload as unknown as UserPayload;
    }
    return null;
  } catch {
    return null;
  }
}

/**
 * Validates the admin session from Next.js server cookie store.
 */
export async function getAdminSession(): Promise<AdminPayload | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get(ADMIN_COOKIE_NAME)?.value;
  if (!token) return null;
  return verifyAdminToken(token);
}

/**
 * Validates the user session from Next.js server cookie store.
 */
export async function getUserSession(): Promise<UserPayload | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get(USER_COOKIE_NAME)?.value;
  if (!token) return null;
  return verifyUserToken(token);
}

/**
 * Sets the admin session HTTP-only cookie.
 */
export async function setAdminSessionCookie(token: string) {
  const cookieStore = await cookies();
  cookieStore.set(ADMIN_COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 7 * 24 * 60 * 60, // 7 days
  });
}

/**
 * Sets the user session HTTP-only cookie.
 */
export async function setUserSessionCookie(token: string) {
  const cookieStore = await cookies();
  cookieStore.set(USER_COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 7 * 24 * 60 * 60, // 7 days
  });
}

/**
 * Clears the admin session cookie on logout.
 */
export async function clearAdminSessionCookie() {
  const cookieStore = await cookies();
  cookieStore.delete(ADMIN_COOKIE_NAME);
}

/**
 * Clears the user session cookie on logout.
 */
export async function clearUserSessionCookie() {
  const cookieStore = await cookies();
  cookieStore.delete(USER_COOKIE_NAME);
}

/**
 * Verifies admin password against environment variable.
 */
export function verifyAdminPassword(password: string): boolean {
  const expectedPassword = process.env.ADMIN_PASSWORD || "GunjanAdmin2026Secure!";
  return password === expectedPassword;
}
