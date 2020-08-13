//Function Declaration
function onDisplay() {
    console.log("Function Declaration");
}

//Call Function
onDisplay();
onDisplay();
onDisplay();
onDisplay();
onDisplay();

//Function Without Parameter But No Return Value (void)

function add() {           //Function is defined
    let value1=10;
    let value2=10;

    let result= value1 + value2;
    console.log(result);
};
//Function Call
add();

//Function Without Parameter But Return Value
function add1() {   //function  Defined
    let value3=10;
    let value4=20;

    let result = value3 + value4;
    return result;
}

//Function Call
let use=add1();
console.log(use);

//Function With  Parameter But No Return Value
 function add2(value1,value2) {      //Parameters
    let result = value1 + value2;
    console.log(result);
 }
 
 //function Call          
 add2(2,5);              //here we can change the data also
 add2(50,60);


 //Function With Parameter But Return Value
 function checkLogin(username,password) {
     let _username="Roshan";
     let _password="123456";

     let message= undefined;

     if(username===_username && password===_password)
     {
         message="Login Successful";
     }
     else
    {
        message="username and Password does not match";
    } 
    return message;
 
}
let message=checkLogin("Roshan","123456");
console.log(message);


function OnStarPrint() {
    for(let counteri=1; counteri<=4; counteri++) {
        for (let counterj=1; counterj<=counteri; counteri++) {
            document.write("*");
        }
        document.write("<br/>");
    }
}

OnStarPrint();