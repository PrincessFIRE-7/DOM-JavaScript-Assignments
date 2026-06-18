// Hardcoded JSON string from the course materials
const schoolData = '{"classA":[{"name":"Amara","CSC101":72,"CSC102":55,"CSC103":68},{"name":"Chidi","CSC101":40,"CSC102":48,"CSC103":35},{"name":"Ngozi","CSC101":85,"CSC102":90,"CSC103":78},{"name":"Emeka","CSC101":60,"CSC102":52,"CSC103":44}],"classB":[{"name":"Fatima","CSC101":91,"CSC102":88,"CSC103":95},{"name":"Tunde","CSC101":30,"CSC102":45,"CSC103":50},{"name":"Blessing","CSC101":77,"CSC102":63,"CSC103":70},{"name":"Seun","CSC101":55,"CSC102":49,"CSC103":58}]}';

function parseAndRenderResults() {
    // 1. Parse JSON string to native JavaScript object
    const data = JSON.parse(schoolData);
    const tbody = document.getElementById("table-body");
    
    // Combine both classes into a flat array for iteration
    const allStudents = [...data.classA, ...data.classB];

    allStudents.forEach(student => {
        // 2. Compute average score across modules
        const total = student.CSC101 + student.CSC102 + student.CSC103;
        const average = (total / 3).toFixed(2);
        
        // 3. Determine status based on pass mark threshold of 50
        const status = average >= 50 ? "Pass" : "Fail";
        const statusClass = average >= 50 ? "pass" : "fail";

        // 4. Create and append the new table row element to the DOM
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${student.name}</td>
            <td>${average}%</td>
            <td class="${statusClass}">${status}</td>
        `;
        tbody.appendChild(row);
    });
}

parseAndRenderResults();
