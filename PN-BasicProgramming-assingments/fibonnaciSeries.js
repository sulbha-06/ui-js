/**WAP that reads a number N and prints Nth Fibonacci number.

The Fibonacci series is an infinite series, starting from 0 (0th term) and 1 (1st term),
in which every number in the series is the sum of two numbers preceding it in the series.
Sample Input
2
Sample Output
1
The series is 0 1 1
 */

const a  = 6;
const b = 5;

const getFibonnaci = (number)=>{
    let next = 0;
    let temp1 = 1
    let temp2 = 0
    let count = 3;
    if(number === 0)
    return 0;
    if (number == 1 || number ==2) {
        return 1;
    }
while(count <= number){
    console.log(next,temp1, temp2);
    next = temp1 + temp2;
    console.log(next);
    temp2 = temp1;
    console.log(temp2);
    temp1 = next;
    console.log(temp1);
    count++;
}
return next;
}
console.log(getFibonnaci(a));
console.log(getFibonnaci(b));