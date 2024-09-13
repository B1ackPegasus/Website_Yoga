import {BenefitType,  SessionType} from "@/shared/types.ts";
import {paw, emotionalIntel, yogaPose,snack} from "@/assets/images/benefits";
import  {puppy2, puppy3, puppy4, treePuppies,
    jogaWarsaw, bars} from "@/assets/images/classes";

export const links = [
    {page:"Home"},
    {page:"Sessions"},
    {page:"Benefits"}
]

export const benefits:Array<BenefitType> = [
    {
        image:yogaPose,
        title:"Joga training",
        description:"Take care of your body with an  coach." +
                     "More than 5 year of experience in conducting classes."
    },
    {
        image:paw,
        title:"Meet puppies",
        description:"Husky, Maltipoo, Pugs, Poodles and more." +
            " Choose with who you want to spend your yoga class. "
    },
    {
        image:emotionalIntel,
        title:"Clear your thoughts",
        description:"Hour of full relax for your mind."
    },

    {
        image:snack,
        title:"Healthy snacks",
        description:"Try healthy snacks for free. All plant-based"
    }

]

export const sessions:Array<SessionType> = [
    {
        image:treePuppies,
        title:"Micky,Ricky and Dixie \n 06.06.2024"
    },
    {
        image:jogaWarsaw,
        title:"Our Yoga room in Warsaw"
    },
    {
        image:bars,
        title:"Healthy snacks which you can try during session"
    },
    {
        image:puppy2,
        title:"Our session 09.06.20024"
    },
    {
        image:puppy3,
        title:"Mia during our session 12.06.20024"
    },
    {
        image:puppy4,
        title:"Roksy during our session 15.06.20024"
    }


]