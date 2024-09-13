

type Props = {
    title: string;
    image: string;
}
const divStyles="p-5 absolute top-0 left-0 z-30 flex h-[300px] " +
    "w-[450px] flex-col items-center justify-center " +
    "whitespace-normal  bg-orange-10 text-center text-main-color opacity-0 " +
    "transition duration-500 hover:opacity-90";

const SessionCard = ({title, image}:Props) => {
    return (
        <li className="relative mx-5 inline-block h-[300px] w-[450px]">
            <div className={divStyles}>
                <p className="w-3/6">{title}</p>
            </div>
            <div style={{backgroundImage: `url(${image})`}}
                 className="h-full w-full bg-cover bg-no-repeat bg-bottom"/>


        </li>
    );
};

export default SessionCard;