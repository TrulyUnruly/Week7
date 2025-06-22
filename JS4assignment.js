/* 
   Author:  Julie Lewis
   Subject:  Week 7: JS4 - ECMAScript 6 and Intermediate JavaScript Assignment
*/


// 1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
    console.log('--------Question 1--------');

    const ages = [3, 9, 23, 64, 2, 8, 28, 93];
    console.log(`Ages array: ${ages}`); // Log the ages array
//     Step 1: Programmatically subtract the value of the first element 
//     in the array from the value in the last element of the array.
//         Do not use numbers to reference the last element, find it programmatically.
//         ages[7] - ages[0] is not allowed!
    const ageDifference = ages[ages.length -1] - ages[0]; // Calculate the difference between the last and first elements
    console.log(`\tStep 1: The difference between the last and first ages is: ${ageDifference}`); // Log the result   
//     Step 2: Add a new age to your array and repeat the step above to ensure it is dynamic. 
//     (works for arrays of different lengths).
    ages.push(78); // Add a new age to the array
    const newAgeDifference = ages[ages.length -1] - ages[0]; // Calculate the new difference
    console.log(`\tStep 2: After adding a new age, the difference between the last and first ages is: ${newAgeDifference}`); // Log the new result

//     Step 3: Use a loop to iterate through the array and calculate the average age.
    let totalAge = 0; // Initialize a variable to hold the total age
    for (let i = 0; i < ages.length; i++) { // Loop through the ages array
        totalAge += ages[i]; // Add each age to the total
    }
    const averageAge = totalAge / ages.length; // Calculate the average age
    console.log(`\tStep 3: The average age is: ${averageAge}`); // Log the average age


// 2. Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
    console.log('--------Question 2--------');

    const names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
    console.log(`Names array: ${names}`); // Log the names array    
//     Step 1: Use a loop to iterate through the array and calculate the average number of letters per name.
    let totalLetters = 0; // Initialize a variable to hold the total number of letters
    for (let i = 0; i < names.length; i++) { // Loop through the names array
        totalLetters += names[i].length; // Add the length of each name to the total
    }
    const averageLetters = totalLetters / names.length; // Calculate the average number of letters per name
    console.log(`\tStep 1: The average number of letters per name is: ${averageLetters}`); // Log the average number of letters     

