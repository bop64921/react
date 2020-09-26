import React from 'react'
import ReactDOM from 'react-dom'


const usuario ={

firstName:'Raul',
lastName: 'Palacios',
avatar:'https://i.blogs.es/aada45/61-dukedanl._ac_sl1000_/500_333.jpg',


}

function getName(usuario){

return `${usuario.firstName} ${usuario.lastName}`

}

function getGreeting (usuario){

if(usuario){
  return <h1>Hola {getName(usuario)}</h1>
}
return <h1>Hola Extraño</h1>
}


const nombre =  'David'
const elemento = (
<div>
<h1>{getGreeting(usuario)}</h1>
<img src={usuario.avatar}/>

</div>

)
const contenedor1 = document.getElementById('root')

ReactDOM.render(elemento, contenedor1)