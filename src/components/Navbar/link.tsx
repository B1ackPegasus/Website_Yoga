import AnchorLink from "react-anchor-link-smooth-scroll";
import {SelectedPage} from "@/shared/types.ts";

type Prop = {
    page:string;
    selectedPage:SelectedPage;
    setSelectedPage:(value:SelectedPage) => void;
}

const Link = ({page,selectedPage,setSelectedPage}:Prop) => {
    const lowerCase = page.toLowerCase().
    replace(/ /g,"") as SelectedPage;
    return (
        <div>
            <AnchorLink
                        className={`${selectedPage === lowerCase ? "text-dark-orange-brown" : ""}
                         transition  duration-500 hover:text-dark-orange-brown
                        `}
                        href={`#${lowerCase}`}
                        onClick={()=>setSelectedPage(lowerCase)}
            >

                {page}
            </AnchorLink>
        </div>
    );
};

export default Link;