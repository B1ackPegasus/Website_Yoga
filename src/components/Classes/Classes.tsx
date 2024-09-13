import {SelectedPage} from "@/shared/types.ts";
import {sessions} from "@/cons/cons.ts";
import {SessionType} from "@/shared/types.ts";
import { motion } from "framer-motion";
import HText from "@/shared/HText.tsx";
import SessionCard from "@/shared/SessionCard.tsx";
type Props = {
    setSelectedPage: (page: SelectedPage) => void;
}
const Classes = ({setSelectedPage}:Props) => {
    return (
        <section
            id="sessions"
            className="w-full bg-orange-10 py-32">
           <motion.div
           onViewportEnter={()=>setSelectedPage(SelectedPage.Sessions)}>

            <motion.div
            className="w-5/6 mx-auto py"
            initial="hidden"
            whileInView="visible"
            viewport={{once:true,amount:1}}
            transition={{duration:0.5}}
            variants={{
                hidden : {opacity:0,x:-30},
                visible:{opacity:1,x:0}
            }}>
            <div className="md:w-4/5 mx-auto tracking-wide leading-7">
                <HText>Sessions</HText>
                <p className="py-5 text-center">
                    During the session, adorable puppies roam freely,
                    offering cuddles and spontaneous moments of joy as you
                    move through gentle yoga poses with an experienced instructor.
                    The relaxed and playful atmosphere is perfect for everyone,
                    no prior yoga experience needed. Afterward, enjoy complimentary raw bars
                    and freshly pressed juice to recharge.
                </p>
            </div>

            </motion.div>
            <div className="mt-10 h-[353px] w-full overflow-y-hidden overflow-x-auto">
                <ul className="w-[2800px] whitespace-nowrap">
                    {sessions.map((session:SessionType,index) => (
                        <SessionCard
                            key = {`${session.title}-${index}`}
                            title={session.title}
                            image={session.image}/>
                    ))}
                </ul>
            </div>
           </motion.div>

        </section>
    );
};

export default Classes;