//     Step 2: Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.
    let concatenatedNames = ''; // Initialize a variable to hold the concatenated names
    for (let i = 0; i < names.length; i++) { // Loop through the names array
        concatenatedNames += names[i] + ' '; // Concatenate each name with a space
    }
    console.log(`\tStep 2: Concatenated names: ${concatenatedNames.trim()}`); // Log the concatenated names, trimming any trailing space    
   
    console.log('--------Question 3--------');
    // 3. How do you access the last element of any array?
    console.log(`To access the last element of an array, you can use the length property to find the number of items in the array and then subtract 1 since arrays are zero based: array[array.length - 1]`); // Explanation of how to access the last element
    console.log('--------Question 4--------');
    // 4. How do you access the first element of any array?
    console.log(`To access the first element of an array, since arrays are zero indexed, the first element is at index 0. (Written programatically looks like): array[0]`); // Explanation of how to access the first element

    console.log('--------Question 5--------');
    // 5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
    const nameLengths = []; // Initialize an empty array to hold the lengths of names
    for (let i = 0; i < names.length; i++) { // Loop through the names array
        nameLengths.push(names[i].length); // Add the length of each name to the nameLengths array
    }
    console.log(`\tName lengths array: ${nameLengths}`); // Log the nameLengths array
    
    console.log('--------Question 6--------');  
    // 6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.
    let totalNameLengths = 0; // Initialize a variable to hold the total of name lengths
    for (let i = 0; i < nameLengths.length; i++) { // Loop through the nameLengths array
        totalNameLengths += nameLengths[i]; // Add each length to the total
    }
    console.log(`\tTotal of name lengths: ${totalNameLengths}`); // Log the total of name lengths

    console.log('--------Question 7--------');
    // 7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').
    function repeatWord(word, n) { // Define the function with parameters word and n
        let result = ''; // Initialize an empty string to hold the result   
        for (let i = 0; i < n; i++) { // Loop n times
            result += word; // Concatenate the word to the result
        }
        return result; // Return the concatenated result
    }
    console.log(`\tRepeating 'Hello' 3 times: ${repeatWord('Hello', 3)}`); // Log the result of calling the function with 'Hello' and 3     

    console.log('--------Question 8--------');
    // 8. Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.
    function getFullName(firstName, lastName) { // Define the function with parameters firstName and lastName
        return `${firstName} ${lastName}`; // Return the full name using template literals
    }           
    console.log(`\tFull name of 'Julie' and 'Lewis': ${getFullName('Julie', 'Lewis')}`); // Log the result of calling the function with 'Julie' and 'Lewis'

    console.log('--------Question 9--------');
    // 9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
    function isSumGreaterThan100(numbers) { // Define the function with a parameter called numbers
        let sum = 0; // Initialize a variable to hold the sum
        for (let i = 0; i < numbers.length; i++) { // Loop through the numbers array
            sum += numbers[i]; // Add each number to the sum
        }
        return sum > 100; // Return true if the sum is greater than 100, otherwise false
    }
    const testArray = [72, 15, 24]; // Example array to test the function
    console.log(`\tIs the sum of [72, 15, 24] greater than 100? ${isSumGreaterThan100(testArray)}`); // Log the result of calling the function with the test array      

    console.log('--------Question 10--------');
    // 10. Write a function that takes an array of numbers and returns the average of all the elements in the array.
    function calculateAverage(numbers) { // Define the function with a parameter called numbers
        let sum = 0; // Initialize a variable to hold the sum
        for (let i = 0; i < numbers.length; i++) { // Loop through the numbers array
            sum += numbers[i]; // Add each number to the sum
        }
        return sum / numbers.length; // Return the average by dividing the sum by the length of the array
    }           
    const averageArray = [10, 20, 30]; // Example array to test the function
    console.log(`\tThe average of [10, 20, 30] is: ${calculateAverage(averageArray)}`); // Log the result of calling the function with the average array   

    console.log('--------Question 11--------');
    // 11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
    function isFirstArrayAverageGreater(array1, array2) { // Define the function with two parameters
        const average1 = calculateAverage(array1); // Calculate the average of the first array
        const average2 = calculateAverage(array2); // Calculate the average of the second array
        return average1 > average2; // Return true if the first average is greater than the second, otherwise false
    }   
    const array1 = [10, 20, 30]; // Example first array
    const array2 = [5, 15, 25]; // Example second array
    console.log(`\tIs the average of [10, 20, 30] greater than the average of [5, 15, 25]? ${isFirstArrayAverageGreater(array1, array2)}`); // Log the result of calling the function with the two arrays  

    console.log('--------Question 12--------');
// 12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50
    function willBuyDrink(isHotOutside, moneyInPocket) { // Define the function with two parameters
        return isHotOutside && moneyInPocket > 10.50; // Return true if it is hot outside and money in pocket is greater than 10.50
    }
    const isHot = true; // Example value for isHotOutside
    const money = 15; // Example value for moneyInPocket
    console.log(`\tWill I buy a drink if it's hot outside and I have $15? ${willBuyDrink(isHot, money)}`); // Log the result of calling the function with the example values

    console.log('--------Question 13--------');
    // 13. Create a function of your own that solves a problem. In comments, write what the function does and why you created it.
    /**
     * Function: isPalindrome
     * Description: This function checks if a given string is a palindrome (reads the same forwards and backwards).
     * Why: I created this function to demonstrate string manipulation and condition checking in JavaScript.
     */ 
    function isPalindrome(wrd) { // Define the function with a parameter called wrd
        
        const lowerCased = wrd.toLowerCase(); // Convert the string to lowercase to ensure case insensitivity

        const reversed = wrd.split('').reverse().join(''); // Reverse the string
        return wrd === reversed; // Return true if the original string is the same as the reversed string
    }
    const testWord = 'racecar'; // Example word to test the function
    console.log(`\tIs '${testWord}' a palindrome? ${isPalindrome(testWord)}`); // Log the result of calling the function with the test word 
    /**
     * This code demonstrates array manipulation, string concatenation, and basic arithmetic operations.
     * The code this shows most of the basic concepts of JS we discussed in class, including arrays, loops, functions, and conditionals.
     * 
     */




    