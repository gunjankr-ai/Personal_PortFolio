import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";

const ADMIN_SECRET = new TextEncoder().encode(
  process.env.ADMIN_SECRET || "fallback_default_secret_antigravity_gunjan_portfolio_2026_super_key"
);

const COOKIE_NAME = "admin_session";
const TOKEN_EXPIRY = "24h";

export interface AdminPayload {
  role: "admin";
  adminEmail: string;
  authenticatedAt: number;
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
    .sign(ADMIN_SECRET);
}

/**
 * Verifies a JWT session token.
 */
export async function verifyAdminToken(token: string): Promise<AdminPayload | null> {
  try {
    const { payload } = await jwtVerify(token, ADMIN_SECRET);
    if (payload.role === "admin") {
      return payload as unknown as AdminPayload;
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
  const token = cookieStore.get(COOKIE_NAME)?.value;
  if (!token) return null;
  return verifyAdminToken(token);
}

/**
 * Sets the admin session HTTP-only cookie.
 */
export async function setAdminSessionCookie(token: string) {
  const cookieStore = await cookies();
  cookieStore.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 24 * 60 * 60, // 24 hours
  });
}

/**
 * Removes the admin session cookie on logout.
 */
export async function clearAdminSessionCookie() {
  const cookieStore = await cookies();
  cookieStore.delete(COOKIE_NAME);
}

/**
 * Verifies admin password against environment variable.
 */
export function verifyAdminPassword(password: string): boolean {
  const expectedPassword = process.env.ADMIN_PASSWORD || "GunjanAdmin2026Secure!";
  return password === expectedPassword;
}
