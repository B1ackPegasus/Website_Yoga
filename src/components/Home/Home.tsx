import {SelectedPage} from "@/shared/types.ts";
import DarkText from "@/assets/images/darkText1.png";
import SmallText from "@/assets/images/puppYoga-small.png";
import TextLight from "@/assets/images/lightText.png";
import Button from "@/shared/Button.tsx";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "@/hooks/useMediaQuery.ts";
import {motion} from "framer-motion";

type Props = {
    setSelectedPage: (page: SelectedPage) => void;
}

const Home = ({setSelectedPage} :Props) => {
const MediaQuery = useMediaQuery("(min-width: 1060px)");
    return (
        <section
            id="home"
            className="bg-orange-10 h-full ">

            <motion.div
                onViewportEnter={()=>setSelectedPage(SelectedPage.Home)} //when on screen , highlight
                className="flex  flex-col mx-auto md:w-5/6 justify-center items-center h-full">

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once:true,amount:1}}
                        transition={{duration:0.5}}
                        variants={{
                            hidden : {opacity:0,x:-30},
                            visible:{opacity:1,x:0}
                    }}
                        className="flex flex-col items-center justify-center md:w-3/6 w-5/6 md:pt-20">
                        <div className="relative z-0 w-full items-center flex flex-col ">
                            {MediaQuery &&
                                <div className="absolute z-[-1] top-[-10%] left-[50%]
                                 translate-y-[-50%] translate-x-[-50%] w-[800px] ">
                                    <img alt="big-text" src={TextLight}/>
                                </div>}
                                <img alt="home-text" src={DarkText} width={483} height={145}
                                     className="py-2 "/>
                                <img alt="home-text" src={SmallText} width={483} height={140}/>
                        </div>
                        <p className="py-5 text-center">
                            If you've always dreamt of having a dog or just love spending
                            time with good company, both furry and human, this is the place for you!
                            Join PuppYoga , where you can stretch, relax,
                            and find your inner peace while bonding, laughing, and creating joyful
                            memories with adorable pups
                        </p>
                    </motion.div>
                    {/*ACTIONS*/}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once:true,amount:1}}
                        transition={{duration:1}}
                        variants={{
                            hidden : {opacity:0,x:-30},
                            visible:{opacity:1,x:0}
                        }}
                        className="flex flex-row items-center">
                        <Button setSelectedPage={setSelectedPage}>Join Us</Button>
                        <AnchorLink className="text-sm font-bold underline
                         text-main-color hover:text-main-color-hover cursor-pointer "
                                    onClick={() => setSelectedPage(SelectedPage.ContactUS)}
                                    href={`#${SelectedPage.ContactUS}`}>
                            <p className="ml-5 cursor-pointer">Learn More</p>
                        </AnchorLink>
                    </motion.div>



                </motion.div>
        </section>
);
};

export default Home;