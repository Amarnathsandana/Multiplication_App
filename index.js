const num1 = Math.ceil(Math.random()*10);
const num2 = Math.ceil(Math.random()*10);

const ques=document.getElementById("question");

ques.innerText =`What is ${num1} multiply by ${num2}?`;

const ans = num1*num2;

let score = JSON.parse(localStorage.getItem("score"));

const sc=document.getElementById("scoreel");

if(!score || score<0)
{
    score=0;
}
sc.innerText=`score: ${score}`;

const form=document.getElementById("form");
const input=document.getElementById("input");

form.addEventListener("submit",()=>{

    const val= +input.value;

    if(val===ans)
    {
        score++;
        updatelocalstorage();
    }
    else{
        score--;
        updatelocalstorage();
    }
})

function updatelocalstorage()
{
    localStorage.setItem("score",JSON.stringify(score));

}
