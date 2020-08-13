  // ForLoop
   for(let counter=1; counter<=10; counter++)
      {
         console.log(counter);         //Output Roshan Thakur
       }
          document.write("<h2>Roshan Thakur</h2>");

      document.write("<ul>");
           for(let counter1=1; counter1<=10; counter1++) {    //1,2,3,4,5,6,7,8,9,10
               document.write("<li>"+counter1+"</li>")
          }
            
      document.write("</ul>")


      // Array
      let arrayObj=["Roshan","Kishor","Uday","Vipul","Shyam",11,true,false,25.50]

      console.log(arrayObj.length); //To get length of Array //output 5
      
      console.log(arrayObj[2]);   //getting single name data
      console.log(arrayObj[4]);  //on Console
      

document.write("<ul>");
       for(let counter2=0; counter2<=arrayObj.length; counter2++) {        
           document.write("<li>" + arrayObj[counter2]+ "</li>");  //on Browser
       }
document.write("</ul>")

//For Each Loop   //it is Faster than For Loop/ //For Each Means every single function
document.write("<ul>");
arrayObj.forEach((value)=>{
       document.write("<li>"+value+"</li>")
})
document.write("</ul>");

//Condition On Loop
let arrayObj1=[1,2,3,4,5,6,7,8,9];

arrayObj1
      .forEach((value)=>
      {
          if(value % 2==0) 
          {
              console.log(value); //output 2468
          }
      });

 //Break Statement
 for (let counter3=0; counter3<=arrayObj1.length; counter3++)
 {
     if(arrayObj1[counter3]==5) {
         break;
     }
      console.log(arrayObj1[counter3]);  //output 1234
 }

//  for(var value of arrayobj) {
//      if(value==5)
//      {
//          break;
//      }
//      console.log(value);
//  }

 //Continue Statement   //The condition which is satisfied it will roam in loop, 
 for(var value of arrayObj1){
     if(value==5)
     {
         continue;
             }
      console.log(value);       
 }