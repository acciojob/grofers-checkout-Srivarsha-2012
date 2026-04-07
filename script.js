// Function to calculate total price
function calculateTotal() {
    // Get all elements with class "prices"
    let prices = document.querySelectorAll(".prices");
    
    let total = 0;

    // Loop through each price and add to total
    for (let i = 0; i < prices.length; i++) {
        total += parseFloat(prices[i].innerText);
    }

    // Create a new row and cell
    let table = document.querySelector("table");
    let row = document.createElement("tr");
    let cell = document.createElement("td");

    // Make the cell span across columns (adjust if needed)
    cell.colSpan = 2;

    // Set total text
    cell.innerText = "Total Price: " + total;

    // Append cell to row and row to table
    row.appendChild(cell);
    table.appendChild(row);
}

// Call the function
calculateTotal();