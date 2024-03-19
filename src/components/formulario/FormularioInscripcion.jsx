import React, { useState } from 'react'

const formArray =[1,2,3];
const [formNo, setformNo] = useState(formArray[0])


const FormularioInscripcion = () => {
  return (
    
    <div className='card w-[370px] roundded-md shadow-md bg-white p-5'>
        {
            formNo === 1 && <div>
                <div className='flex flex-col mb-2'>
                    <label htmlFor='name'>Nombre</label>
                    <input className='p-2 border-slate-400 mt-1 outline-0 focus:border-blue-900 rounded-md' type='text' name='name' placeholder='Nombre' id='name'/>
                </div>

                <div className='flex flex-col mb-2'>
                    <label htmlFor='lastname'>Apellido</label>
                    <input className='p-2 border-slate-400 mt-1 outline-0 focus:border-blue-900 rounded-md' type='text' name='lastname' placeholder='Apellido' id='lastname'/>
                </div>

                <div className='flex flex-col mb-2'>
                    <label htmlFor='name'>Nombre</label>
                    <input className='p-2 border-slate-400 mt-1 outline-0 focus:border-blue-900 rounded-md' type='text' name='name' placeholder='Nombre' id='name'/>
                </div>
            </div>
        }

    </div>
    
  )
}

// https://www.youtube.com/watch?v=M9WIgibsfnQ&t=673s
export default FormularioInscripcion