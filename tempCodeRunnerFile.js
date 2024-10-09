
let num=prompt(parseInt("Enter a number between 0 and 1 million"));
if(num>=0 && num<=1000000){
    sum=0;
    for(let i = 0;i<=num;i++){
         sum+=i
    }
   window.alert(`Sum of numbers up to ${num} is ${sum}`)
}else{
    window.alert("Invalid Number")
}
