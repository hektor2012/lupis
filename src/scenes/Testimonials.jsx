import { useState } from 'react';
import LineGradient from "../components/LineGradient";

const Testimonials = () => {
  const [showMap, setShowMap] = useState(false);

  const toggleMapVisibility = () => {
    setShowMap(!showMap);
  };

  return (
    <section id="recepción" className="pt-32 pb-15">
      {/* HEADING */}
      
        <p className="font-playfair font-semibold text-4xl mb-3 text-red text-center">
          RECEPCIóN
        </p>
        <LineGradient width="mx-auto w-14/5" />
        <p className="mt-10 text-3xl">
          Al terminar la ceremonia religiosa, estaremos encantados de recibir a todos los asistentes en la recepción 
          que tendrá lugar en <span> Salón de Usos Múltiples SNTE</span>, ubicado en Paseo de los Insurgentes Manzana 022, La Trinidad, 52400 Tenancingo de Degollado, Méx..
        </p>
      <div className="flex justify-end">
        <button 
          onClick={toggleMapVisibility}
          style={{
            backgroundColor: "#f50057",
            color: "white",
            padding: "10px 20px",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer",
            marginBottom: "10px",
          }}
        >
          {showMap ? 'Ocultar mapa' : 'Ver ubicación en el mapa'}
        </button>
      </div>

      {/* Google Map */}
      {showMap && (
        <div className="my-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.133607118547!2d-99.58834968509168!3d18.965334387151373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cd950b1a229a7b%3A0xdb86c1bb71d183!2sSal%C3%B3n%20de%20Usos%20M%C3%BAltiples%20SNTE!5e0!3m2!1sen!2smx!4v1620230055541!5m2!1sen!2smx"
            width="400"
            height="250"
            style={{border: 0}}
            allowFullScreen=""
            loading="lazy"
            title="Location Map"
          ></iframe>
        </div>
      )}
    </section>
  );
};

export default Testimonials;

