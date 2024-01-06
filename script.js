const containerE1 = document.querySelector(".container");

for(let index =0;index<50;index++){

    const colorContainerE1 = document.createElement("div");
    colorContainerE1.classList.add("color-container");

    const colorCodeE1 = document.createElement("span");
    colorCodeE1.classList.add("color-code");
    colorContainerE1.appendChild(colorCodeE1);
    
    const copyButtonE1 = document.createElement("button");
    copyButtonE1.innerText = "Copy";
    colorContainerE1.appendChild(copyButtonE1);

    containerE1.appendChild(colorContainerE1);
    console.log(containerE1);
}

function randomColor(){
    const chars ="0123456789ABCDEF";
    const colorCodeLength = 6;
    let colorCode =  "";
    for(let index =0;index<colorCodeLength;index++){

        const randomNum = Math.floor(Math.random() * chars.length);
        colorCode += chars.substring(randomNum,randomNum+1);
        // console.log(colorCode);
    }
    return colorCode;
}
randomColor();

const colorContainerEls = document.querySelectorAll(".color-container");
generateColors();

function generateColors(){
    for(let i=0;i<colorContainerEls.length;i++){

        const colorContainerE1 = colorContainerEls[i];
        const newColorCode = randomColor();
        const colorCodeE1 = colorContainerE1.querySelector(".color-code");

        colorContainerE1.style.backgroundColor = "#" + newColorCode;

        colorCodeE1.innerText = "#" + newColorCode;
    }
}

colorContainerEls.forEach((colorContainerE1 )=>{
     const copyButtonE1 = colorContainerE1.querySelector("button");
     const colorCodeE1 = colorContainerE1.querySelector(".color-code");

     copyButtonE1.addEventListener("click",()=>{
        const colorCode =  colorCodeE1.innerText;
        copyClipBoard(colorCode);
     });


});
function copyClipBoard(text){

    navigator.clipboard.writeText(text).then(() =>{
        alert("Copied to Clipboard : "+ text);
    })
    .catch((error)=>{
        console.log("Failed to Copy to Clipboard",error);
    })
}