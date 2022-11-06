import io from 'socket.io-client'
import React, {useState, useEffect} from "react";

const socket = io('http://localhost:4000');


 //emit enviar


function PublishSubscriber(){
  let [message, setMessage] = useState("off");

  socket.on("PUBLISH", (jsonPUBLISH) => {
    
    setMessage(jsonPUBLISH['Message']);
  
  });

  return (<div>
    <h1>Mensaje: {message}</h1>
  </div> );
}

export default PublishSubscriber;