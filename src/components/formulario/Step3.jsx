import React, { useState } from 'react';
import Input from './Input';

const Step3 = () => {
  const [formData, setFormData] = useState({
    name: '',
    lastname: '',
    date: '',
    documento: '',
    addres: '',
    tel1: '',
    tel2: '',
    email: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h1 className='text-xl font-bold mb-4'>Formulario de Inscripción</h1>
      <div className='flex flex-wrap -mx-2'>
        <Input
          label='Nombre'
          type='text'
          name='name'
          placeholder='Nombre'
          value={formData.name}
          onChange={handleChange}
        />
        <Input
          label='Apellido'
          type='text'
          name='lastname'
          placeholder='Apellido'
          value={formData.lastname}
          onChange={handleChange}
        />
        <Input
          label='Fecha de Nacimiento'
          type='date'
          name='date'
          placeholder='DD/MM/AAAA'
          value={formData.date}
          onChange={handleChange}
        />
        <Input
          label='Documento'
          type='number'
          name='documento'
          placeholder='Documento'
          value={formData.documento}
          onChange={handleChange}
        />
        <Input
          label='Domicilio'
          type='text'
          name='addres'
          placeholder='Domicilio'
          value={formData.addres}
          onChange={handleChange}
        />
        <Input
          label='Telefono'
          type='number'
          name='tel1'
          placeholder='Telefono'
          value={formData.tel1}
          onChange={handleChange}
        />
        <Input
          label='Telefono Alternativo'
          type='number'
          name='tel2'
          placeholder='Alternativo'
          value={formData.tel2}
          onChange={handleChange}
        />
        <Input
          label='Email'
          type='email'
          name='email'
          placeholder='Email'
          value={formData.email}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default Step3;