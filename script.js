/* ---------------------------------------------------
   GLOBAL CHART HANDLERS
----------------------------------------------------*/
let masterChart = null;
let trialChart = null;

function destroyCharts() {
  if (masterChart) { try { masterChart.destroy(); } catch(e){} }
  if (trialChart) { try { trialChart.destroy(); } catch(e){} }
  masterChart = null;
  trialChart = null;
}

/* ---------------------------------------------------
   UI SECTION GENERATOR
----------------------------------------------------*/
function createReportSection(title, contentHtml) {
  return `
    <div class="report-section">
      <div class="report-title">${title} <span class="arrow">▶</span></div>
      <div class="report-content">${contentHtml}</div>
    </div>
  `;
}

function activateToggle() {
  document.querySelectorAll(".report-title").forEach(t => {
    t.onclick = () => {
      const content = t.nextElementSibling;
      const arrow = t.querySelector(".arrow");
      const open = content.style.display === "block";
      content.style.display = open ? "none" : "block";
      arrow.classList.toggle("rotate", !open);
    };
  });
}

/* ---------------------------------------------------
   MASTER AGENT TEXT CONTENT
----------------------------------------------------*/
function generateMasterAgentReport(disease) {
  const marketSize = (Math.random()*5 + 1).toFixed(1);
  const cagr = (Math.random()*4 + 4).toFixed(1);
  const trials = Math.floor(Math.random()*20 + 8);

  return `
    <b>Executive Summary</b><br>
    ${disease} remains a clinically significant condition with unmet diagnostic and therapeutic gaps.<br><br>

    <b>Key Findings</b><br>
    • Rising prevalence across global regions.<br>
    • Advancements in biomarkers and digital diagnostics.<br>
    • Variable treatment response across populations.<br><br>

    <b>Market Analysis</b><br>
    • Estimated market value: <b>${marketSize} Billion USD</b><br>
    • CAGR (5 years): <b>${cagr}%</b><br><br>

    <b>Clinical Trial Overview</b><br>
    • ${trials}+ active and completed studies globally.<br>
    • Dominated by academic sponsors + industry collaborations.<br><br>

    <b>Recommended Next Steps</b><br>
    • Expand diagnosis reach via AI-driven screening.<br>
    • Strengthen biomarker research.<br>
    • Explore repurposing opportunities.<br>
  `;
}

/* ---------------------------------------------------
   IQVIA INSIGHTS — REALTIME SIMULATION
----------------------------------------------------*/
function generateIQVIAInsights(disease) {

  const therapyAreas = {
    "asthma": "Respiratory Care",
    "diabetes": "Metabolic Disorders",
    "cancer": "Oncology",
    "alzheimer": "CNS / Neurodegeneration",
    "aging": "Anti-aging / Longevity",
    "longevity": "Anti-aging / Longevity",
    "heart failure": "Cardiology"
  };

  const competitors = {
    "Anti-aging / Longevity": ["Unity Biotechnology", "Calico Life Sciences", "BioAge Labs"],
    "Respiratory Care": ["GSK", "AstraZeneca", "Cipla"],
    "Oncology": ["Roche", "Novartis", "Merck"],
    "Metabolic Disorders": ["Novo Nordisk", "Sanofi", "Eli Lilly"],
    "Cardiology": ["Pfizer", "Novartis", "AstraZeneca"],
    "CNS / Neurodegeneration": ["Biogen", "Eisai", "Roche"]
  };

  const trends = {
    "Anti-aging / Longevity": [
      "Increasing investment in senolytics",
      "Growing interest in metabolic regulators",
      "Shift from disease treatment to healthspan extension"
    ]
  };

  const therapy = therapyAreas[disease.toLowerCase()] || "General Therapeutics";

  const marketSize = (Math.random()*3 + 3).toFixed(1);
  const cagr = (Math.random()*4 + 8).toFixed(1);

  const compList = competitors[therapy] || ["Pfizer", "Merck", "Novartis"];
  const trendList = trends[therapy] || [
    "Increased investment in R&D",
    "Shift toward targeted therapies",
    "Growing digital ecosystem"
  ];

  return `
    <b>Market Analysis</b><br>
    Therapy Area: <b>${therapy}</b><br><br>

    Market Size: <b>$${marketSize}B (2024)</b><br>
    CAGR: <b>${cagr}%</b><br><br>

    <b>Key Competitors</b><br>
    • ${compList.join("<br>• ")}<br><br>

    <b>Market Trends</b><br>
    • ${trendList.join("<br>• ")}
  `;
}

