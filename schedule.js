const mockSchedules = {
  "downtown": [
    { day: "Monday", time: "8:00 AM - 10:00 AM" },
    { day: "Thursday", time: "2:00 PM - 4:00 PM" }
  ],
  "uptown": [
    { day: "Tuesday", time: "9:00 AM - 11:00 AM" },
    { day: "Friday", time: "3:00 PM - 5:00 PM" }
  ]
};

function filterCards() {
    const input = document.getElementById("searchArea").value.toLowerCase().trim();
    const cards = document.querySelectorAll(".schedule-card");
    const resultsDiv = document.getElementById("schedule-results");

    // Filter cards by data-area
    cards.forEach(card => {
        const area = card.getAttribute("data-area").toLowerCase();
        if (area.includes(input)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });

    // Show mockSchedules results
    if (mockSchedules[input]) {
        let html = "<h3>Additional Schedule:</h3><ul>";
        mockSchedules[input].forEach(item => {
            html += `<li><strong>${item.day}:</strong> ${item.time}</li>`;
        });
        html += "</ul>";
        resultsDiv.innerHTML = html;
    } else {
        resultsDiv.innerHTML = "";
    }
}
