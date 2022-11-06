import io from 'socket.io-client'
import React, {useRef, useState} from "react";

const socket = io('192.168.0.105:4000')

 //emit enviar
 //on escuchar
 
socket.on("SUBACK", (jsonSUBACK) => {
  
  console.log(jsonSUBACK);
  
});

function Suscribe(){

const textInput = useRef(null);
const textInputIDClient = useRef(null);

const handleClick = (e) =>{
    e.preventDefault;
    let mensaje = textInput.current.value;
    let jsonSUBSCRIBE = {
      "Client-ID": textInputIDClient.current.value,
      "Topic": mensaje
    }
  
    console.log(mensaje);
  
    socket.emit('SUBSCRIBE',jsonSUBSCRIBE);
  } 

const [mensaje, setMensaje] = useState();

  return <div>
    <input ref = {textInput}></input>
    <input ref = {textInputIDClient}></input>
    <button onClick = {handleClick}> Suscribirse </button>
  </div> 
}

export default Suscribe;