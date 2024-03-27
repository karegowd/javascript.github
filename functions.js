
    //Add employee
    function addemployee() {

        console.log("this is script for add employee")
    }

    addemployee()

    addemployee()

// =================================================================

function add() {

    console.log("first number:" + 5)

    console.log("second number:" + 5)
    console.log("sum number:" + (5 + 6))

}
add()
//================================================================

//.1..Arrow function=>

add = (num1, num2) => {

  console.log("first number:" + num1)

  console.log("second number:" + num2)
  console.log("sum number:" + (num1 + num2))
}
add() 
//=======================================================================
sqr1 = num1 => {

  console.log(num1 * num1)

}
sqr1(8)

//======================================================



function substract(n1,n2) {
  return n1-n2
}
x = substract(60,40)

console.log(x)