/* ---------------------------------------------------
   EXIM TRENDS AGENT
----------------------------------------------------*/
function generateEXIMTrends(disease) {

  const supplyRegions = {
    "asthma": ["USA", "Europe", "India"],
    "diabetes": ["China", "USA", "Brazil"],
    "cancer": ["USA", "Europe", "Japan"],
    "alzheimer": ["Europe", "Japan", "Singapore"],
    "aging": ["USA", "Europe", "Japan"],
    "longevity": ["USA", "Europe", "Japan"],
    "heart failure": ["China", "USA", "Europe"]
  };

  const defaultRegions = ["USA", "Europe", "Japan"];
  const regions = supplyRegions[disease.toLowerCase()] || defaultRegions;

  const eximData = regions.map(region => {
    const volume = Math.floor(Math.random() * 1200 + 200);
    const value = (Math.random() * 300 + 80).toFixed(1);
    const growth = (Math.random() * 8 + 3).toFixed(1);
    return { region, volume, value, growth };
  });

  let tableHTML = `
    <b>Export-Import Analysis</b><br><br>
    <table class="exim-table">
      <tr>
        <th>Region</th>
        <th>Volume</th>
        <th>Value</th>
        <th>Growth</th>
      </tr>
  `;

  eximData.forEach(row => {
    tableHTML += `
      <tr>
        <td>${row.region}</td>
        <td>${row.volume} tons</td>
        <td>$${row.value}M</td>
        <td>+${row.growth}%</td>
      </tr>
    `;
  });

  tableHTML += `</table><br><br>`;

  return tableHTML + `
    <b>Key Insights</b><br>
    • China dominates API production with 65% market share<br>
    • USA remains the largest consumer market<br>
    • European imports growing at accelerated rate
  `;
}

/* ---------------------------------------------------
   PATENT LANDSCAPE AGENT
----------------------------------------------------*/
function generatePatentLandscape(disease) {

  const samplePatents = [
    {
      id: "US10583201B2",
      title: "Metformin formulations for longevity",
      assignee: "Novo Nordisk",
      expiry: 2035,
      risk: "Low"
    },
    {
      id: "EP3284821A1",
      title: "Combination therapy with Metformin",
      assignee: "Merck",
      expiry: 2032,
      risk: "Medium"
    },
    {
      id: "JP2019530406A",
      title: "Metformin for age-related diseases",
      assignee: "Takeda",
      expiry: 2038,
      risk: "High"
    },
    {
      id: "US98765432A1",
      title: "Extended release Metformin",
      assignee: "Teva",
      expiry: 2029,
      risk: "Low"
    }
  ];

  return `
    <b>Patent Landscape</b><br><br>
    Total Patents: 42<br>
    Active Patents: 28<br>
    Expiring Soon: 5<br>
    High FTO Risk: 3<br><br>

    <b>Key Patents</b><br><br>

    <table class="exim-table">
      <tr>
        <th>Patent ID</th>
        <th>Title</th>
        <th>Assignee</th>
        <th>Expiry</th>
        <th>FTO Risk</th>
      </tr>

      ${samplePatents.map(p => `
        <tr>
          <td>${p.id}</td>
          <td>${p.title}</td>
          <td>${p.assignee}</td>
          <td>${p.expiry}</td>
          <td>${p.risk}</td>
        </tr>
      `).join("")}
    </table>
  `;
}

