//________________________________________________________________________
//| -----   -    -     -    -     ---     - -   ----  -----  ----  -----  |
//|   -    - -    -   -    - -   --     -       ----    -    ----    -    |
//|   -   - - -    - -    - - -     --  -       - -     -    -       -    |
//| - -  -     -    -    -     -  ---     - -   -  -  -----  -       -    |
//|_______________________________________________________________________|
// ON THE * PART REMOVE THE COMMENTS AND CHECK THE OUTPUT IN CONSOLE THEN REPUT THEM

//console.log() is used to display output on console
console.log("apna college");
console.log("nijjil narula");

//we are dclaring a variable (variable is a container that contains data)
//we don't have to write a datatype like we used to declare in c because js is dynamically typed when the code is 
// geting executed it automatically check the value is of which datatype

//= is a assignment operator in whih the values go from right to left 
age = 19;
//we can do opreations with variables
age + 4;
console.log(age);
dname = "tony stark";
console.log(dname);
// to display value of a variable in console we just type the variable name without "" in the console

//this type of value is integer 
price = 23;
console.log(price);
// this is null value which comes when the variable  is intalized that is the value is absent now but it will hold a value
x = null;
console.log(x);
// default value is always undefined if no value is given .It is intalized by the javascript.  
y = undefined;
console.log(y);
//this type of value is bollean variable
isfalse = false;
console.log(isfalse);
istrue = true;
console.log(istrue);

//rules to declare a variable 

//1.js is case sensitive like it will consider a variable diffrent  even if there is only change in  one letter 
hello = "hey";
console.log(hello);
Hello = "yo";
console.log(Hello);
//2.we can only use letters ,underscore(_),$,numbers while declaring variables 
$yolo = "yeehe";
console.log($yolo);
//*%ghee="eww";//error
//*yo man="halo";//error
//3.while declaring at the starting we can only use letter,_,$. note:- we can't use numbers   
_123 = "go";
console.log(_123);
//*123ssc="start"//eror
//4.we can"t use predefined keywords as a variable 
//*console=34;
//*console.log(console);//IT WILL NOT SHOW
Console = 23;
console.log(Console);//IT WILL  SHOW

//this is a block
{

}

//KEYWORDS IN JS 

//WE CAN DECLARE VARIABLE WITHOUT A KEYWORD BUT AS A GOOD CODER WE SHOULD DECLARE A VARIABLE WITH A KEYWORD 

//1.Let
//this is one of the most used keywords we got this keyword in 2015
// this can be updated but can't be redeclared
let cname = "nijjil";
console.log(cname);
//*let dname="eve";
//*let dname="eves";//error because it can't be redclared 
let p;//we can declare a variable without intialization 
//it's block scope variable
{
    let a = 3;
    //  *let a=4;
}
{
    let a = 3;
}

//2.var 
// it is the most old keyword and was used before 2015 
// it can be redclared and can be updated
// it global scope variable  
var clay = "playdough";
console.log(clay);
var clay = "sandclay";
var clay = "magneticclay";//hence it can be redefined 

//3.const
//this is also one of the most used keywords and  also we got this keyword in 2015 
//this can"t be updated and  can't be redeclared 
const pi = 3.17;
//*pi=4.7;//value can"t be changed
console.log("pi");
//const g;//we can't declare a variable without intialization 
//it's block scope variable
{
    const A = 3;
    //*const A=4;  
}
{
    const A = 3;
}


//DATATYPES IN C

//  Data types are of two types primitive and non primitive

// a.PRIMITIVE DATATYPES
//Primitive datatypes are of 7 types
//Number String Boolean undefined null bigint symbol

//1.number 
// any numerical value like 1,2,2.0,-1 is a number datatype 
let f = 23;//This is a number data type
console.log(f);
console.log(typeof f);

//2.string
// any text is a string datatype
let f1 = "akshay_kumar"; //This is a string data type
console.log(f1);
console.log(typeof f1);

//3.bollean
//false & true is boolean data type  
let isunfollow = false //This is a boolean  data type
console.log(isunfollow);
console.log(typeof isunfollow);

//4.undefined
//by default everything is uindefined  
let f3; //This is a undefined  data type
console.log(f3);
console.log(typeof f3);

//5.null
// null means abscence of values 
let f4 = null; //This is a null  which is a object data type
console.log(f4);
console.log(typeof f4); // it will be object

//6.BIGINT
// bigint just like number but it  includes n in last
let f5 = BigInt("124"); //This is a bigint data type
console.log(f5);
console.log(typeof f5); // it will be bigint

//6.symbol 
let f6 = Symbol("game"); //This is symbol datatype
console.log(f6);
console.log(typeof f6);// it will be symbol datatype

//B. NON PRIMITIVE DATATYPES

// Non Primitive data type includes object which are further divided into arrays and functions
//object basically is collection of values. we can say object is collection of primitive datatypes 
//object contains key values pair 
// syntax :- objectname {keys:value,keys:value}
const student = {
    fullName/*keys*/: "nijjil_narula"/*values*/,
    age: 19,
    rollno: 10317702023,
    class: "b",
    percentage: "79%",
    cgpa: 9.0,
    isPass: true
};
console.log(student);
typeof student// it is object 
//to print a perticular value there are two ways 
console.log(student["fullName"]); //1st way 
console.log(student.isPass);//2nd way
console.log(student.rollno);
//we can change the value 
student["cgpa"] = student["cgpa"] + 1;//like we are chainging the value of cgpa by adding a number 
console.log(student.cgpa);
student["fullName"] = "raghav jhingoor";
console.log(student.fullName);
/*$$$$$$ NOTEEEE we know that we have used const in th presvious example 
so how we are able to change the value because const keyword can neither be updated
nor be redeclared SO we are able to change because we have used const on the object name 
so it can only show error if the whole object is changed not if there change in any value of key  */
