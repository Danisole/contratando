import React, { useState } from 'react'



const FormularioInscripcion = () => {
    const formArray =[1,2,3];
    const [formNo, setformNo] = useState(formArray[0])


  return (
    <div className='px-4 sm:w-2/3 lg:w-1/2 mx-auto'>
            <div className='rounded-lg shadow-lg bg-white -mt-24 py-10 md:py-12 px-4 md:px-6' id='formulario'>
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
                            <label htmlFor='date'>Fecha de Nacimiento</label>
                            <input className='p-2 border-slate-400 mt-1 outline-0 focus:border-blue-900 rounded-md' type='date' name='date' placeholder='DD/MM/AAAA' id='date'/>
                        </div>
                        <div className='flex flex-col mb-2'>
                            <label htmlFor='documento'>Documento</label>
                            <input className='p-2 border-slate-400 mt-1 outline-0 focus:border-blue-900 rounded-md' maxLength={8} required type='number' name='documento' placeholder='Documento' id='documento'/>
                        </div>
                        <div className='flex flex-col mb-2'>
                            <label htmlFor='addres'>Domicilio</label>
                            <input className='p-2 border-slate-400 mt-1 outline-0 focus:border-blue-900 rounded-md' type='text' name='addres' placeholder='Domicilio' id='addres'/>
                        </div>
                        <div className='flex flex-col mb-2'>
                            <label htmlFor='tel1'>Telefono</label>
                            <input className='p-2 border-slate-400 mt-1 outline-0 focus:border-blue-900 rounded-md' type='number' name='tel1' placeholder='Telefono' id='tel1'/>
                        </div>
                        <div className='flex flex-col mb-2'>
                            <label htmlFor='tel2'>Telefono Alternativo</label>
                            <input className='p-2 border-slate-400 mt-1 outline-0 focus:border-blue-900 rounded-md' type='number' name='tel2' placeholder='Alternativo' id='tel2'/>
                        </div>
                        <div className='flex flex-col mb-2'>
                            <label htmlFor='email'>Email</label>
                            <input className='p-2 border-slate-400 mt-1 outline-0 focus:border-blue-900 rounded-md' type='email' name='email' placeholder='Email' id='emaul'/>
                        </div>
                        <div className='mt-4 flex justify-center items-center'>
                            <button style={{ width: '60%' }} className='w-full px-6 py-3 bg-brandPrimary  text-white font-medium uppercase rounded-full shadow-md hover:bg-blue-900 hover:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-900'>Siguiente</button>
                        </div>
                    </div>
                }
                {
                    formNo === 2 && <div>
                        <div className='flex flex-col mb-2'>
                            <label htmlFor='name'>Nombre</label>
                            <input className='p-2 border-slate-400 mt-1 outline-0 focus:border-blue-900 rounded-md' type='text' name='name' placeholder='Nombre' id='name'/>
                        </div>

                        <div className='flex flex-col mb-2'>
                            <label htmlFor='lastname'>Apellido</label>
                            <input className='p-2 border-slate-400 mt-1 outline-0 focus:border-blue-900 rounded-md' type='text' name='lastname' placeholder='Apellido' id='lastname'/>
                        </div>

                        <div className='flex flex-col mb-2'>
                            <label htmlFor='addres'>Domicilio</label>
                            <input className='p-2 border-slate-400 mt-1 outline-0 focus:border-blue-900 rounded-md' type='text' name='addres' placeholder='Domicilio' id='addres'/>
                        </div>
                        <div className='flex flex-col mb-2'>
                            <label htmlFor='tel1'>Telefono</label>
                            <input className='p-2 border-slate-400 mt-1 outline-0 focus:border-blue-900 rounded-md' type='number' name='tel1' placeholder='Telefono' id='tel1'/>
                        </div>
                        <div className='flex flex-col mb-2'>
                            <label htmlFor='tel2'>Telefono Alternativo</label>
                            <input className='p-2 border-slate-400 mt-1 outline-0 focus:border-blue-900 rounded-md' type='number' name='tel2' placeholder='Alternativo' id='tel2'/>
                        </div>
                        <div className='flex flex-col mb-2'>
                            <label htmlFor='email'>Email</label>
                            <input className='p-2 border-slate-400 mt-1 outline-0 focus:border-blue-900 rounded-md' type='email' name='email' placeholder='Email' id='emaul'/>
                        </div>
                        <div className='flex flex-col mb-2'>
                            <label htmlFor='documento'>Documento</label>
                            <input className='p-2 border-slate-400 mt-1 outline-0 focus:border-blue-900 rounded-md' type='number' name='documento' placeholder='Documento' id='documento'/>
                        </div>
                        <div className='mt-4 gap-3 flex justify-center items-center'>
                            <button className='w-full px-6 py-3 bg-brandPrimary  text-white font-medium uppercase rounded-full shadow-md hover:bg-blue-900 hover:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-900'>Anterior</button>
                            <button className='w-full px-6 py-3 bg-brandPrimary  text-white font-medium uppercase rounded-full shadow-md hover:bg-blue-900 hover:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-900'>Siguiente</button>

                        </div>
                    </div>
                }
                        

            </div>
    </div>
    
  )
}

// https://www.youtube.com/watch?v=M9WIgibsfnQ&t=673s
export default FormularioInscripcion;