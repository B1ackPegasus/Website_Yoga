import AnchorLink from "react-anchor-link-smooth-scroll";
import React from "react";
import {SelectedPage} from "@/shared/types.ts";

type Props = {
    children: React.ReactNode;
    setSelectedPage?: (page:SelectedPage) => void;
}

const Button = ({children}:Props) => {
    return (
        <AnchorLink
        className="rounded-md bg-orange-20 px-10 py-2
          hover:bg-orange-25">
            {children}
        </AnchorLink>

    );
};

export default Button;