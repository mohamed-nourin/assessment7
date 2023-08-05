let array = [1,4,11,2,35,4]


function addToZero(array) {
    let sum = false;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (i !== j) {
                if (array[i] + array[j] === 0) {
                    sum = true;
                }
            }
        }
    }
    return sum;
}


console.log(addToZero([]));           
console.log(addToZero([1]));          
console.log(addToZero([1, 2, 3]));    
console.log(addToZero([1, 2, 3, -2])); 
//time complexity: O(n^2)
//space complexity: O(1)


function hasUniqueChars(word) {
    const charSet = new Set();
  
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
  
      if (charSet.has(char)) {
        return false;
      } else {
        charSet.add(char);
      }
    }
  
    return true;
  }
  
console.log(hasUniqueChars("Monday")); 
console.log(hasUniqueChars("Helooooo"));   
//time complexity: O(n)
//space complexity: O(n)

function isPangram(string){
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let lowerCase = string.toLowerCase()
   
    for(let letter of alphabet){
        if(!lowerCase.includes(letter)){
            return false
        }
    }
    return true
}

console.log(isPangram('The quick brown fox jumps over the lazy dog'))
console.log(isPangram('The quick brown fox jumps over the cat'))
//time complexity: O(n)
//space complexity: O(1)


function findLongestWord(words) {
    let maxLength = 0;
  
    for (let word of words) {
      if (word.length > maxLength) {
        maxLength = word.length;
      }
    }
  
    return maxLength;
  }
  

console.log(findLongestWord(["hi", "hello"])); 
//runtime complexity: O(n)
//space complexity: O(1) 