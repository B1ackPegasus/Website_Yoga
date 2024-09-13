import AnchorLink from "react-anchor-link-smooth-scroll";
import {SelectedPage} from "@/shared/types.ts";
import { motion } from "framer-motion";

type Props = {
    image: string;
    title: string;
    description: string;
    setSelectedPage: (page: SelectedPage) => void;
}
const childVariant={
    hidden:{opacity:0, scale:0.8},
    visible:{opacity:1, scale:1},
}
const BenefitCard = ({image,title,description,setSelectedPage}:Props) => {
    return (
        <motion.div
            variants = {childVariant}
            className="mt-5 px-5 py-16 text-center border-2 border-beige rounded-lg bg-beige-50">
            <div className="mb-4 flex justify-center">
                <img src = {image}  alt="benefits image" className="h-12"></img>
            </div>
            <h4 className = "font-bold text-center">{title}</h4>
            <p className = "text-[15px] font-montserrat font-bold">{description}</p>
            <AnchorLink
                className="text-sm font-bold text-main-color hover:text-dark-orange-brown"
                onClick={()=>setSelectedPage(SelectedPage.ContactUS)}
                href = {`#${SelectedPage.ContactUS}`} />

        </motion.div>
    );
};

export default BenefitCard;