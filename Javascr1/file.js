function greet(){
    console.log("hello"); 
    document.write("hello"); 
}
// console.log( add(44,55) );
function add(  num1 ,  num2 ){   
    return num1  + num2;
}
//function oriented
//arrays --  group of variables of same or different datatype 
let marks = [2,3,4,5,6,7,8];
let words =  new Array("hello","world","how","you");
//let words = ["hello" , "world","how "]
//what is a loop -- 
// for (let i = 0; i < words.length ; i++){
//    console.log(words[i]);
// }
words.push("meenal");//will be added at end of array
words.unshift("legato");// will be added at the beginning
 words.pop() //remove value from end of the array
 words.shift();//remove from the beginning
//  for (let i = 0; i < words.length ; i++){
//     console.log(words[i]);
//     // document.write(words[i]);
//  }
let newarray = marks.splice(2,3);
for (let i = 0; i < marks.length ; i++){
      console.log(marks[i]);
      document.write(marks[i]);
     }
console.log("===========")
document.write("========")
     for (let i = 0; i < newarray.length ; i++){
           console.log(newarray[i]);
           document.write(newarray[i]);
        }