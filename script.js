
 // Write your code here
	function firstNonRepeatedChar(s) {
    // Create a Map to store the frequency of each character
    const charCount = new Map();

    // Iterate through the string to count the frequency of each character
    for (const char of s) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }

    // Iterate through the string again to find the first non-repeated character
    for (const char of s) {
        if (charCount.get(char) === 1) {
            return char;
        }
    }

    // If no non-repeated character is found, return null
    return null;
}

// Test cases
console.log(firstNonRepeatedChar('aabbcdd'));  // Output: 'c'
console.log(firstNonRepeatedChar('aabbcc'));   // Output: null
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
