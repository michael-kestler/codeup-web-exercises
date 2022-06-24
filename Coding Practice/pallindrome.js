

//function to check if str is palindrome or not
function palindrome(str)
{
    let j = str.length -1;
    for (let i = 0; i < j/2; i++)
    {
        let x = str[i]; //forward character
        let y = str[j-i]; //backward character
        if(x !== y)
        {
            //return false if string not match
            return false;
        }
        //return true if string is palindrome
        return true;

    }

}

console.log(palindrome("rotator"));

//function to reverse the string
function reverse (str)
{
    //variable holds reverse string
    let rev_str = "";
    for( let i = str.length-1; i >=0; i--)
    {
        rev_str+= str[i];
}
   //returns reverse string
    return rev_str;
}

//function checking if string is palindrom or not
function is_palindrome(str)
{
    let reverse_str = reverse(str);
    //condition checking if reverse str is
    //same as string argument in is_palindrome function
    //else not a palindrome

    if (reverse_str === str)
    {
        console.log("passed string is palindrome")
    }
    else
    {
        console.log("passed string is not palindrome")
    }
    }
    let test = "hellolleh";
is_palindrome(test);


//javascript code to check string palindrome

let checkPalindrome = (str) => {
    return str === str.split("").reverse().join("");
    };

console.log("Is Palindrome? : " + checkPalindrome("noon"));
console.log("Is Palindrome?: " + checkPalindrome("apple"));
