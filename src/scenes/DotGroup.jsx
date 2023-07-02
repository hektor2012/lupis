import AnchorLink from "react-anchor-link-smooth-scroll";



const DotGroup = ({ selectedPage, setSelectedPage }) => {
  const selectedStyles = `relative bg-yellow before:absolute before:w-6 before:h-6 before:rounded-full
    before:border-2 before:border-yellow before:left-[-50%] before:top-[-50%]`;


  return (
    <div className="flex flex-col gap-6 fixed top-[60%] right-7">
      <button >
       
      </button>

      <AnchorLink
        href="#mis xv"
        className={`${
          selectedPage === "mis xv" ? selectedStyles : "bg-dark-grey"
        } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage("mis xv")}
      />

      <AnchorLink
        href="#mis padrinos"
        className={`${
          selectedPage === "mis padrinos" ? selectedStyles : "bg-dark-grey"
        } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage("mis padrinos")}
      />

      <AnchorLink
        href="#misa"
        className={`${
          selectedPage === "misa" ? selectedStyles : "bg-dark-grey"
        } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage("misa")}
      />

      <AnchorLink
        href="#recepción"
        className={`${
          selectedPage === "recepción" ? selectedStyles : "bg-dark-grey"
        } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage("recepción")}
      />

      <AnchorLink
        href="#felicitaciones"
        className={`${
          selectedPage === "felicitaciones" ? selectedStyles : "bg-dark-grey"
        } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage("felicitaciones")}
      />
    </div>
  );
};

export default DotGroup;
