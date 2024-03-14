
import React from 'react';
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";
import Preguntas from './questions/Preguntas';

const Faq = () => {
    
    return (
        <div  className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-12' id='faq'>
            <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
            
            className='text-center md:w-1/1 mx-auto'>
                <h2 className="text-4xl text-neutralDGrey font-semibold mb-4">
                Preguntas Frecuentes
                </h2>
                <p className="text-sm text-neutralGrey mb-8 md:w-3/4 mx-auto">
                Respuestas rápidas a tus preguntas sobre CONTRATANDO. Encuentra lo que necesitas saber en nuestra sección de preguntas frecuentes.
                </p>

                <Preguntas/>
            </motion.div>

           
        </div>
    );
};

export default Faq;