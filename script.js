function calculateTotal() {
    // Select all price elements
    let priceElements = document.querySelectorAll(".prices");
    
    let total = 0;

    // Loop through prices and sum them
    priceElements.forEach(function(item) {
        total += parseFloat(item.textContent);
    });

    // Create a new row
    let table = document.querySelector("table");
    let newRow = document.createElement("tr");
    let newCell = document.createElement("td");

    // Set colspan so it spans across table columns (adjust if needed)
    newCell.colSpan = 2;
    newCell.textContent = "Total Price: " + total;

    newRow.appendChild(newCell);
    table.appendChild(newRow);
}

// Call the function
calculateTotal();