str1 = "raju"

str2 = 'gowda'

str3 = `ravi kumar's place is "rolla"`

console.log(str3)

str4 = str2.concat(str3)

console.log(str4)

str5 = str2 +" "+ str3

console.log(str5)
//===============================================
output = str1+ " and " +str2

console.log(output)

output1 = `${str1} and ${str2}`

console.log(output1)
//=================================================
str6 = "This is JS class"

//arr = str6.split("")

//arr = str6.split(" ") //space

arr = str6.split("s")//.join("s")  //---> s is not equal to capital S

console.log(arr)
//==========================================================
str7 = "simple sentense of JS"

str8 = str7.toUpperCase()

console.log(str8)

console.log(str7.length)

console.log(str7.charAt(3))

console.log(str7[3])
//=================================================
arr = ["raju","gowda"]

arr[1]= "Manju"

console.log(arr)

//strings are immutable we can't change the specific charecter

str10 = "javascipt"

str11 = str10.substring(0,3)

console .log(str11)

str12 = "₹2,699"

str13 = Number(str12.replace("₹","").replace(",",""))

console.log(str13)

str14 = "₹659"

str15 = Number(str14.replace("₹","").replace(",",""))

console.log(str15)

total = str13+str15

console.log(total)
//-----------------------------------------(if not given the (Number)) if we convert the string to number must be in yellow colour

//Trim

str16 = "    gowda     "

console.log(str16)

str17 = str16.trim()



console.log(str17)

st1 = "raju gowda manju"

if(st1.includes("manju")){

console.log("substring is available")

}
else{
    console.log("substring is not available")
}

// st1 = "raju gowda manju"

// if(st1.includes("jafer")){

// console.log("substring is available")

// }
// else{
//     console.log("substring is not available")
// }

const a ='hello';
const b = new String('hello');

str5 = "raju\n" // new line

