import React from 'react'

export default function Smurf(props) {
    return (
        <div>
        <h1 className="name">{props.smurf.name}</h1> 
    <h3 className="age">{props.smurf.age}</h3> 
        <h3 className="height">{props.smurf.height}</h3>
        </div>
    )
}
