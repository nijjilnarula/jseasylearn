//________________________________________________________________________
//| -----   -    -     -    -     ---     - -   ----  -----  ----  -----  |
//|   -    - -    -   -    - -   --     -       ----    -    ----    -    |
//|   -   - - -    - -    - - -     --  -       - -     -    -       -    |
//| - -  -     -    -    -     -  ---     - -   -  -  -----  -       -    |
//|_______________________________________________________________________|
// ON THE * PART REMOVE THE COMMENTS AND CHECK THE OUTPUT IN CONSOLE THEN REPUT THEM

//operators in js 
// operators are used to perform some operation on data
//there ae 8 type of operators
// 1.arthmeric operators 
// 2.assignment operators 
// 3.comparison operators
// 4.logical operators
// 5.string operators 
// 6.bitwise operators 
// 7.ternary operators 
// 8.type operators 


// 1.arthmeric operators 
// arthmeric operators are used to do perform operations on operands
// a(operand)+(operator)b(operand)
// for exp :-  a=5;b=4,a+b;//output 9
//there ae 8 type of arthmeric operators
// 1. +
// 2. -
// 3.*
// 4. /
// 5.%
// 6. **
// 7.++a,a++
// 8.--a,a--

// 1. +
// this is called plus operator
// this arthmetic operator is used for addition
let b = 5;
let a = 5;
console.log("a is ", a);
console.log("b is ", b);
console.log(a + b);
let c;
c = a + b;
console.log(c);
console.log("sum of ", a, "&", b, "is", c);
console.log("now c is", c);

// 2. -
// this is called minus  operator
// this arthmetic operator is used for subtraction 
let a1 = 5;
let b1 = 2;
let c1;
c1 = a1 - b1;
console.log("a is ", a1);
console.log("b is ", b1);
console.log("a-b is ", c1);
console.log("difference between ", a1, "&", b1, "is", c1);

// 3.*
// this arthmetic operator is called multiply 
// this operator i used for multiplicatiom
let a2 = 10;
let b2 = 4;
let c2;
c2 = a2 * b2;
console.log("a is ", a2);
console.log("b is ", b2);
console.log("a*b is ", c2);
console.log("multiplication between ", a2, "&", b2, "is", c2);

// 4. /
// this arthmetic operator is called divide
// this operator is used for divison
let a3 = 136;
let b3 = 4;
let c3;
c2 = a2 / b2;
console.log("a is ", a3);
console.log("b is ", b3);
console.log("a/b is ", c3);
console.log(" divison between ", a3, "&", b3, "is", c3);

// 5.%
// this arthmetic operator is called modulos or modulo 
// this arthmetic operator is ussd for getting the remainder
let a4 = 5;
let b4 = 4;
let c4;
c4 = a4 % b4;
console.log("a is ", a4);
console.log("b is ", b4);
console.log("a%b is ", c4);
console.log("reminder of ", a4, "/", b4, "is", c4);

// 6. **
// this arthmetic operator is called exponentiation
// this arthmetic operator is used for finding a xpower of a number
let a5 = 2;
let b5 = 3;
let c5;
c5 = a5/*this is the number*/ ** b5/*this is the power*/;
console.log("a is ", a5);
console.log("b is ", b5);
console.log("a**b is ", c5);
console.log(a5, '^', b5, 'is', c5);

// 7.++variable,variable++ 
// these are called unary operator 
// this arthmetic operator is called increment operater
//it has two types preincrement & postincrement
//this adds 1 to a variable 
//this the only operator that requires only 1 operend 

// a.preincrement
//in this the 1 added value is displayed
let a6 = 1;
++a6;
console.log(a6);

// a.postincrement
//in this first the same value is displayed then the 1 is added to the value
let a7 = 1;
console.log(a7++);
console.log(a7);

// 8.--variable,variable--
// these are called unary operator 
// this arthmetic operator is called decrement operater
//it has two types predecrement & postdecrement
//this subtracts 1 to a variable 
//this the only operator that requires only 1 operend 

// a.preidecrement
//in this the 1 subtractedd value is displayed
let a8 = 1;
console.log(--a8);

// a.postdecrement
//in this first the same value is displayed then the 1 is subtracted from the value
let a9 = 1;
console.log(a9--);
console.log(a9);


// 2.assignment operator 
// assignment operators are used to assign values to variable 
// for exp :-  a=5;a+=4;this is just a compact term of a=a+4;output will be 9
//there ae 7 type of assignment operators
// 1.+=
// 2.-=
// 3.*=
// 4./=
// 5.%=
// 6.**=
// 7.=

