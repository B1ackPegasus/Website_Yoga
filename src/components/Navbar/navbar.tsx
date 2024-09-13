import {HiBars3, HiXMark} from "react-icons/hi2";
import Link from "@/components/Navbar/link.tsx";
import {SelectedPage} from "@/shared/types.ts";
import useMediaQuery from "@/hooks/useMediaQuery.ts";
import {useState} from "react";
import Button from "@/shared/Button.tsx";
import logo from "@/assets/images/logo.png";
import {links} from "@/cons/cons.ts";


type Props = {
    selectedPage:SelectedPage;
    setSelectedPage:(value:SelectedPage) => void;
    isTopOfPage: boolean;
}

const Navbar = ({selectedPage,setSelectedPage,isTopOfPage}:Props) => {
    const flexBetween = "flex items-center justify-between";
    const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");
    const [IsMenuToggle,setIsMenuToggle] = useState(false);
    const ColoroFnav = isTopOfPage ? "bg-orange-10" : "bg-orange-10 drop-shadow ";
    return (
        <nav>
            <div className={`${flexBetween} z-30 fixed top-0  w-full py-5 ${ColoroFnav}   `}>
                <div className={`${flexBetween} mx-auto w-5/6 gap-16 `}>
                    {/* Left */}
                   <div className=" max-md:relative top-0 left-[50%] translate-x-[-50%]  ">
                       <img src = {logo} width={150} alt = "logo" className="md:w-[150px] w-[200px]"/>
                   </div>

                    {/* Right */}
                    {isAboveMediumScreen ? (
                        <div className={`${flexBetween} w-full`}>
                    <div className={`${flexBetween} gap-8 text-sm`}>
                        {links.map( (link:{page:string}) =>(
                        <Link page={link.page} key={link.page}
                         setSelectedPage={setSelectedPage}
                         selectedPage={selectedPage} />
                        ))}

                    </div>

                    <div className={`${flexBetween} gap-8 text-main-color hover:text-dark-orange-brown cursor-pointer`}>
                        <div>Sign In</div>
                        <Button>Become a member</Button>
                    </div>

                    </div>
                        ):
                    <button className="rounded-full  text-main-color justify-end "
                    onClick={()=>setIsMenuToggle(!IsMenuToggle)}>
                        <HiBars3 className="h-7 w-7"></HiBars3>
                    </button>
                    }
                </div>
            </div>
            {/*Mobile Menu Modal*/}
            {!isAboveMediumScreen  && (
                <div className={`fixed right-0 bottom-0 z-30 h-full
                  w-[300px] bg-orange-20 drop-shadow-xl rounded-l-2xl 
                  div-for-trans ${IsMenuToggle?"menuStart":""}`}>
                    <div className="flex justify-end p-12">
                    <button onClick = {()=> setIsMenuToggle(!IsMenuToggle)}>
                      <HiXMark className="h-5 w-5 text-main-color"/>
                    </button>
                    </div>
                    <div className="flex justify-evenly flex-col gap-10 text-2xl px-10 ">
                    {links.map( (link:{page:string}) =>(
                        <Link  page={link.page} key={link.page}
                              setSelectedPage={setSelectedPage}
                              selectedPage={selectedPage}
                        />
                    ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;