/* ---------------------------------------------------
   🆕 CLINICAL TRIALS AGENT — REALTIME
----------------------------------------------------*/
function generateClinicalTrialsAgent(disease) {

  const trials = [
    {
      id: "NCT04889209",
      title: "Metformin for Aging Frailty",
      phase: "Phase 2",
      status: "Recruiting",
      sponsor: "Harvard University"
    },
    {
      id: "NCT04298879",
      title: "Metformin in Age-Related Inflammation",
      phase: "Phase 3",
      status: "Active",
      sponsor: "Novartis"
    },
    {
      id: "NCT05167242",
      title: "Metformin for Cellular Senescence",
      phase: "Phase 2",
      status: "Completed",
      sponsor: "Mayo Clinic"
    },
    {
      id: "NCT04812356",
      title: "Longevity Effects of Metformin",
      phase: "Phase 1",
      status: "Planning",
      sponsor: "Stanford University"
    }
  ];

  return `
    <b>Clinical Trials Analysis</b><br><br>

    <b>Total Trials:</b> 18<br><br>
    <b>Phase 1:</b> 4<br>
    <b>Phase 2:</b> 8<br>
    <b>Phase 3:</b> 6<br>
    <b>Completed:</b> 7<br><br>

    <b>Recent Trials</b><br><br>

    <table class="exim-table">
      <tr>
        <th>Trial ID</th>
        <th>Title</th>
        <th>Phase</th>
        <th>Status</th>
        <th>Sponsor</th>
      </tr>

      ${trials.map(t => `
        <tr>
          <td>${t.id}</td>
          <td>${t.title}</td>
          <td>${t.phase}</td>
          <td>${t.status}</td>
          <td>${t.sponsor}</td>
        </tr>
      `).join("")}
    </table>
  `;
}

/* ---------------------------------------------------
   🆕 WEB INTELLIGENCE AGENT — REALTIME
----------------------------------------------------*/
function generateWebIntelligence(disease) {

  const publicationTemplates = [
    {
      title: "Metformin as a geroprotector: recent evidence",
      authors: "Smith J et al.",
      journal: "Nature Aging (2023)"
    },
    {
      title: "The molecular basis for Metformin's effects on aging",
      authors: "Chen L et al.",
      journal: "Cell Metabolism (2022)"
    },
    {
      title: "Clinical trials of anti-aging drugs: Metformin leads the way",
      authors: "Rodriguez M et al.",
      journal: "The Lancet Healthy Longevity (2023)"
    }
  ];

  const guidelines = [
    {
      title: "FDA Guidance on Anti-Aging Drug Development",
      source: "FDA (2022)"
    },
    {
      title: "EMA Position on Longevity Therapeutics",
      source: "EMA (2023)"
    }
  ];

  const news = [
    {
      title: "Breakthrough study shows " + disease + " therapy extends healthspan",
      source: "Reuters",
      date: "2023-05-15"
    },
    {
      title: "Investors flock to anti-aging biotech startups",
      source: "Bloomberg",
      date: "2023-04-22"
    }
  ];

  let html = `
    <b>Web Intelligence</b><br><br>

    <b>Recent Publications</b><br>
  `;

  publicationTemplates.forEach(p => {
    html += `
      <div style="margin: 6px 0;">
        <b>${p.title}</b><br>
        ${p.authors} - ${p.journal}<br>
        <a href="#" style="color:#0077b6;">View publication</a>
      </div><br>
    `;
  });

  html += `<br><b>Regulatory Guidelines</b><br>`;

  guidelines.forEach(g => {
    html += `
      <div style="margin: 6px 0;">
        <b>${g.title}</b><br>
        ${g.source}<br>
        <a href="#" style="color:#0077b6;">View guideline</a>
      </div><br>
    `;
  });

  html += `<br><b>Industry News</b><br>`;

  news.forEach(n => {
    html += `
      <div style="margin: 6px 0;">
        <b>${n.title}</b><br>
        ${n.source} - ${n.date}<br>
        <a href="#" style="color:#0077b6;">Read more</a>
      </div><br>
    `;
  });

  return html;
}

/* ---------------------------------------------------
   CHARTS — MASTER AGENT GRAPH
----------------------------------------------------*/
function createMasterChart(disease) {
  const container = document.getElementById("master-chart-container");
  container.innerHTML = `<canvas id="masterGraph"></canvas>`;

  const ctx = document.getElementById("masterGraph").getContext("2d");

  const metrics = [
    (Math.random()*5 + 1).toFixed(1),
    (Math.random()*5 + 4).toFixed(1),
    (Math.random()*20 + 10).toFixed(1),
    (Math.random()*20 + 60).toFixed(1),
    (Math.random()*20 + 50).toFixed(1)
  ];

  masterChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Market Size $B", "CAGR%", "Prevalence%", "Diagnostic Accuracy%", "Treatment Success%"],
      datasets: [{
        label: `${disease} — Key Metrics`,
        data: metrics,
        backgroundColor: "rgba(0, 119, 182, 0.7)"
      }]
    },
    options: {
      responsive: true,
      scales: { y: { beginAtZero: true } }
    }
  });
}

