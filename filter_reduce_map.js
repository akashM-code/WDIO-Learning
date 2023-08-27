// var checkArray = [10, 20, 30, 40, 50, 60];
// var checkArray2 = [1, 2, 3, 4, 5, 6];

// var total = 0;
// // for (var i = 0; i < checkArray.length; i++) {
// //     total = total + checkArray[i];
// // }
// // console.log(total);

// // checkArray.reduce((total,checkArray) => total+checkArray,0)

// // let sum = checkArray.reduce((total,checkArray) => total+checkArray,0);
// // console.log(sum);

// //Map
// let array = [10,20,30]
// let mappedArray = checkArray.map(array*2);
// console.log(mappedArray);

//Reduce
var sum=0;
var marks = [10,20,30,40];
var test = marks.reduce((sum,totalMarks)=> sum+totalMarks,0)
console.log(test);
//--------------------------------------------------------


//var sum = arrayName.reduce((var with zero value , new var)=> zero var +/*- new variable,0);
//console.log(copy the value from above);


sum=0;
for(var i=0; i<marks.length; i++){
    sum= sum+marks[i];

}
console.log(sum);