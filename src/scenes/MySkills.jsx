import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const Testimonials = () => {
  return (
    <section id="mis padrinos" className="pt-3 pb-1">
      {/* HEADING */}
      <motion.div
        className="md:w-2/3 text-center md:text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -30 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className="font-playfair font-semibold text-2xl mb-4 text-red">
         Hace 15 años me regalaron la vida y a una gran familia, acompañanos a festejar mi cumpleaños # XV
        </p>
        <LineGradient width="mx-auto" />
        
      </motion.div>

      
<div className="md:flex md:gap-1 justify-around items-start">
    
    {/* Este es el primer bloque de movimiento, tiene un color de fondo azul (bg-blue) y muestra información sobre el padre. */}
    <motion.div
        className="mx-auto relative bg-blue flex flex-col justify-between p-16 mt-48 rounded-lg border border-gray-500
            before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
        }}
    >
        <h1 className="font-playfair text-5xl text-center ">Mis Papas</h1>
        <p className="text-center text-xl mt-4">
            Francisco Javier Martínez Chavero
        </p>
        <p className="text-center text-xl mt-4">
            Maricarmen Mejia Herrera 
        </p>
    </motion.div>

  

    {/* Este es el cuarto bloque de movimiento, tiene un color de fondo rojo (bg-red) y muestra información sobre la madrina. */}
    <motion.div
        className="mx-auto relative bg-red flex flex-col justify-between p-16 mt-48 rounded-lg border border-gray-500
            before:absolute before:top-[-110px] before:-ml-[110px] before:left-1/2 before:"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
        }}
    >
        <h1 className="font-playfair text-5xl text-center">Mis Padrinos</h1>
       <p className="text-center text-xl mt-4">
            Alfredo Herrera Jardón
        </p> 
        <p className="text-center text-xl mt-4">
            Sandra Bobadilla Guadarrama
        </p>
        
    </motion.div>

</div>

    </section>
  );
};

export default Testimonials;
