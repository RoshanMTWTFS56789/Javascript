//Declare a Variable
let message="Hello Variable";

//access variable
console.log(message);

let firstName; // Declare variable
    firstName="Roshan";

    console.log(firstName);

    // console.log(lastName);
    // let lastName;
    //     lastName="Thakur";

        let age;           //variable is made, but value is not assigned
        console.log(age);
 
        firstName="Kishor";   //replacing variable
 console.log(firstName);


 //var
 var firstName1;
     firstName1="Kishor";
     console.log(firstName1);

 console.log(lastName1);
 var lastName1;
    lastName1="naik" ;
    
 //Scope
 let firstName2="Kishor";
 var firstName3= "Roshan"; 
 {
     console.log(firstName2); //Global variable
     console.log(firstName3);
 }   

 //local variable
 //console.log(firstName4);  //throw exception
 console.log(firstName5);    //undefined
 {
      let firstName4="Amita";
      console.log(firstName4);

       var firstName5="Pooja";
       console.log(firstName5);
  }
 // console.log(firstName4); //.throw exception
 console.log(firstName5); //access

 //Constant Variable

const pi=3.14;
console.log(pi);

     