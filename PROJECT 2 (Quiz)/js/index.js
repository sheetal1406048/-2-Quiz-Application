


//click button to start quiz

var startQuiz = document.getElementById('start-quiz');
startQuiz.addEventListener('click',myFunction);
function myFunction(event){
    event.preventDefault();

    //get the input of form data

    var firstName = document.getElementById('f-name').value;
    var lastName = document.getElementById('l-name').value;
    var email = document.getElementById('mail').value;
   
   //We use document object to catch the radio input
    var difficulty = document.getElementsByName('difFiculty');

    

    //IN THIS LOOP we want to determine which radio input is check. If difficulty level easy is checked,optionChecked = easy.if difficulty level hard is checked the value of optionChwecked = hard.We give the value of radio input easy and hard respecttively in our html file named front.html 
    
    let optionChecked;
   

   

    for(let i = 0 ; i < difficulty.length ; i++){
        if(difficulty[i].checked){
            optionChecked = difficulty[i].value;
           
            break;
        }
    }
    
    console.log(optionChecked);


   
    
    //check whether the input field is blank or not

    if(firstName == "" || lastName == "" || email == ""){
        alert("please provide your information");
    }

    //if information is provided, new window is opened

    else{
        //here we use a window.location,href method to open the quiz.html file. In quiz.html file, we need to send the  value of optionchecked variable so that question set can be determined
        
        //syntax is `filename?variableName${assignedVariable}`

        window.location.href = `./html/quiz.html?valueOfQuestionType=${optionChecked}`;
        

       
    }
    
}