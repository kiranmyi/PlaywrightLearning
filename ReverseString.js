function isPalindrome(inputWord)
{
    let word= inputWord.split();
    let reverseWord="";
    for(i=inputWord.length-1;i>=0;i--)
    {
        
        reverseWord+=inputWord[i];
    }
   // console.log(reverseWord);
    inputWord===reverseWord?console.log(inputWord +" is a Palindrome"):console.log(inputWord +" is not a Palindrome")
}

isPalindrome("racecar");
isPalindrome("string");