//declaring easy question array
let easyQuestions =[
    {
    question : "A certain current source has the values IS = 4 µA and RS = 1.2 M. The values for an equivalent voltage source are-",
    options :[
        {text : "4.8 V, 1.2 M", correct : false},
        {text : "1 V, 1.2 M", correct : true},
        {text :"4.1 V, 1.76 M", correct : false},
        {text : "9.8 V, 1.6 M", correct : false}
        ],
    correctAnswer :  "1 V, 1.2 M"   
    },
    {
     question : "A 680  load resistor, RL, is connected across a constant current source of 1.2 A. The internal source resistance, RS, is 12 k. The load current, RL, is",
    options :[
        {text : "0 A", correct : false},
        {text : "1.2 A", correct : true},
         {text :"114 A", correct : false},
        {text : "1.14 A", correct : false}
        ],
        correctAnswer :   "0 A" 
    },
    

    {
    question : "A 120 V voltage source has a source resistance, RS, of 60 . The equivalent current source is -",
    options :[
        {text : "2 A", correct : true},
        {text : "4 A", correct : false},
        {text : "200 mA", correct : false},
        {text: "400 mA", correct : false}
        ],
        correctAnswer :   "2 A" 
    },

    {
    question : "A 12 V source has an internal resistance of 90 . If a load resistance of 20  is connected to the voltage source, the load power, PL, is-",
    options :[
        {text : "456 mW", correct : false},
        {text : "200 W", correct : false},
        {text : "238 mW", correct : true},
        {text: "400 W", correct : false}          
    ],
    correctAnswer :   "238 mW"
    },
   
    {
     question : "In a two-source circuit, one source acting alone produces 12 mA through a given branch. The other source acting alone produces 10 mA in the opposite direction through the same branch. The actual current through the branch is",
    options :[
        {text : "22 mA", correct : false},
        {text : "12 mA", correct : true},
        {text : "10 mA", correct : false},
        {text: "2 mA", correct : false}
        ],
        correctAnswer : "12 mA"
    },
    
 
    {
    question : "A 470  RL is connected across a voltage source, VS, of 120 V. The source's internal resistance, RS, is 12 . What is the output voltage across the load?",
    options :[
        {text : "202 mV", correct : false},
        {text : "102 V", correct : false},
        {text : "117 v", correct : true},
        {text: "124 V", correct : false}
        ],

    correctAnswer :  "117 v"   
    },

    {
     question : "A 120  load is connected across a voltage source with VS = 12 V and RS = 8 . The voltage across the load is",
     options :[
        {text : "0 V", correct : false},
        {text : "15.25 V", correct : false},
        {text : "18 v", correct : false},
        {text: "11.25 V", correct : true}
        ],

    correctAnswer :    "11.25 V" 
    },
            
    {
    question : "A 12 mA current source has an internal resistance, RS, of 1.2 k. The equivalent voltage source is",
        options :[
        {text : "25 V", correct : false},
        {text : "15.25 V", correct : false},
        {text : "14.4 v", correct : true},
        {text: "14.4 mV", correct : false}
        ],

        correctAnswer : "14.4 v"
    }, 
    
    {
    question : "In the complex plane, the number 14 – j5 is located in the",
    options :[
        {text : "1st quadrant", correct : false},
        {text : "2nd quadrant", correct : true},
        {text : "3rd quadrant", correct : false},
        {text: "4th quadrant", correct : false}
        ],
        correctAnswer : "2nd quadrant"
    }, 
    {
    question : "A positive angle of 30° is equivalent to a negative angle of",
    options :[
        {text : "-240", correct : false},
        {text : "-120", correct : false},
        {text : "-60", correct : true},
        {text: "-360", correct : false}
        ],

        correctAnswer : "-60"
    }
]


//declaring hard question array

