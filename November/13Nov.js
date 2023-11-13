// write a function that can print out a multiplication table. the function takes in a number, n, 
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

//make it so the columns are neat and line up.

function multiplicationTable(n) {
    function getDigitCount(number) {
        return number.toString().length;
    }
    // Maximum number of digits in any product
    let maxProductLength = getDigitCount(n * n); 

    for (let i = 1; i <= n; i++) {
        let row = '';
        for (let j = 1; j <= n; j++) {
            const product = i * j;
            
            // Calculate spacing based on the maximum number of digits
            const spaces = ' '.repeat(maxProductLength - getDigitCount(product) + 1);

            // Use spaces to add padding between numbers
            row += product + spaces; 
        }
        console.log(row);
    }
}

//registration form using react to check username

import React, { useState, useEffect } from 'react';

const RegistrationForm = ({ apiEndpoint, validationFunction }) => {
    const [username, setUsername] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        const checkUsername = async () => {
        if (username.length >= 4) {
            try {
            const response = await fetch(`${apiEndpoint}?username=${username}`);
            const data = await response.json();

            const isValidUsername = validationFunction(data);

            if (!isValidUsername) {
                setErrorMessage('Invalid Username');
            } else {
                setErrorMessage('');
            }
            } catch (error) {
            console.error('Error checking Username:', error);
            setErrorMessage('Error checking Username');
            }
        } else {
            setErrorMessage('Username must be at least 4 characters long');
        }
        };

        checkUsername();
    }, [username, apiEndpoint, validationFunction]);

    return (
        <>
        <label>
            Username:
            <input
            type='text'
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            />
        </label>
        {errorMessage && <p>{errorMessage}</p>}
        </>
    );
};

export default RegistrationForm;
