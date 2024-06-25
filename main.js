const generalDiv = document.createElement("div");
const img = document.createElement("img");
const divPoints = document.createElement("div");
const h3 = document.createElement("h3");
const lable = document.createElement("label");
const select = document.createElement("select");
const option1 = document.createElement("option");
const option2 = document.createElement("option");
const option3 = document.createElement("option");
const option4 = document.createElement("option");
const divButtons = document.createElement("div");
const buttonP1 = document.createElement("button");
const buttonP2 = document.createElement("button");
const buttonpReset = document.createElement("button");

generalDiv.id = "general";
divPoints.id = "points";
divButtons.id = "buttons";
buttonP1.id = "pt1";
buttonP1.className="buttonsTouch"
buttonP2.id = "pt2";
buttonP2.className="buttonsTouch"
buttonpReset.id = "resetGame";
buttonpReset.className="buttonsTouch"

const body = document.querySelector("body");
body.appendChild(generalDiv);

generalDiv.appendChild(img);
generalDiv.appendChild(divPoints);
generalDiv.appendChild(divButtons);

img.src =
  "https://image.spreadshirtmedia.com/image-server/v1/products/T1459A839PA3861PT28D1033551492W8333H10000/views/1,width=550,height=550,appearanceId=839,backgroundColor=F2F2F2/table-tennis-think-fast-funny-ping-pong-table-sp-sticker.jpg";

////////////////////////77
divPoints.appendChild(h3);

h3.innerHTML =
  h3.innerHTML = `<span id="acc1">0</span> To <span id="acc2">0</span>`;

//////////////

divPoints.appendChild(lable);
lable.textContent = "Max points: ";
lable.setAttribute("for", "maxPt")
divPoints.appendChild(select);
select.id="maxPt"
select.appendChild(option1);
option1.textContent = 5;
option1.className="options"
select.appendChild(option2);
option2.textContent = 7;
option2.className="options"
select.appendChild(option3);
option3.textContent = 10;
option3.className="options"
select.appendChild(option4);
option4.textContent = 15;
option4.className="options"

divButtons.appendChild(buttonP1);
buttonP1.textContent = "+1 Player 1";
divButtons.appendChild(buttonP2);
buttonP2.textContent = "+1 Player 2";
divButtons.appendChild(buttonpReset);
buttonpReset.textContent = "Reset";


const span1=document.getElementById("acc1")
const span2=document.getElementById("acc2")

console.log(select.value);

buttonP1.addEventListener("click",()=>{
   span1.textContent++
     if (parseInt(span1.textContent)>parseInt(span2.textContent) && span1.textContent===select.value) {
        buttonP1.disabled=true
        buttonP2.disabled=true
        const congrat1=document.createElement("p")
        congrat1.textContent="Felicidades Player1 has ganado"
congrat1.id="winner1"
        congrat1.className="goodVibes"
        divPoints.appendChild(congrat1)

     }


})
buttonP2.addEventListener("click",()=>{
    span2.textContent++

    if (parseInt(span2.textContent)>parseInt(span1.textContent) && span2.textContent===select.value) {
        buttonP1.disabled=true
        buttonP2.disabled=true
        const congrat2=document.createElement("p")
        congrat2.textContent="Felicidades Player2 has ganado"
        congrat2.id="winner2"
        congrat2.className="goodVibes"

        divPoints.appendChild(congrat2)
     }


})

select.addEventListener("click", ()=>{
    span1.textContent=0
    span2.textContent=0
    buttonP1.disabled=false
    buttonP2.disabled=false
   
   
   
})

buttonpReset.addEventListener("click",()=>{
    location.reload()
})