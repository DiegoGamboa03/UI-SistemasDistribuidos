import io from 'socket.io-client'

const socket = io('192.168.0.105:4000')

 //emit enviar
 //on escuchar

const handleClick = (e) =>{
  e.preventDefault;

  let JsonCONNECT = {
    "Client-ID":"1"
  }
  socket.emit('CONNECT',JsonCONNECT);
} 

socket.on("CONNACK", (JsonCONNACK) => {
  
  console.log(JsonCONNACK);
  
});

function ButtonConnect(){
  return <button onClick = {handleClick}> Conectarse </button>
}

export default ButtonConnect;