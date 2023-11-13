//write a function that can print out a multiplication table. the function takes in a number, n, 
// that determines the size of the table. EXAMPLE we pass in 3 - there are 3 lines and each line has 3 numbers on it. 
// we want to print out  the table - you do not need to return anything from the function

function multiplicationTable(n) {
    for (let i = 1; i <= n; i++) {
        let row = '';
        for (let j = 1; j <= n; j++) {
            row += i * j + '\t'; // Use '\t' to add a tab between numbers
        }
        console.log(row); // Print each row
    }
}

// Example usage:
multiplicationTable(3);