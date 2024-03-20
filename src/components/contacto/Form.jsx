import { useForm, Controller } from 'react-hook-form'
import React from 'react'
import IconInfo from './IconInfo'
import IconEmail from '../../icons/IconEmail'
import IconPhone from '../../icons/IconPhone'
import FormElement from './FormElement'


const Form = () => {

    const { control,
            handleSubmit,
            formState: { errors },
            reset 
        } = useForm({
        defaultValues: {
            name:'',
            email:'',
            message:'',
        },
    })

    const onSubmit = data => {
        console.log(data);
        reset();
    }

  return (
    <div className='xl:container mx-auto mb-32' id='contacto'>
        <div
            className='flex justify-center'
            style={{
                background:'#F5F7FA',
                height: '250px',
            }}
        >
            <h6 className='text-3xl sm:text-4xl text-neutralDGrey font-semibold uppercase pt-12'>Contacto</h6>
        </div>
        <div className='px-4 sm:w-2/3 lg:w-1/2 mx-auto'>
            <div className='rounded-lg shadow-lg bg-white -mt-24 py-10 md:py-12 px-4 md:px-6'>
                <div className='grid grid-cols-2 gap-x-6 mb-12 mx-auto'>
                    <a href="mailto:danisole82@gmail.com" target={"_blanc"}><IconInfo icon={<IconEmail/>} text="ifo@contratando.com"/></a>
                    <a  href="https://api.whatsapp.com/send?phone=5492645042782" target={"_blanc"}><IconInfo icon={<IconPhone/>} text="+5492645042782"/></a>                    
                </div>
                <div>
                <form onSubmit={handleSubmit(onSubmit)}>

                        <Controller 
                            name='name'
                            control={control}
                            rules={{required: true}}
                            render={({field})=>(
                                <FormElement 
                                    type="text" 
                                    label="Nombre" 
                                    placeholder="Ingrese su nombre.." 
                                    fieldRef={field} 
                                    hasError={errors.name?.type === 'required'}
                                />
                            )}
                        />
                        <Controller 
                            name='email'
                            control={control}
                            rules={{required: true}}
                            render={({field})=>(
                                <FormElement 
                                type="email" 
                                label="Email" 
                                placeholder="Ingrese su email.." 
                                fieldRef={field} 
                                hasError={errors.email?.type === 'required'}
                                />
                                )}
                        />
                        <Controller 
                            name='message'
                            control={control}
                            rules={{required: true}}
                            render={({field})=>(
                                <FormElement 
                                    type="textarea" 
                                    label="Mensaje" 
                                    placeholder="Ingrese su mensaje.." 
                                    fieldRef={field} 
                                    hasError={errors.message?.type === 'required'}
                                />
                                )}
                        />
                        <button type='submit' className='w-full px-6 py-3 bg-brandPrimary  text-white font-medium uppercase rounded-full shadow-md hover:bg-blue-900 hover:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-900'>
                            Enviar
                        </button>

                    </form>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Form