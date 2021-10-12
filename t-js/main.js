//
//
//
//
//
//  1
//
//
//
//
var num = 100;

console.log("is even "+(num%2==0));
//
//
//
//
// 2
//
//
//
//
//
//
function isPrime(num) {
    for(var i = 2; i < num*0.5; i++){
      if(num % i === 0){ 
        return false;
      }
    }
    return num > 1;
  }

  console.log("is 7 prime  "+isPrime(7));
  console.log("is 10 prime  "+isPrime(10));
  //
//
//
//
//
//
// 3
//
//
//
//
function printEven(num) {
    for (let index = 0; index < num; index++) {
        if (index%2==0) {
            
            console.log(index);
        }
        
    }
}
console.log("even numbers before 19 are");
printEven(19);
  //
//
//
//
//
//
// 4
//
//
//
//

function printPrimesBefor(num) {
    for (let index = 0; index < num; index++) {
        if(isPrime(index)){
            console.log(index);
        }
        
    }
}

console.log("prime numbers before 20 are ");
printPrimesBefor(20);
//
//
//
//
//
// 7
//
//
//
//
console.log("to remove the falsy values in js we "
+"write a filter which returns true items"
);
let arr = [1, 2, 3, 4, 5, 3,null,""]
console.log(arr);
arr = arr.filter(item => item )
console.log(arr);
//
//
//
//
//
// 9
//
//
//
//
var res = {}


let arr2 = ["1", 1, false ,"s",1,1,1]
  
arr2.forEach((item)=>{
    var t = `${typeof(item)}`;
    if(!res[`${t}`]) res[`${t}`]=1
    else
    res[`${t}`]=res[`${t}`]+1;
})

console.log(res);
//
//
//
//
//
// 10
//
//
//
//
str ="AbbCccDDD"
console.log(str)
const newStr = str
  .split("")
  .map(c => (c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()))
  .join("");

console.log(newStr);



