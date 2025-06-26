const containerEl = document.querySelector(".container")

const leftEl = document.querySelector('.left');
const rightEl =document.querySelector(".right");

const btnEl = document.querySelectorAll(".btn");
const  popupContainerEl = document.querySelector(".popup-container");
const closeIconEl = document.querySelector(".close-icon");
const containerAEl = document.querySelector(".offer-container"); 


const containerA1El = document.querySelector(".containerA1");
const featuresEl = ["Levono","Price : $20,000","Model : LevonoMax","Ram : 6GB","Memory : 250GB"];
const containerA2El = document.querySelector(".containerA2");
const feature = ["Samsung","Price : $50,000","Model : SamsungPromax","Ram : 12GB","Memory : 520GB"];

let featuresIndex = 0;
let characterIndex = 0;

let featuresIndexB = 0;
let characterIndexB = 0;

updateText1();
updateText2();

leftEl.addEventListener("mouseenter",() =>{
    containerEl.classList.add("active-left");
    updateText1();
});

leftEl.addEventListener("mouseleave",() => {
    containerEl.classList.remove("active-left");
     updateText2();
});

rightEl.addEventListener("mouseenter",() => {
     containerEl.classList.add("active-right");
     updateText2();
     
});

rightEl.addEventListener("mouseleave",() => {
    containerEl.classList.remove("active-right");
      updateText1();
});

function updateText1(){
    characterIndex++;

    containerA1El.innerHTML = `<h4>
      ${featuresEl[featuresIndex].slice(0,characterIndex)}
    </h4>`;

 if(characterIndex === featuresEl[featuresIndex].length){
    featuresIndex++;
    characterIndex = 0;
 }

 if(featuresIndex === featuresEl.length){
    characterIndex = 0;
 }

 setTimeout(updateText1,400);
}

function updateText2(){
  characterIndexB++;
  containerA2El.innerHTML = `<h4>
      ${feature[featuresIndexB].slice(0,characterIndexB)}
    </h4>`;

 if(characterIndexB === feature[featuresIndexB].length){
    featuresIndexB++;
    characterIndexB = 0;
 }

 if(featuresIndexB === feature.length){
    characterIndexB = 0;
 }

 setTimeout(updateText2,400);
}


btnEl.addEventListener("click",() => {
  popupContainerEl.classList.remove("active");
  containerAEl.classList.add("active")
});
closeIconEl.addEventListener("click",() => {
    popupContainerEl.classList.add("active")
    containerAEl.classList.remove("active");
})
