addEventListener('load',
document.querySelector('.boton').addEventListener('click',pintar,false)

,false);


function pintar(){
    fetch('http://localhost:3000')
    .then(res=>res.text())
    .then(res=>{
        document.querySelector('.res').innerHTML=res;
    })
    .catch(error=>console.log(error))

}    
