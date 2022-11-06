import React from 'react'
import ReactDOM from 'react-dom/client'
import ButtonConnect from './App'
import Suscribe from './ButtonSuscribe'
import { SocketProvider } from './context/socketContext'
import Publish from './Publish'
import PublishSubscriber from './PublishSubscriber'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SocketProvider>
      <ButtonConnect />
      <Suscribe/>
      <Publish/>
      <PublishSubscriber/>
    </SocketProvider>
  </React.StrictMode>
)
