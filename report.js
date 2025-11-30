document.querySelector(".report-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const category = document.getElementById("reportCategory").value;
    const location = document.getElementById("reportLocation").value;
    const description = document.getElementById("reportDescription").value;

    if (!category || !location || !description) {
        alert("Please fill all fields!");
        return;
    }

    // Create a report object
    const newReport = {
        category: category,
        location: location,
        description: description,
        status: "Pending"
    };

    // Get existing reports from localStorage
    let reports = JSON.parse(localStorage.getItem("wasteReports")) || [];

    // Add new report
    reports.push(newReport);

    // Save back to localStorage
    localStorage.setItem("wasteReports", JSON.stringify(reports));

    alert("Report submitted successfully!");

    window.location.href = "myreports.html"; // redirect to view page
});
