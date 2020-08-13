//If Else Statement

//== Operator           //It Only Check Values
let Value1=10;
let Value2=11;         // OutPut=Both the Values are not Same
if (Value1==Value2)
{
    console.log("Both the Values are Same");
}
  else
{
    console.log("Both the Values are not Same");
} 

let Value3= 10;
let Value4= "10";           //Output=Both The Values are same

if (Value3===Value4)        //To Match Value and DataTypes(string) === is Used
{
    console.log("Both the Values are Same");
}
  else
{
    console.log("Both the Values are not Same");
} 

// > Greater Than Operator
let Value5=15;
let Value6=12;       //OutPut Value% is greater than Value6

if(Value5 > Value6)
{
    console.log("Value5 is Greater than Value6 ");
}
else
{
    console.log("Value5 is not Greater than Value6");
}

// >= Greater than Equals To
let Value7=15;
let Value8=25;

if(Value7 >= Value8)
{
    console.log("Value7 is Greater than Equal to Value8");
}
  else
{
    console.log("Value7 is not Greater than Equal to Value8");
}  

//<=Less than Equals to
let Value9=25;
let Value10=55;

if(Value9 <= Value10)        //Value9 is less than equals to Value10
{
    console.log("Value9 is less than Equals to Value10");
}
  else
{
    console.log("Value9 is not less than Equals to Value10");
}  

// != Not Equals to
let Value11=10;
let Value12=10;
if(Value11 != Value12)      //Both Values are not  Equal, Because != to operator is used
{
    console.log("Both Values are Equal");
}
  else
{
    console.log("Both Values are Not Equal");
}  

//Ternary Operator
let result=(Value1==10)
      ?"Both value are same"
      : "Both value are not same";
 console.log(result);     

 //&& Operator
 if((Value9==Value10) && (Value11==Value12)) {
     console.log("True");   //Both Condition Must be satisfies then only will True
 }
   else
{
    console.log("false");
}   

// || (Or Operator)
if((Value9==Value10) || (Value11==Value12)) {
    console.log("True");      //if Anyone Contiton is satisfied then it will true
}
  else
{
   console.log("false");
}   

//Nested If Else And If Else If 
let totalMarks=500;

if(totalMarks>=0 && totalMarks<=600)
{
  let percentage=totalMarks / 6;
    
  if(percentage>=0 && percentage<40) {
      console.log("Fail");
  }
  else if(percentage>=40 && percentage<50) {
      console.log("Pass");
  }
      else if(percentage>=50 && percentage<60) {
          console.log("Second Class");
      }
        else if(percentage>=60 && percentage<75) {
            console.log("First Class");
        }
     else {
         console.log("Distinction");
     }


}

 else
{
    console.log("The Marks Should be Between 0 to 600");
}

//Switch Case
let weekDays=2;

switch(weekDays)
{
     case "1" :
         console.log("Sun");
      break;   

      case "2": 
         console.log("Mon");
         break;

      case "3" :
          console.log("Tuesday");
          break;   

    case "4" :
     console.log("Wednesday");
     break;    
     
     case "5" :
        console.log("Thrusday");
        break;   

        case "6" :
            console.log("Friday");
            break;   
            
            case "7" :
                console.log("Saturday");
                break;   
           default :
           console.log("Value should be between 1 to 7");
           break;        
}