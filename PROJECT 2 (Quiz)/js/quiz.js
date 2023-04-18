
import{easy,hard} from './question.js'
//console.log(easy)
//console.log(hard)
//--------------------------------------------------------------------------------


//We need to find the checked value of radio type input. this value is passed through the link.Now we use URLSearchParam method to find the value whether user select the question type easy or hard.
//let variable = new URLSearchParams(window.location.search)
//let variableValue = variable.get("variableInLink")

let element = new URLSearchParams(window.location.search);
let questionType  = element.get("valueOfQuestionType")
console.log(questionType)

//------------------------------------------------------------------



let result;//store the question Set in this variable

//we we check the hard of the radio input, we will get the hard question set
if(questionType=="hard"){
    //console.log("hard")
    result =  hard;
    //console.log(hard)
}
//we we check the easy of the radio input, we will get the easy question set
if(questionType == "easy"){
    //console.log("easy")
    result = easy;
}


//console.log(result)



//counter 


//We want to show the timer in h3 tag. In h3 tag, there is a id named "count-down"
let countdown = 30; //each question must be solved with 30 sec
let counterElement = document.getElementById('count-down')
let index = 0 ; //indexing element of result array

   
    //create document to fetch the questions and options
    let questionElement = document.getElementById('myQuestion')
    let optionElement1 = document.getElementById('option1');
    let optionElement2 = document.getElementById('option2');
    let optionElement3 = document.getElementById('option3');
    let optionElement4 = document.getElementById('option4');
    let buttonElement = document.getElementById('nextButton');
    
    
    let buttons = document.getElementsByClassName('quiz-option');
    console.log(buttons[1].innerHTML)



    let score = 0;//score value of the quiz


  

   
    //EVENT hANDLER Of Next Button

    let buttonClicked = false;
    buttonElement.addEventListener("click",function(event){
        event.preventDefault()
        buttonClicked =true;
    })
    //---------------------------------------------------------------


    //show the questions and options in quiz question portion and option portion
    //------------------------------------------------------
    // console.log("===>1",easy[1]["question"])

    // console.log("===>2",easy[1]["options"])

    // console.log("===>3",easy[1]["options"][3].text)
    //-------------------------------------------------------------
    

    // Add event listener to option elements






    

    
    
  
    //counter logic with changing questions and ans
    
    
    setInterval(function(){
        
        
        if(index < result.length){
            counterElement.innerHTML = countdown + " sec";
            countdown--;
            //fetch all the inner text of question and 4 options
            questionElement.innerHTML = "(" + (index + 1) + ") " + result[index]["question"];
            optionElement1.innerHTML =  result[index]["options"][0].text;
            optionElement2.innerHTML =   result[index]["options"][1].text;
            optionElement3.innerHTML = result[index]["options"][2].text;
            optionElement4.innerHTML = result[index]["options"][3].text;
            
            

            if(countdown < 0 && index < result.length && buttonClicked == false){
                countdown = 30; 
                index++;
                buttonEnabled();
               
            
            }
            else if(countdown > 0 && index < result.length && buttonClicked == true){
                
                
                countdown = 30;
                index++; 
                buttonClicked = false;
                buttonEnabled();
                
               
            }
        }
        
        else{
            
                clearInterval();
                window.location.href=`../html/result.html?myScore=${score}`;//open new window where score is shown
            
           
        }
       

         
    },1000)//1seec = 1000 ms
    //console.log(result[index]["correctAnswer"])    

    function buttonDisabled(){
        
        for(let j = 0 ; j < buttons.length ; j++){
            
            buttons[j].disabled = true;
            
            
        }
    }

    function buttonEnabled(){
        for(let m = 0 ; m < buttons.length ; m++){
            buttons[m].disabled = false;

            buttons[m].style.backgroundColor = "gray";
           
          

        }
    }

    //check whether the clicked option is correct or not
    for(let i = 0 ; i < buttons.length; i++){
        
        buttons[i].addEventListener('click', function(){
            buttonDisabled();//after clicking the option, button becomes disabled.
            if(buttons[i].innerText == result[index]["correctAnswer"]){
                //console.log("okay",buttons[i].innerText,result[index]["correctAnswer"])
                
                // buttonDisabled();
                buttons[i].style.backgroundColor = "green";
                score++;
                 //console.log(score)
            }
            else{
                //console.log("Not",buttons[i].innerText,result[index]["correctAnswer"]);
                buttons[i].style.backgroundColor = "red";
                // buttonDisabled();
                for(let k = 0 ; k < buttons.length ; k++){
                    if(buttons[k].innerText ==  result[index]["correctAnswer"]){
                        buttons[k].style.backgroundColor = "green";
                    } 
                }
                 console.log(score)  
            }
        })
    }
    


    //------------------------------------------------------------------


