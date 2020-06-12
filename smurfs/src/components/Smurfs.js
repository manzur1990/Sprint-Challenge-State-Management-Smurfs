import React, {useContext} from 'react'

//Component
import Smurf from './Smurf'

//Context
import {SmurfContext} from '../context/SmurfContext'


export default function Smurfs() {

    const {smurfs} = useContext(SmurfContext)

    return (
        <div>
           {smurfs.map(smurf => 
           <Smurf 
           key={smurf.id} 
           smurf={smurf}
           />)} 
        </div>
    )
}
