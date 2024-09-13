import { motion } from "framer-motion";
import {useForm} from "react-hook-form";
import {SelectedPage} from "@/shared/types";
import HText from "@/shared/HText.tsx";
import bgVideo from "@/assets/video/bgvideo.mp4";

type Props = {
    setSelectedPage: (page: SelectedPage) => void;
}

const ContactUs = ({setSelectedPage}:Props) => {
    const {
        register,
        trigger,
        formState : {errors}
    } = useForm();

    const onSubmit = async (e:any)=>{
        const isValid = await trigger();

        if(!isValid){
            e.preventDefault();
        }
    }

    const inputStyles = "w-full rounded-lg bg-orange-10" +
                                " px-5 py-3 placeholder-main-color mt-5 text-montserrat"

    return (
        <section
            id="contactus"
            className="w-full pt-28 pb-32 relative z-0 h-[650px]
             overflow-y-hidden flex flex-col items-center justify-center">
            <video autoPlay={true}
                   muted={true}
                   loop={true}
                   className="absolute top-0 left-0  h-full w-full z-[-1] object-cover">
                <source src={bgVideo} type="video/mp4"/>
            </video>
            <motion.div
                className="md:w-3/6 sm:5/6 mx-auto bg-beige-50 p-6 rounded-lg"
                onViewportEnter={() => setSelectedPage(SelectedPage.ContactUS)}>
                <motion.div
                    className=""
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 1}}
                    transition={{duration: 0.5}}
                    variants={{
                        hidden: {opacity: 0, x: -30},
                        visible: {opacity: 1, x: 0}
                    }}>

                    <HText>ASK
                        <span className="text-dark-orange-brown"> US </span>
                    </HText>
                </motion.div>

                {/*FORM  */}
                <div className="justify-between gap-8 md:flex">
                    <motion.div
                        className="mt-10 mx-auto basis-3/5 md:mt-0 text-center "
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true, amount: 1}}
                        transition={{duration: 0.5}}
                        variants={{
                            hidden: {opacity: 0, y: 50},
                            visible: {opacity: 1, y: 0}
                        }}>
                        <form
                            target="_blank"
                            onSubmit={onSubmit}
                            action="https://formsubmit.co/ce023d054699313d009fb10abdf0051f"
                            method="POST">
                            <input className={inputStyles}
                                   type="text"
                                   placeholder="NAME"
                                   {...register("name", {required: true, maxLength: 60})} //save into name property
                            />
                            {errors.name && (
                                <p className="mt-2 text-dark-orange-brown">
                                    {errors.name.type === "required" && "This field is required"}
                                    {errors.name.type === "maxLength" && "Maximum length is 60"}
                                </p>
                            )}
                            <input className={inputStyles}
                                   type="email"
                                   placeholder="EMAIL"
                                   {...register("email",
                                       {
                                           required: true,
                                           pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                       })}
                            />
                            {errors.email && (
                                <p className="mt-2 text-dark-orange-brown ">
                                    {errors.email.type === "required" && "This field is required"}
                                    {errors.email.type === "pattern" && "Invalid email address"}
                                </p>
                            )}

                            <textarea className={inputStyles}
                                      rows={4}
                                      cols={50}
                                      placeholder="MESSAGE"
                                      {...register("message", {required: true, maxLength: 2000})}
                            />
                            {errors.message && (
                                <p className="mt-2 text-dark-orange-brown">
                                    {errors.message.type === "required" && "This field is required"}
                                    {errors.message.type === "maxLength" && "Maximum length is 2000 characters"}
                                </p>
                            )}

                            <button type="submit"
                                    className="mt-5 rounded-lg bg-orange-20 py-3
                                px-20 transition duration-500 hover:text-dark-orange-brown"
                            >ASK
                            </button>

                        </form>
                    </motion.div>
                </div>
            </motion.div>

        </section>
    );
};

export default ContactUs;