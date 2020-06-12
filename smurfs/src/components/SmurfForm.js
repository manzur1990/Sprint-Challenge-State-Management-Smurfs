import React, { useContext } from 'react'
import { SmurfContext } from '../context/SmurfContext'


export default function SmurfForm() {
    const {onSubmit, onChange} = useContext(SmurfContext)

   
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input 
                type='text'
                name='name'
                placeholder='name'
                onChange={onChange}
                /> 
                <br/>
                <input 
                type='text'
                name='age'
                placeholder='age'
                onChange={onChange}
                /> 
                <br/>
                <input 
                type='text'
                name='height'
                placeholder='height'
                onChange={onChange}
                /> 
                <br/>

                <button className="button"></button>
                
            </form>
        </div>
    )
}
