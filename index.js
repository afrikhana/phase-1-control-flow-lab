
function scuberGreetingForFeet(ride){
  // Write your code here!
   let result;
  if (ride<=400){
     result="This one is on me!";
  } 
      else if (ride>2000 || ride<=2499){
         result="I will gladly take your thirty bucks.";
      }
     else {
          result="No can do."
        } 
        return result;
      }
       
       
        
    
    function ternaryCheckCity(truth){
//   // Write your code here!
let city="NYC"
let ss="NYC";
     if(city==ss){
      truth="Ok, sounds good."
     }
     else if(city!=ss){
      truth="No go."
     }
   

     return truth;
 }

function switchOnCharmFromTip(){
   // Write your code here!
   let tip1=300;
   
   let greet;
    switch(tip1){
      case 300:
        greet="Thank you so much."
        break; 
        case 200:
        greet="Thank you."
        break; 
        default:
          console.log('bye')
    }
    return greet;
 }