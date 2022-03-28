let num1 = 0, num2 = 1, nextnum;
let value = prompt("enter a number");
for (let start = 0; start <= value; start++) {
    alert(num1);
    nextnum = num1 + num2;
    num1 = num2;
    num2 = nextnum;

}