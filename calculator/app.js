
const display=document.querySelector(".calculator-input");
const keys=document.querySelector(".calculator-keys");


let inputValue="0";
let firstValue=null;
let operator=null;
let waitingForSecondValue=false; 

  
displayİnput();

function displayİnput(){
    display.value=inputValue;

}

keys.addEventListener("click",function(e){
 const element=e.target;
// NOT:burada iflerle kurduğum yapıyı switch-caselerle de kuruyor sonra dinle
 if(!element.matches("button")){return} ;

 if(element.classList.contains("operator")){
    // console.log(element.value);
    handleOperator(element.value);
    displayİnput();
    return;
 }

 if(element.classList.contains("decimal")){
    // console.log(element.value);
    inputDecimal(element.value);
    displayİnput();
    return;

 }

 if(element.classList.contains("clear")){
    // console.log(element.value);
    clear();
    displayİnput();
    return;
 }

   




//  console.log(element);
 inputNumber(element.value);
 displayİnput();

 
})

function inputNumber(num ){
    if(waitingForSecondValue){
        inputValue=num;
        waitingForSecondValue=false;

    }else{
        inputValue=inputValue==="0" ? num: inputValue+num;
    }
//     inputValue=inputValue==="0" ? num: inputValue+num; --- bu ilk aşamada birden fazla sayıya bastığımda ynayana yazılması için yapılan işlem sonra bunu if else e dönüştürüp koşulun içine yazmamız gerekti
// }
}

function inputDecimal(){
    if(!inputValue.includes(".")){
        inputValue +=".";
    }
   
}

function clear(){
    inputValue="0";
}


function handleOperator(nextOperator){
    const value=parseFloat(inputValue);

    // if(operator&&waitingForSecondValue){
    //     operator=nextOperator;
    //     return; - bu kodun amacını çözemedim sanki gereksiz gibi
    // }
    if(firstValue===null){
        firstValue=value;
    }else if(operator){ 
        const result=calculate(firstValue,value,operator);
         
        inputValue=`${parseFloat(result.toFixed(7))}`
        firstValue=result;
      }

      
    waitingForSecondValue=true;
    operator=nextOperator;

}

function calculate(first,second,operator){
        if(operator==="+"){
            return first + second;
        }
        else if(operator==="-"){
            return first - second;
        }
        else if(operator==="*"){
            return first * second;
        }
        else if(operator==="/"){
            return first / second
        }

        return second ;

}
