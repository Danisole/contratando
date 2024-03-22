import React, { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Button from './Button';

const FormularioInscripcion = () => {
  const [formNo, setFormNo] = useState(1);
  const formArray = [1, 2, 3];

  const handleNext = () => {
    if (formNo < formArray.length) {
      setFormNo(formNo + 1);
    }
  };

  const handlePrevious = () => {
    if (formNo > 1) {
      setFormNo(formNo - 1);
    }
  };

  return (
    <div className='px-4 sm:w-2/3 lg:w-1/2 mx-auto'>
      <div className='rounded-lg shadow-lg bg-white -mt-24 py-10 md:py-12 px-4 md:px-6' id='formulario'>
        {formNo === 1 && <Step1 />}
        {formNo === 2 && <Step2 />}
        {formNo === 3 && <Step3 />}

        <div className='flex flex-col mb-2 mt-4 gap-3 justify-center items-center'>
          {formNo > 1 && (
            <Button text='Anterior' direction='previous' onClick={handlePrevious} />
          )}
          {formNo < formArray.length && (
            <Button text='Siguiente' direction='next' onClick={handleNext} />
          )}
        </div>
      </div>
    </div>
  );
};

export default FormularioInscripcion;