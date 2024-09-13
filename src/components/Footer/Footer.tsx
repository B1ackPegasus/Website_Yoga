import logo from "@/assets/images/logo.png";
import { FaInstagram , FaPinterest, FaFacebook ,FaTiktok } from "react-icons/fa";

const Footer = () => {
    const aClasses=" font-montserrat font-bold pt-1 text-xl hover:text-dark-orange-brown "
    return (
        <footer
            className="bg-white w-full py-16">

            <div className="mx-auto w-5/6 md:flex font-montserrat flex-col">
                <div className="w-1/2 mt-16 md:mt-0 gap-3 flex flex-col ">
                <img src={logo} alt="logo" className="md:w-[100px] w-[150px]"/>
                <p className="font-medium font-montserrat">
                    Are you ready to unleash your inner peace and enjoy quality time with your
                    furry friend? PuppYoga invites you to an unforgettable experience where yoga
                    meets the joy of pet companionship!
                </p>

                    <div className="flex gap-3 pb-3">
                        <a href="#" className={aClasses}><FaInstagram/></a>
                        <a href="#" className={aClasses}><FaPinterest /></a>
                        <a href="#" className={aClasses}><FaFacebook/></a>
                        <a href="#" className={aClasses}><FaTiktok/></a>
                    </div>
                </div>
                <hr className="border-t border-main-color border-[0.5px]" />
                <p className="pt-3 mx-auto">© PuppYoga.All Rights Reserved.</p>
            </div>


        </footer>
    );
};

export default Footer;