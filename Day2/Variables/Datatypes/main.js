//Global Variable
let message="Hello"   // It is in String
console.log(typeof(message));   //typeof is a operator used to tell number or String
console.log(message);

message=11;       
console.log(typeof(message));      //number
console.log(message);

message=true;
console.log(typeof(message));      //boolean
console.log(message);


let fullName="Roshan Thakur";
console.log(fullName);

fullName="";             //fullname is blank , then also space is acclocated in memory, in output blank is shown
console.log(fullName);

fullName= null;         //fullname = to null, then we are completely wiping out from memory,
console.log(fullName);