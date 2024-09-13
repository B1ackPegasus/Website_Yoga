
type Props = {
    children: React.ReactNode;
}

const HText = ({children}:Props) => {
    return (
     <h1 className="basis-3/5  text-3xl md:text-[35px] text-center">
         {children}
     </h1>
    );
};

export default HText;