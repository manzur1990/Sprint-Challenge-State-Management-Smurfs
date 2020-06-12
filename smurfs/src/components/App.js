import React, {useState, useEffect} from 'react'
import axios from 'axios'

//Context
import SmurfContext from '../context'

//Components
import SmurfForm from './SmurfForm'
import Smurfs from './Smurfs'


export default function App() {
const [smurfs, setSmurfs] = useState([])

const addSmurf = newSmurf => {
  setSmurfs([...smurfs, newSmurf])
}

useEffect(() =>{
  axios
  .get('http://localhost:3333/smurfs')
  .then(res=>{
    setSmurfs(res.data)
  })
},[])

  return (
    <SmurfContext.Provider value={{addSmurf, smurfs}}>
      <Smurfs/>
      <SmurfForm/>
    </SmurfContext.Provider>
  )
}
