function ispalindrome(str){
    let len=str.length;
    let flag=false;
    for(let i=0;i<len/2;i++){
        if(str[i]!=str[len-i-1]){
            alert("Not a palindrome");
            flag=true;
            break;
        }
    }
    if(flag===false){
        alert("Palindrome");
    }
}
const str=prompt("Enter a string");
ispalindrome(str);