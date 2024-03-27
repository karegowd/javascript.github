
let car = {

    model : 2023,
    manufacturer: "ford"

}
console.log(car.model)

console.log(typeof(car.model))

const student = {

    firstname : "gowda",
    place: "banglore",
    enrolled: true
}
console.log(student.firstname)

//Add lastname
student["lastname"]="rk"
console.log(student.lastname)

//edit place
student['place']="chennai"

console.log(student.place)

//delete value
delete student['lastname']

console.log(student.lastname)

const menuitems={

     menu1:'Admin',
     menu2:'PIM',
     menu3:'Time',
     menu4:"Leave",
     menu5:"Recruitment"
 }

     //es6

     //for in
     
     for (let i  in menuitems){

      console.log("loops starts")

      console.log(menuitems[i])

      console.log("loops ends")
     }


      


     







