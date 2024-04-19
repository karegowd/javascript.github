//oops

//1.encapsulation

//2.inheritence

//prototype

//polymorphism


/// 1 .Encapsulation  =it means binding the data between the methods 

// class A {

//     employeename
//     employeenum 
//     empplace 

//     m1() {

//         this.employeename ="raju"
//         this.employeenum =457
//         this.empplace = "blr"

//         console.log("This is method 1")

//     }

//     m2() {

//         console.log(this.employeename ,this.employeenum ,this.empplace )

//     }

//      Const obj1 = new A()

//      obj1.m1()

//      obj1.m2()
// }

// class A {

//     m1() {

//         console.log("method 1")
//     }

//     m2() {

//         console.log("method 2")
//     }
//     m3() {

//         console.log("method 3")
//     }
//     m4() {

//         console.log("method 4")
//     }
// }
//     class B extends A {

//     m5() {

//         console.log("method 5")
//     }

//     m6() {

//         console.log("method 6")
//     }
//     m7() {

//         console.log("method 7")
//     }
//     m8() {

//         console.log("method 8")
//     }

//  const gowda = new B()

//  gowda.m1()

//  gowda.m6()

//}

// 3 .prototype  = we can create the particular variable and methods outside of the class it should be accessble for all the objects

class employee {

    constructor(val1, val2, val3) {
        this.empname = val1;
        this.empnum = val2;
        this.empdept = val3;
    }

    display() {

        console.log(this.empname, this.empnum, this.empdept)
    }



}

employee.prototype.org = "DBS QA"  // variable

employee.prototype.displaydetails = function () {

    console.log(this.empname, this.empnum, this.empdept, this.org)

}

const obj1 = new employee("gowda", 345, "L&D")

obj1.display()
//console.log(obj1.org) // outside the class
obj1.displaydetails()

const obj2 = new employee("raju", 345, "L&D")
obj2.display()
//console.log(obj2.org) //outside the class
obj2.displaydetails()

const obj3 = new employee("shalini", 456, "marketing")  // method out side the class
obj3.displaydetails()
//console.log(obj3)

// 4.polymorphism  poly means many  1 method overriding ,2.method overloading

class A {

    m1() {

        console.log("method 1")
    }

    m2() {

        console.log("method 2")
    }
    m3() {

        console.log("method 3")
    }
    m4() {

        console.log("method 4")
    }
    add(a, b,) {

        console.log(a)
        console.log(b)
        console.log("sum of two numbers" + (a + b))
    }

}
class B extends A {

    m1() {

        console.log("method 5")
    }

    m6() {

        console.log("method 6")
    }
    m7() {

        console.log("method 7")
    }
    m8() {

        console.log("method 8")
    }


     add(a, b, c){

    console.log(a)
    console.log(b)
    console.log(c)
    console.log("sum of two numbers" + (a + b + c))
     

     }


}
     // over riding  = it will go child class instead of parent class
     const obj4 = new B()

     obj4.m1()

     obj4.add(3 , 4 , 5)

    //overloading 

    const obj5 = new A()

     obj5.m1()

     obj5.add(3 , 4 , 5)


// java script intreview quetions

// callbacks

// promises
// async
// await
// set
// maps

// hosting


























