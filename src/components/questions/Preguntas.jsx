import React from "react";
import Acordeon from "./Acordeon";

const Preguntas = () => {
  return (
    <div className="p-4 bg-gray-200 rounded-lg">
      <Acordeon
        title="Cual es el alcance geografico de Contratando"
        answer="Nuestra plataforma es un servicio para los Sanjuaninos por el momento"
      />
      <Acordeon
        title="Cuantas actividades puedo registrar"
        answer="Tendras la posibilidad de registrar una actividad principal dentro de los rubros establecidos y luego por agregar actividades secundarias"
      />
      <Acordeon title="Suscribirme a contratando tiene algun costo" 
      answer="No, suscribirse a nuestra plataforma es totalmente gratuito" />
    </div>
  );
};

export default Preguntas;