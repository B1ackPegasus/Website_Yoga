import {BenefitType, SelectedPage} from "@/shared/types.ts";
import {motion} from "framer-motion";
import HText from "@/shared/HText.tsx";
import {benefits} from "@/cons/cons.ts";
import BenefitCard from "@/shared/BenefitCard.tsx";

type Prop = {
    setSelectedPage: (value:SelectedPage) => void;
}
const container = {
    hidden:{},
    visible:{
        transition:{staggerChildren:0.5}
    }
}
const Benefits = ({setSelectedPage}:Prop) => {
    return (
        <section
        id="benefits"
        className=" py-16 bg-white">
        <motion.div
         className="w-5/6 mx-auto"
        onViewportEnter={()=>setSelectedPage(SelectedPage.Benefits)}>
        <div className=" flex flex-col items-center ">
            <p className="text-xl pb-2 ">PuppYoga. Yoga + more. </p>
            <HText >
                    Why
           <span className="text-[#5B0204]"> PuppYoga </span>
                is always a good idea
            </HText>
        </div>
         <motion.div
             initial="hidden"
             whileInView="visible"
             viewport={{once:true , amount:0.3}}
             variants={container}
             className="mt-5 md:grid md:grid-cols-4 gap-4 md:auto-rows-max ">
             {benefits.map((benefits:BenefitType)=>(
                 <BenefitCard
                              key = {benefits.title}
                              image = {benefits.image}
                              title = {benefits.title}
                              description = {benefits.description}
                              setSelectedPage = {setSelectedPage}  />
             ))}
         </motion.div>
        </motion.div>

        </section>
    );
};

export default Benefits;