import io from 'socket.io-client'
import React, {useState, useEffect} from "react";

const socket = io('192.168.0.105:4000');


 //emit enviar


function PublishSubscriber(){
  let [message, setMessage] = useState("off");

  socket.on("PUBLISH", (jsonPUBLISH) => {
    
  });

  return (<div>
    <h1>Mensaje: {message}</h1>
  </div> );
}

export default PublishSubscriber;