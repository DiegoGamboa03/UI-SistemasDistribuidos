import io from 'socket.io-client'
import React, {useRef, useState, useContext} from "react";
import { SocketContext } from './context/socketContext';


 //emit enviar
 //on escuchar


function Suscribe(){
  const  socket  =   useContext(SocketContext);

  socket.on("SUBACK", (jsonSUBACK) => {
  
    console.log(jsonSUBACK);
    
  });

  socket.on("SUBACK", (jsonSUBACK) => {
  
    console.log(jsonSUBACK);
    
  });

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