let hardQuestions =[
    {
    question : "When a 15 V input pulse with a width equal to two time constants is applied to an RC integrator, the capacitor charges to-",
    options :[
        {text : "23.67", correct : false},
        {text : "100", correct : false},
        {text :"14.45", correct : false},
        {text : "19.45", correct : true}
        ],
        correctAnswer : "19.45"

    },
    {
     question : "With an RL integrator, at the instant of the rising pulse edge,",
    options :[
        {text : "all the input voltage is across the resistor", correct : false},
        {text : "all the input voltage is across the inductor", correct : true},
         {text :"percent of the input voltage is across the resistor", correct : false},
        {text : "None of above", correct : false}
        ],
        correctAnswer : "all the input voltage is across the inductor"
    },

    {
    question : "When a 12 V input pulse with a width equal to one time constant is applied to an RC integrator, the capacitor charges to",
    options :[
        {text : "20 V", correct : false},
        {text : "40 mV", correct : false},
        {text : "200 mV", correct : false},
        {text: "56 V", correct : true}
        ],
        correctAnswer : "56 V"
    },

    {
    question : "A steady-state condition is reached when-",
    options :[
        {text : "the output voltage reaches the average value of the input voltage", correct : true},
        {text : "the output voltage reaches the input voltage", correct : false},
        {text : "all of above", correct : false},
        {text: "none of above", correct : false}          
        ],
        correctAnswer : "the output voltage reaches the average value of the input voltage"
        },
    {
     question : "A single 6 V pulse with a width of 600 s is applied to an integrator consisting of a 150 k resistor and a 0.002 F capacitor. To what voltage will the capacitor charge?",
    options :[
        {text : "22 mV", correct : false},
        {text : "12 mV", correct : false},
        {text : "16 V", correct : true},
        {text: "2 v", correct : false}
        ],
        correctAnswer : "16 V"
    },
 
    {
    question : "An RC differentiator acts as a",
    options :[
        {text : "LP Filter", correct : false},
        {text : "HP filter", correct : false},
        {text : "BP Filter", correct : false},
        {text: "BR filter", correct : true}
        ],
        correctAnswer : "BR filter"
    },

    {
     question : "The output of an RC integrator is taken across the",
     options :[
        {text : "Inductor", correct : false},
        {text : "Capacitor", correct : true},
        {text : "resistance", correct : false},
        {text: "All of above", correct : false}
        ],
        correctAnswer : "Capacitor"
    },
            
    {
    question : "If the RC time constant of an integrator is increased, as the time constant is increased",
        options :[
        {text : "the resistance charges less during a pulse and discharges more between pulses", correct : false},
        {text : "the inductor charges less during a pulse and discharges more between pulses", correct : false},
        {text : "the capacitor charges less during a pulse and discharges more between pulses", correct : false},
        {text: "the capacitor charges less during a pulse and discharges less between pulses", correct : true}
        ],
        correctAnswer : "the capacitor charges less during a pulse and discharges less between pulses"
    }, 
    
    {
    question : "What is the highest frequency contained in a pulse that has a rise and fall time equal to 10 microseconds (10 s)?",
    options :[
        {text : "35 kHz", correct : true},
        {text : "20 Hz", correct : false},
        {text : "100 kHz", correct : false},
        {text: "40 kHz", correct : false}
        ],
        correctAnswer : "35 kHz"
    }, 
    {
    question : ".In an RC differentiator, the capacitor",
    options :[
        {text : "charges exponentially at a rate depending on the RC time constant", correct : true},
        {text : "charges exponentially at a rate depending on the input voltage", correct : false},
        {text : "charges when the input voltage is decreasing", correct : false},
        {text: "charges to approximately one time constant", correct : false}
        ], 
        correctAnswer : "charges exponentially at a rate depending on the RC time constant"
    }
]

var easy = selectedQuestions(easyQuestions);
var hard = selectedQuestions(hardQuestions);
function selectedQuestions(questionSet){
    //console.log(questionSet)
    //console.log("====>",questionSet.length)
    for(let i = questionSet.length -1; i > 0 ; i--){
        let randomIndex = Math.round(Math.random())*(i-1);
        [questionSet[i],questionSet[randomIndex]] = [questionSet[randomIndex],questionSet[i]]
    }
    //console.log(questionSet);
    return questionSet.splice(3,5)
}
//console.log(easy,hard)
export {easy,hard}