const quizDB =[
    {
        question:"Q1:How many minutes are in a full week?",
        a:"12678",
        b:"10453",
        c:"10080",
        d:"32456",
        ans:"ans3"
    },
    {
        question:"Q2:Who is CEO  of Google?",
        a:"Adam Selipsky",
        b:"Julie Sweet",
        c:"Rajesh Gopinathan",
        d:"Sundar Pichai",
        ans:"ans4"
    },

    {
        question:"Q3:What is the full form of CSS?",
        a:"Cascading Style Sheets",
        b:"Cascading Style Sheep",
        c:"Cascading Super Sheets",
        d:"Cartoon Style Sheets",
        ans:"ans1"
    },

    {
        question:"Q4:What is the full form of HTML?",
        a:"Hello to my Land",
        b:"Hey Text Markup Language",
        c:"HyperText Makeup Language",
        d:"Hypertext Markup Language",
        ans:"ans4"
    }
    
   
];

const question =document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const Submit = document.querySelector('#Submit');

const answers = document.querySelectorAll('.answer');

const showScore = document.querySelector('#showScore');

let questionCount =0;
let score =0;

const loadQuestion =()=>{
    const questionList = quizDB[questionCount];

    question.innerText = questionList.question;

    option1.innerText= questionList.a;
    option2.innerText= questionList.b;
    option3.innerText= questionList.c;
    option4.innerText= questionList.d;
   
}

loadQuestion();

const getCheckAnswer= ()=>{
    let answer;

    answers.forEach((curAnsElem) =>{
       if(curAnsElem.checked){
        answer = curAnsElem.id;
       }
       
    });
    return answer;

};

const deselectAll =()=>{
    answers.forEach((curAnsElem)=>curAnsElem.checked=false);
}

Submit.addEventListener('click',()=>{
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer===quizDB[questionCount].ans){
        score++;
    };

    questionCount++;
    deselectAll();


    if(questionCount< quizDB.length){
        loadQuestion();
    } else{

        showScore.innerHTML =`
        <h3> You scored ${score}/${quizDB.length}</h3>
        <button class="btn" onclick="location.reload()">Play Again </button>
        
        
        `;
        showScore.classList.remove('scoreArea');

    }

})
