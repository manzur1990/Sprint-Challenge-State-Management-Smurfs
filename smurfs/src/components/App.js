import React, {useState, useEffect} from 'react'
import axios from 'axios'

//Context
import {SmurfContext} from '../context/SmurfContext'

//Components
import SmurfForm from './SmurfForm'
import Smurfs from './Smurfs'


export default function App() {
const [smurfs, setSmurfs] = useState([])
console.log("current sate",smurfs)
const [newSmurf, setNewSmurf] = useState({
  name:'',
  age:'',
  height:'',
  id:''
})

const onChange = e => {
  const smurf = e.target.name
  setNewSmurf({
      ...newSmurf,
      [smurf]: e.target.value, id: Date.now()
  })
}

useEffect(() =>{
  axios.get('http://localhost:3333/smurfs')
  .then(res=>{
    setSmurfs(res.data)
  })
},[])

const onSubmit = (e) => {
  e.preventDefault();
  axios.post("http://localhost:3333/smurfs", {...newSmurf})
    .then((res) => console.log("post: ", res))
    .catch((err) => {
      console.log("post: ", err);
    });
};

  return (
    <SmurfContext.Provider value={{onSubmit, smurfs, onChange}}>
      <Smurfs/>
      <SmurfForm/>
    </SmurfContext.Provider>
  )
}
