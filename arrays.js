//[] arrays should be in square brackets
//=========================================
//reverse
//sort
//concat
//38 unshift =it will add the elements at beginning

//39    push = it will Add the elements to end

// arr5.shift()= deletes the elements at the begining of the array

// arr5.pop() =deletes the elements at the end of the array

// 59 split() =it converts string to array  EX:-("cypress" to 'c','y','p','r','e','s','s')

//count of elements to call :- (console.log(arr7.length)

//reversing words:- for(let i=0 i<=arr7.lendth-1; i++)

//includes() = it helps find or whether the element is present in the array or not

//slice = it will delete the elements from the starting

//splice = it will delete from where to where (2 to 3,,3 to 5)

str = "This is javascript"

reversedstr = str.split("").reverse().join("")  //reversedstr = str.split(" ").reverse().join(" ") =javascript is This

console.log(reversedstr)

arr1 = []  //empty

arr2 = [1, 2, 3, 4, 5, 6,]  // Homogenious elements

arr3 = ["raju", 43, "cypress", true, undefined, null]
// index will starts from 0
//first element index 0

console.log(arr2)

console.log(arr3[2])  //output="cypress"

console.log((arr2).concat(arr3))

arr4 = [9, 3, 4, 5, 7, 6, 8, ]

//   arr5=new Float64Array(arr4)
//   arr6=arr5.sort()
//   console.log(arr6)
arr5 = new Float64Array(arr4).sort()//.reverse()
console.log(arr5)

console.log(arr3.reverse())
arr5 = ["ravi", "arun", "tharun", "gowda", "madhu"]

arr5.unshift("Manju")
arr5.push("akhil")

console.log(arr5)

str = "This is javascript"

arr6 = str.split("")

console.log(arr6)
//console.log(arr6.reverse())

console.log(arr6.reverse().join(""))  // EX:-(tpircsavaj si sihT)

str = "This is javascript "

arr7 = str.split(" ")

str[2] = "cypress"

console.log(arr7)

console.log(arr7.length)

// reversing words

st4 = ""
for (let i = 0; i <= arr7.lendth - 1; i++) {

  st3 = arr7[i].split("").reverse().join("")  //reverse

  st4 = st4 + st3 + " "
}
console.log(st4)

console.log(st4)

arr8 = ["eat", "sleep"]

const array2 = new Array("eat", "sleep")

console.log(typeof (array2))

//console.log(arr8.indexOf("sleep"))

arr9 = [8, 9, 6, 7, 2, 4]

arr10 = arr9.sort()


console.log(arr9[arr9[arr9.length - 1]])

x = arr9[arr8.length - 1]

console.log(arr8.indexOf(x))

arr11 = ["ravi", "arun", "tharun", "gowda", "madhu"]

if (arr11.includes("ravi")) { // "jafar""elment is not  present

  console.log("elment is present ")
}
else {

  console.log("elment is not  present ")

}

arr12 = arr11.slice(1)

console.log(arr12)
//--------------------------------------
arr12 = arr11.splice(2, 4)

console.log(arr12)

let colours = ['red', 'green', 'blue', 'grey']

for (const i of colours) {
  console.log(i);
}

arr13 = [1,2,3,4,5,6]

arr14 = ['a','b','c','d','e','f','g','h','i','j']

arr15 = arr13 + arr14

console.log(arr15)

arr16 = [1,2,3,4,5,6]==['a','b','c','d','e','f','g','h','i','j'] ? arr13 : arr14

console.log(arr16)


let array = [1,2,3,4,5,6]

array.push (['a','b','c','d','e','f','g','h','i','j']);

console.log(array)
console.log('---------------------------------------------');

let arr55 = [1, 2, 3, 4, 5, 6, 7];
let arr56 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

let arr57 = [];
let minLength = Math.min(arr55.length, arr56.length);

for (let i = 0; i < minLength; i++) {
    arr57.push(arr55[i]);
    arr57.push(arr56[i]);
}

// Append the remaining elements from the longer array, if any
arr58 = arr57.concat(arr55.slice(minLength), arr56.slice(minLength));

console.log(arr58);

