const generateBtn = document.getElementById("generateBtn");
const reportType = document.getElementById("reportType");
const dateInput = document.getElementById("date");
const reportContent = document.getElementById("reportContent");

generateBtn.onclick = function () {
  const type = reportType.value;
  const date = dateInput.value || "Today";
  let report = "";

  switch (type) {
    case "sales":
      report = `
        <h4>Daily Sales Report (${date})</h4>
        <ul>
          <li>Total Transactions: 45</li>
          <li>Total Sales: ₱12,500.00</li>
          <li>Top Service: Laboratory Tests</li>
        </ul>`;
      break;

    case "patients":
      report = `
        <h4>Patient Count Report (${date})</h4>
        <ul>
          <li>Total Patients Registered: 30</li>
          <li>Inpatients: 12</li>
          <li>Outpatients: 18</li>
        </ul>`;
      break;

    case "lab":
      report = `
        <h4>Laboratory Tests Report (${date})</h4>
        <ul>
          <li>Total Tests: 20</li>
          <li>Most Common Test: Blood Test</li>
          <li>Pending Results: 3</li>
        </ul>`;
      break;

    case "pharmacy":
      report = `
        <h4>Pharmacy Report (${date})</h4>
        <ul>
          <li>Medicines Dispensed: 75</li>
          <li>Top Medicine: Paracetamol</li>
          <li>Low Stock Alerts: 2 Medicines</li>
        </ul>`;
      break;

    default:
      report = `<p>No report selected.</p>`;
  }

  reportContent.innerHTML = report;
};