/* ---------------------------------------------------
   TRIAL CHART (DOUGHNUT)
----------------------------------------------------*/
function createTrialChart(disease) {
  const container = document.getElementById("trial-chart-container");
  container.innerHTML = `<canvas id="trialGraph"></canvas>`;

  const ctx = document.getElementById("trialGraph").getContext("2d");

  const p1 = Math.floor(Math.random()*5 + 2);
  const p2 = Math.floor(Math.random()*10 + 2);
  const p3 = Math.floor(Math.random()*10 + 4);
  const p4 = Math.floor(Math.random()*4 + 1);
  const comp = Math.floor(Math.random()*8 + 3);

  trialChart = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["Phase 1", "Phase 2", "Phase 3", "Phase 4", "Completed"],
      datasets: [{
        data: [p1, p2, p3, p4, comp],
        backgroundColor: [
          "#1b87e5", "#42b3f5", "#72d3f6", "#a6f1ff", "#c8ffe6"
        ]
      }]
    },
    options: { responsive: true }
  });
}

/* ---------------------------------------------------
   MAIN SEARCH FUNCTION
----------------------------------------------------*/
function searchMolecule() {
  const input = document.getElementById("searchBox").value.trim();
  const result = document.getElementById("result");

  destroyCharts();

  if (!input) {
    result.innerHTML = `<div class="card"><h3>Please enter a disease or molecule.</h3></div>`;
    return;
  }

  result.innerHTML = `
    <div class="card">
      <div class="loader"></div>
      <p style="text-align:center;color:#0077b6;">Analyzing "${input}"...</p>
    </div>
  `;

  setTimeout(() => {
    result.innerHTML = `
      <div class="card">
        <h2> Master Agent Report — ${input}</h2>

        ${createReportSection("MASTER AGENT", generateMasterAgentReport(input))}
        ${createReportSection("IQVIA Insights Agent", generateIQVIAInsights(input))}
        ${createReportSection("EXIM Trends Agent", generateEXIMTrends(input))}
        ${createReportSection("Patent Landscape Agent", generatePatentLandscape(input))}
        ${createReportSection("Clinical Trials Agent", generateClinicalTrialsAgent(input))}

        <!-- UPDATED HERE -->
        ${createReportSection("Web Intelligence Agent", generateWebIntelligence(input))}
      </div>

      <div class="card">
        <h3> Visualization Panel</h3>
        <div id="master-chart-container" style="max-width:650px;margin:15px auto;"></div>
        <div id="trial-chart-container" style="max-width:650px;margin:15px auto;"></div>
      </div>
    `;

    activateToggle();
    createMasterChart(input);
    createTrialChart(input);
  }, 700);
}

/* ---------------------------------------------------
   PAGE BUTTONS
----------------------------------------------------*/
function goHome() {
  destroyCharts();
  document.getElementById("result").innerHTML =
    `<div class="card"><h3>Enter a disease or molecule to begin analysis.</h3></div>`;
}

function showInsights() {
  destroyCharts();
  document.getElementById("result").innerHTML = `
    <div class="card"><h2>Emerging Pharma Trends 2025</h2><p>AI-driven discovery and smart R&D.</p></div>
    <div class="card"><h2>Drug Repurposing</h2><p>Repositioning molecules scientifically.</p></div>
    <div class="card"><h2>Regulatory Intelligence</h2><p>Global rules & compliance shifts.</p></div>
    <div class="card"><h2>AI in Discovery</h2><p>Predictive modelling and mechanism mapping.</p></div>
  `;
}

function showIndustries() {
  destroyCharts();
  document.getElementById("result").innerHTML = `
    <div class="card"><h2>Pharmaceuticals</h2><p>AI insights for pipelines.</p></div>
    <div class="card"><h2>Biotechnology</h2><p>Molecule intelligence & trials.</p></div>
    <div class="card"><h2>Research Institutions</h2><p>Literature + evidence mining.</p></div>
    <div class="card"><h2>Healthcare Providers</h2><p>Clinical decision support.</p></div>
  `;
}

function showAbout() {
  destroyCharts();
  document.getElementById("result").innerHTML = `
    <div class="card">
      <h2>About Us</h2>
      <p>1. Rubini T – III Year AI&DS</p>
      <p>2. Kokulavarthini T – III Year</p>
      <p>3. Ruthrakaran J – III Year</p>
      <p>4. Sabithan M – III Year</p>
      <p>5. K V Magesh – II Year AIML</p>
    </div>
  `;
}
