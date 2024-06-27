const si=document.getElementById("si")
const no=document.getElementById("no")
const cerrar=document.getElementById("container")
const modal=document.getElementById("body")
const title=document.getElementById("title")
const perdon=document.getElementById("perdon")
let currentWidth =150
let currentHeightmenos=50
let currentwidthmenos=50
let currentHeight =100
let textfontSize= 30
let textfontSizemenos=30

let citas=[
    {
        cita:"Dale amor 😜"
    },
    {
        cita:"AMOR perdon si 🥺"
    },
    {
        cita:"No sabes lo terrible que me siento por lo que he hecho.💔"
    },
    {
        cita:"No se va poder aunque lo intentes 😁"
    },
    {
        cita:"ya pon que si🤭"
    },
    {
        cita:"Di que siii 😘"
    }
]

si.addEventListener("click",()=>{
    Cambiarfondo()
    title.style.display="none"
    let body=document.createElement("div")
    body.className="body"
   body.innerHTML=`
   <h1>💘💘</h1>
   <img class="imagen"src="https://img.freepik.com/vector-gratis/corazon-chispas_25030-68210.jpg?size=338&ext=jpg&ga=GA1.1.1488620777.1713139200&semt=ais">
   <h3>Te amo mi amor</h3>

   
   
   `

    modal.append(body)

})


no.addEventListener("click",()=>{
    perdon.style.display="none"
aumentar()
frace()

})
function generarcitas(min,max) {
    return Math.floor(Math.random()*(max-min)+min)
}

const frace=()=>{
let indice=generarcitas(0,citas.length)


title.innerText=`${citas[indice].cita}`
title.classList="frace"

}



const aumentar=()=>{
    textfontSizemenos-=1
    textfontSize+=10
    currentHeightmenos-=10;
    currentwidthmenos-=10
    currentWidth += 50; 
    currentHeight += 50;

    si.style.width= `${currentWidth}px`; 
    si.style.height = `${currentHeight}px`; 
    si.style.fontSize=`${textfontSize}px`
    no.style.height=`${currentHeightmenos}px`
    no.style.fontSize=`${textfontSizemenos}px`
    no.style.width=`${currentwidthmenos}px`


}
const  Cambiarfondo=()=>{
    cerrar.style.display="none"
}
