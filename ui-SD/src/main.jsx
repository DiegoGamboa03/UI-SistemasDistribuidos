import React from 'react'
import ReactDOM from 'react-dom/client'
import ButtonConnect from './App'
import Suscribe from './ButtonSuscribe'
import Publish from './Publish'
import PublishSubscriber from './PublishSubscriber'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ButtonConnect />
    <Suscribe/>
    <Publish/>
    <PublishSubscriber/>
  </React.StrictMode>
)
