import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="h-30 bg-red pt-2">
      <div className="w-10/12 mx-auto">
        <SocialMediaIcons />
        <div className="md:flex justify-center md:justify-between text-center ">
          <p className="font-playfair font-semibold text-1xl text-yellow">
            Developers Martinez Team
          </p>
          <p className="font-playfair text-md text-yellow">
            ©2023  All Rights Reserved HBH.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
