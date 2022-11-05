import io from 'socket.io-client'
import React, {useRef, useState} from "react";

const socket = io('http://localhost:4000')

 //emit enviar
 //on escuchar
 
function Publish(){

const textInput = useRef(null);

const handleClick = (e) =>{
    e.preventDefault;
    let mensaje = textInput.current.value;
    let jsonPUBLISH = {
      "Client-ID":"Diego",
      "Topic": mensaje,
      "Message": "on"
    }
  
    console.log(mensaje);
  
    socket.emit('PUBLISH',jsonPUBLISH);
  } 

const [mensaje, setMensaje] = useState();

  return <div>
    <input ref = {textInput}></input>
    <button onClick = {handleClick}> Publicar </button>
  </div> 
}

export default Publish;