// 1. +=
// this operator is used to assign the variable its sum with value after =
let d = 4;
d += 5;//this is just the short form of d=d+4 
console.log(d);

// 2. -=
// this operator is used to assign the variable its diffrence with value after =
let d1 = 4;
d1 -= 5;//this is just the short form of d=d-4 
console.log(d1);

// 3.*=
// this operator is used to assign the variable its value after multiplaction with value after =
let d2 = 4;
d2 *= 5;//this is just the short form of d=d*4 
console.log(d2);

// 4. /=
// this operator is used to assign the variable  its value after division with value after =
let d3 = 4;
d3 /= 5;//this is just the short form of d=d/4 
console.log(d3);

// 5.%=
// this operator is used to assign the variable its reminder from division with value after =
let d4 = 4;
d4 %= 5;//this is just the short form of d=d%4 
console.log(d4);

// 6. **=
// this operator is used to assign the variable its power with value after =
let d5 = 4;
d5 **= 5;//this is just the short form of d=d**4 
console.log(d5);

// 7.=
// this operator is used to assign the variable the value after =
//the value moves from right to left
let d6 = 4;
let d7 = 5;
d6 = d7;
console.log(d6);


// 3.comparison operator 
// comparison operators are used to compare 2 variables
// for exp :- let a=5;let b=5;a==b; output:-true 
// the  output of comparison operator is in boolean
//there ae 8 type of comparison operators
// 1. ==
// 2. ===
// 3. !=
// 4. !==
// 5. >
// 6. >=
// 7. <
// 8. <=

// 1. ==
// this comparison operator is used to check wether both of the valueare equal or not 
let e = 5;
let f = 5;
console.log("e==f", e == f);

// 2. ===
/* this comparison operator is used to compare wether both of the value are equal and checks 
the datatype also like if a string is compared with a number like in == it will not first convert string 
into number then compare */  
console.log("e===f", e === f);

// 3.!=
// this comparison operator is used to compare wether both of the value are not  equal or not  
console.log("e!=f", e != f);

// 4. !==
// this comparison operator is used to compare wether  both of the value are not equal and checks the datatype also like if a string is compared with a number so like != it will not first convert string into number then compare
console.log("e!==f", e !== f);

// 5.>
// this comparison operator is used to compare if left value is greater than right valuew
console.log("e>f", e > f);

// 6. >=
// this comparison operator is used to compare  if left value is greater than right value and it it isequal also  
console.log("e>=f", e >= f);

// 7.<
// this comparison operator is used to compare   if left value is smaller than right valuew
console.log("e<f", e < f);

// 8.<=
// this comparison operator is used to compare if left value is smaller than right value and it it is equal also
console.log("e<=f", e <= f);


// 4.logical operator 
// logical operators are used to compare and check 2 conditons
// for exp :- let a=5;let b=5;a==b && a>=b; output:-true 
// the  output of logical operator is in boolean
//there ae 3 type of logical operators
// 1. &&
// 2. ||
// 3. !

// 1. &&
// this logical operator is called logicaland 
// this logical operator is used to check wether both of the valueare equal or not 
// this logical operator return true when both of the conditions are true
let g = 10;
let h = 5;
console.log("g>h && g==h*2", g > h && g == h * 2);

// 2. ||
// this logical operator is called logicalor 
// this logical operator is used to compare wether both of the value are equal and checks the datatype also like if a string is compared with a number so like == it will not first convert string into number then compare  
// this logical operator return true when if one condition is also true
let g1 = 10;
let h1 = 5;
console.log("g1>h1 || g1==h1*3", g1 > h1 || g1 == h1 * 3);

// 3.!(conditon)
// this logical operator is called logicalnot
// this logical operator is used to compare wether both of the value are not  equal or not  
// this logical operator return true when the conditon is false
let g3 = 5;
let h3 = 5;
console.log(!(g3 != h3));

// 4.string operator 
// string operators are used to perform operations on string
//there ae 2 type of string operators
// 1. +
// 2. =+

// +
// this string operator is used to concatenate string with a string or a number
let d8="yo";
let c6="my";
let b6="nigga";
let a10="5";
console.log(d8+c6+b6);
console.log(d8+c6+b6+a10+10);//the no will only be added with a string 

// +=
// this string operator is just short form of a=a+(anything)
// for exp:- let a=6;let b=10;a+=b;(is short form of a=a+b) output= 10;
// this string operator is used to concatenate string with a string or a number
let d9="yo";
let c7="my";
let b7="nigga";
let a11="5";
d9+=c7+b7;
console.log(d9);
d9+=a11;
console.log(d9+10);//the no will only be added with a string 


