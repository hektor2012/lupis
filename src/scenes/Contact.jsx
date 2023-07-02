import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

import { useState, useEffect } from "react";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Contact = () => {
  const initialCount = Number(localStorage.getItem("attendanceCount")) || 50;
  const [attendanceCount, setAttendanceCount] = useState(initialCount);
  const [message, setMessage] = useState("");
  const [showThankYouMessage, setShowThankYouMessage,] = useState(false);
  
  const [noAttendanceMsgVisible, setNoAttendanceMsgVisible] = useState(false);

  // Prohibited words
  const prohibitedWords = ["puto", "perra", "maldita", "puta", "chinga"]; // etc

  useEffect(() => {
    localStorage.setItem("attendanceCount", attendanceCount);
  }, [attendanceCount]);

  const handleAttendance = () => {
    setAttendanceCount(attendanceCount + 1);
  };
 
  const handleNoAttendance = () => {
    // Cambiar el valor de noAttendanceMsgVisible a true
    setNoAttendanceMsgVisible(true);
    setShowThankYouMessage(true);
  
    setTimeout(() => {
      setNoAttendanceMsgVisible(false);
      setShowThankYouMessage(false);
    }, 3000); // Ocultar el mensaje después de 3 segundos
  };
  
  const handleSendMessage = () => {
    // Check for prohibited words
    const containsProhibitedWords = prohibitedWords.some(word =>
      message.includes(word)
    );
  
    // Check for allowed characters (Spanish alphabet and natural numbers)
    const containsOnlyAllowedChars = /^[a-z0-9 áéíóúüñ]*$/i.test(message);
  
    if (containsProhibitedWords || !containsOnlyAllowedChars) {
      alert("Tu mensaje contiene caracteres inválidos o palabras prohibidas.");
    } else {
      // handle message send operation here
      setShowThankYouMessage(true);
      setNoAttendanceMsgVisible(false); // Asegurarse de que noAttendanceMsgVisible sea falso
      setTimeout(() => setShowThankYouMessage(false), 3000); // Ocultar el mensaje después de 3 segundos
      console.log(message);
    }
  };

  return (
    <section id="felicitaciones" className="felicitaciones py-48">
      {/* HEADINGS */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
        className="flex justify-center w-full"
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-yellow">Consideraciones </span> 
          </p>
          <div className="flex md:justify-center my-5">
            <LineGradient width="w-1/2" />
          </div>
        </div>
      </motion.div>
      <div className="flex justify-center">
        <motion.div
          className="flex"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div
            className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-10 font-semibold
            hover:bg-blue hover:text-white transition duration-500 mb-4 text-center w-full"
          >
           <p>Colores reservados:</p>
           " AZUL REY Y DORADO " están reservados para la quinceañera
          </div>
          
        </motion.div>
      </div>
      <div className="flex justify-center">
  <div className="shadow-md rounded p-5">
    <h2 className="text-2xl mb-4">¿Asistirás a mi fiesta?</h2>
    <div className="mb-4 flex justify-center">
      <button
        onClick={handleAttendance}
        style={{
          backgroundColor: "#f50057",
          color: "white",
          padding: "10px 20px",
          borderRadius: "5px",
          border: "none",
          cursor: "pointer",
          marginBottom: "10px",
          marginRight: "10px",
        }}
      >
        Asistiré
      </button>
      {!showThankYouMessage && noAttendanceMsgVisible && (
        <div className="banner">¡Lástima! ¡Te lo perderás!</div>
      )}
      <button
        onClick={handleNoAttendance}
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
        No Asistiré
      </button>
    </div>
    <p className="mb-4 flex justify-center">
      Asistentes confirmados: {attendanceCount}
    </p>

    <textarea
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      className="mb-4 w-full"
      placeholder="Escribe una felicitación..."
      style={{ color: "black" }}
    />

    <div className="text-center">
      <button
        onClick={handleSendMessage}
        style={{
          backgroundColor: "#f50057",
          color: "black",
          padding: "10px 20px",
          borderRadius: "5px",
          border: "none",
          cursor: "pointer",
          marginBottom: "10px",
        }}
      >
        Enviar
      </button>
    </div>

   

    {showThankYouMessage && !noAttendanceMsgVisible && (
      <div className="banner">
        ¡Gracias por tus buenos deseos! ¡Te espero, no faltes!
        <a href="#navbar">Volver al navbar</a>
      </div>
    )}
  </div>
</div>
      {/* ANNOUNCEMENT */}
      
    </section>
  );
};

export default Contact;
