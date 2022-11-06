import { useContext } from 'react';

import { SocketContext } from './context/socketContext';


function ButtonConnect() {
  const  socket  =   useContext(SocketContext)

 //emit enviar
 //on escuchar

const handleClick = (e) =>{
  e.preventDefault;

  console.log(socket);

  let JsonCONNECT = {
    "Client-ID":"1"
  }
  socket.emit('CONNECT',JsonCONNECT);
} 

socket.on("CONNACK", (JsonCONNACK) => {
  
  console.log(JsonCONNACK);
  
});

  return (<button onClick = {handleClick}> Conectarse </button>);
}

export default ButtonConnect;