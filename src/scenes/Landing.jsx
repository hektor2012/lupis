import { useState, useEffect } from "react"
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";


const Landing = ({ setSelectedPage }) => {
  const [days, setDays] = useState(10)
  const [hours, setHours] = useState(10)
  const [minutes, setMinutes] = useState(10)
  const [seconds, setSeconds] = useState(10)
  const [isLoading, setIsLoading] = useState(true)

  const isAboveLarge = useMediaQuery("(min-width: 1060px)");

  useEffect(() => {
    const countdown = () => {
      const endDate = new Date("julio 15, 2023 13:00:00").getTime()
      const today = new Date().getTime()

      const timeDiff = endDate - today

      const seconds = 1000
      const minutes = seconds * 60
      const hours = minutes * 60
      const days = hours * 24

      let timeDays = Math.floor(timeDiff / days)
      let timeHours = Math.floor((timeDiff % days) / hours)
      let timeMinutes = Math.floor((timeDiff % hours) / minutes)
      let timeSeconds = Math.floor((timeDiff % minutes) / seconds)

      timeHours = timeHours < 10 ? "0" + timeHours : timeHours
      timeMinutes = timeMinutes < 10 ? "0" + timeMinutes : timeMinutes
      timeSeconds = timeSeconds < 10 ? "0" + timeSeconds : timeSeconds

      setDays(timeDays)
      setHours(timeHours)
      setMinutes(timeMinutes)
      setSeconds(timeSeconds)
      setIsLoading(false)
    }

    setInterval(countdown, 1000)
  }, [])

  return (
    <section
      id="mis xv"
      className="md:flex md:justify-between md:items-center gap-16 md:h-full py-10 "
    >
      {/* IMAGE SECTION */}
      <div className="basis-3/5 z-10 mt-16 md:mt-32 flex justify-center md:order-2">
        {isAboveLarge ? (
          <div
            className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 before:rounded-t-[400px]
            before:w-full before:max-w-[400px] md:before:max-w-[600px] before:h-full before:border-2 before:border-blue before:z-[-1]"
          >
            <img
              alt="profile"
              className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]"
              src="assets/profile-image.png"
            />
          </div>
        ) : (
          <img
            alt="profile"
            className="z-10 w-full max-w-[400px] md:max-w-[600px]"
            src="assets/profile-image.png"
          />
        )}
      </div>

      {/* MAIN TEXT */}
      <div className="z-10 basis-2/5 mt-10 md:mt-32">
        {/* HEADINGS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-6xl font-playfair z-8 text-center md:text-start">
            Mis {""}
            <span
              className="xs:relative xs:text-deep-blue xs:font-semibold z-10 xs:before:content-brush
              before:absolute before:-left-[25px] before:-top-[70px] before:z-[-1]"
            >
              XV años
            </span>
          </p>

          <p className="mt-10 mb-9 text-xl text-center md:text-start">
          Los momentos más esperados se sueñan, se imaginan, se construyen paso a 
          paso y lo más importante es compartirlo con aquellos que tanto queremos. Por eso los espero para compartir este momento tan especial
          </p>
        </motion.div>

        {/* CALL TO ACTIONS */}
        <motion.div
    className="flex mt-5 flex-col items-center md:justify-start"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.5 }}
    transition={{ delay: 0.2, duration: 0.5 }}
    variants={{
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0 },
    }}
  >
    <AnchorLink
      className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-10 font-semibold
        hover:bg-blue hover:text-white transition duration-500 mb-4 text-center w-full"
      onClick={() => setSelectedPage("contact")}
      
    >
     ¡ SOLO FALTAN !
    </AnchorLink>
    <AnchorLink
      className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5 w-full"
      onClick={() => setSelectedPage("contact")}
      href="#Felicitaciones                                                                                                                                                                                                                                                                                 "
    >
      <div className="bg-gradient-rainblue text-deep-blue rounded-sm  font-semibold
        hover:bg-blue hover:text-white transition duration-500 mb-4 text-center w-full">
        <motion.div
          className="flex md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          {isLoading ? (
            <div className="loading">
              
            </div>
          ) : (
            <div className="countdown  flex flex-row justify-between space-x-4 w-full mx-1">
  <div className="flex-1 min-w-0 text-center my-1 overflow-auto break-words">
  <p className="text-4xl">{days}</p>
  <h3 className="text-lg">Días</h3>
</div>

<div className="flex-1 min-w-0 text-center my-1 overflow-auto break-words">
    <p className="text-4xl">{hours}</p>
    <h3 className="text-md">Horas</h3>
  </div>
  <div className="flex-1 min-w-0 text-center my-1 overflow-auto break-words">
    <p className="text-4xl">{minutes}</p>
    <h3 className="text-md">Minutos</h3>
  </div>
  <div className="flex-1 min-w-0 text-center my-1 overflow-auto break-words">
    <p className="text-4xl">{seconds}</p>
    <h3 className="text-sm">Segundos</h3>
  </div>
</div>


          )}
        </motion.div>
      </div>
    </AnchorLink>
  </motion.div>

  
      </div>
    </section>
  );
};

export default Landing;
