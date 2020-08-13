//String Data Types
let valueStr="Roshan";

//Convert String(character) To Number
console.log(Number(valueStr));   //Character to number string //output NaN(not applicable)


//Convert String(Number) To Number
let valueStr1="11";
console.log(Number(valueStr1)); //11 is a string but actual it is a number , soo it will excute

//Convert String(number) To Boolean
let valueBool="12";
console.log(Boolean(valueBool));  //true

//convert String(character) To Boolean
let ValueBool2="Roshan";
console.log(Boolean(ValueBool2)); //true

//Integer DataType
let valueInt2=11;  
console.log(String(valueInt2)); //Integer(Number) to String //11

//Integer(Number) to Boolean
let ValueInt4=12;                //if we put value=0 , Result will be false
console.log(Boolean(ValueInt4));  //True

// Converting String to Number then Number to Boolean
let ValueStr5="0";
console.log(Boolean(Number(ValueStr5)) );

//Boolean
let valueBool5= true;           //converting from Boolean To Number 
console.log(Number(valueBool5)); //output 1 //if false then output 0

let valueBool6= true;           //Converting from Boolean To String
console.log(String(valueBool6)); //output true

let valueBool7= false;            //Converting from Bool to Number than Number to string
console.log(String(Number(valueBool7)));//output 0