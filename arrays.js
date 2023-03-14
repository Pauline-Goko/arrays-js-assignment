//find the last element
arr1 = [3,7,34,90,12];
console.log(arr1.length);
console.log(arr1[4]);

arr2 = [true, "green", "where",12,56];
console.log(arr2.length);
console.log(arr2[4]);

//join the elements into a string
let myPets = ["Cow","Bird", "Snake","Dog"];
let pets2 = myPets.toString();
console.log(pets2);

//sort the array
var arr3 = [-5,9,5,3,2,-3,6,8,4,1];
let sorted = arr3.sort((a,b)=>a -b);
console.log(sorted);

//remove duplicate 
var arr = ["apple","mango","apple",
           "orange","mango","mango"];
           
          
function removeDuplicates(arr) {
 return arr.filter((item,
     index) => arr.indexOf(item) === index);
           }  
 console.log(removeDuplicates(arr));

 //find the word
 let arr5 = ["the","way", "x",4];
 wordFind = "the","way","x",4;
 if(wordFind){
    console.log(arr5)
 }
else{
    console.log("the search word was not found");
}

//sort word
let word = "sevink"
console.log(word.sort);




       
       
           
           
       
       
	

