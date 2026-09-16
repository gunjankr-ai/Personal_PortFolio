/* ==========================================================================
   RESEARCH WORKFLOW INTERACTIVE PIPELINE
   ========================================================================== */

const researchWorkflowData = [
  {
    step: 1,
    title: "Satellite Data",
    short: "Imagery Acquisition",
    detail: "Harvesting optical and multi-spectral imagery from Sentinel-2 and Landsat missions alongside high-resolution temporal feeds."
  },
  {
    step: 2,
    title: "Image Processing",
    short: "Radiometric & Geometric Correction",
    detail: "Atmospheric correction, cloud masking, band normalization, and geographic coregistration for rigorous spatial consistency."
  },
  {
    step: 3,
    title: "AI/ML Analysis",
    short: "Deep Feature Extraction",
    detail: "Employing Convolutional Neural Networks (CNNs) and semantic segmentation to differentiate open water bodies, marshland, and canopy."
  },
  {
    step: 4,
    title: "Change Detection",
    short: "Multi-temporal Difference",
    detail: "Calculating Modified Normalized Difference Water Index (MNDWI) and boundary evolution vectors across seasonal intervals."
  },
  {
    step: 5,
    title: "GIS Visualization",
    short: "Spatial Mapping (QGIS)",
    detail: "Overlaying digital elevation models (DEM), watershed basins, and urban zoning layers to reveal human-induced encroachment."
  },
  {
    step: 6,
    title: "Prediction",
    short: "Time-Series Forecasting",
    detail: "Predictive machine learning models projecting surface water contraction and identifying critical ecological tipping points."
  },
  {
    step: 7,
    title: "Early Warning",
    short: "Automated Alert Engine",
    detail: "Dispatching automated alerts to municipal authorities, environmental regulators, and wetland conservation committees."
  },
  {
    step: 8,
    title: "Conservation Action",
    short: "Targeted Ecological Intervention",
    detail: "Guiding field teams in targeted restoration, zoning policy enforcement, and community-driven wetland rejuvenation."
  }
];

function initResearchWorkflow() {
  const container = document.getElementById('workflow-nodes-container');
  const detailTitle = document.getElementById('workflow-step-title');
  const detailDesc = document.getElementById('workflow-step-desc');
  const detailBadge = document.getElementById('workflow-step-badge');

  if (!container) return;

  container.innerHTML = '';

  researchWorkflowData.forEach((item, index) => {
    const node = document.createElement('div');
    node.className = `workflow-node ${index === 0 ? 'active-step' : ''}`;
    node.dataset.index = index;
    node.innerHTML = `
      <span class="node-step-badge">STEP 0${item.step}</span>
      <h5 class="node-name">${item.title}</h5>
      <p style="font-size: 0.75rem; color: var(--text-muted); margin-top: 0.35rem;">${item.short}</p>
    `;

    node.addEventListener('click', () => {
      selectWorkflowStep(index);
    });

    container.appendChild(node);
  });

  function selectWorkflowStep(index) {
    const data = researchWorkflowData[index];
    const nodes = container.querySelectorAll('.workflow-node');
    nodes.forEach(n => n.classList.remove('active-step'));
    nodes[index].classList.add('active-step');

    if (detailBadge) detailBadge.textContent = `Step 0${data.step} of 08`;
    if (detailTitle) detailTitle.textContent = data.title;
    if (detailDesc) detailDesc.textContent = data.detail;
  }

  // Select initial step
  selectWorkflowStep(0);
}

document.addEventListener('DOMContentLoaded', initResearchWorkflow);
