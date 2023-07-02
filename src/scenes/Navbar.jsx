import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";


const Link = ({ page, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.toLowerCase();
  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage ? "text-yellow" : ""
      } hover:text-yellow transition duration-500`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const navbarBackground = isTopOfPage ? "" : "bg-red";

  return (
    <nav className={`${navbarBackground} z-40 w-full fixed top-0 py-6`}>
      <div className="flex items-center justify-between mx-auto w-5/6">
        <h4 className="font-playfair text-4xl font-bold">Elizabeth Guadalupe</h4>
        
        {/* DESKTOP NAV */}
        {isDesktop ? (
          <div className="flex justify-between gap-16 font-opensans text-sm font-semibold">
            <Link
              page="Mis XV"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Mis Padrinos"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Misa"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Recepción"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Felicitaciones"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        ) : (
          <button
            className="rounded-full bg-red p-2"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <img alt="menu-icon" src="../assets/menu-icon.svg" />
          </button>
        )}

        {/* MOBILE MENU POPUP */}
        {!isDesktop && isMenuToggled && (
  <div className="fixed right-0 bottom-0 h-full bg-[rgba(0,0,255,0.7)] w-[300px]">
    {/* CLOSE ICON */}
    <div className="flex justify-end p-12">
      <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
        <img alt="close-icon" src="../assets/close-icon.svg" />
      </button>
    </div>

    {/* MENU ITEMS */}
    <div className="flex flex-col gap-6 ml-[33%] font-playfair text-2xl font-bold">
      <Link
        page="Mis XV"
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Link
        page="Mis Padrinos"
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Link
        page="Misa"
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Link
        page="Recepcion"
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Link
        page="Felicitaciones"
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
    </div>
  </div>
)}


        
      </div>
    </nav>
  );
};

export default Navbar;
