import React from "react";
import aboutImg from "../assets/mobile-login.png";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";



const Suscribete = () => {
 

 
  return (
    <>
    
        <div className="my-12" id="suscribete">
          {/* about text */}
          <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-12">
            <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
              <motion.div
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              >
                <img src={aboutImg} alt="" className="w-full" />
              </motion.div>
              <motion.div
              variants={fadeIn("left", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="md:w-3/5 mx-auto">
                <div className="text-center">
                  <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5">
                    Suscribete a CONTRATANDO
                  </h2>
                  <p className="md:w-3/4 text-sm text-neutralGrey mb-8">
                    Suscribete asi poder ser uno de los profesionales acreditados que integran nuestra base de datos
                  </p>
                </div>  
                 
                  <div className="flex flex-row justify-center items-center">

                    <button className="btn-primary mr-20 rounded-lg flex flex-col justify-center items-center">
                      
                        Individuo
                        <ion-icon name="person-outline"></ion-icon>             
                      
                      
                    </button>

                    <button className="btn-primary rounded-lg flex flex-col justify-center items-center">
                    
                        Empresa
                      <ion-icon name="business-outline"></ion-icon>
                    
                    </button>
                  
                  </div>
                  
              </motion.div>
            </div>
          </div>

        </div>
    </>
    
  );
};

export default Suscribete;
