import Desktopnavbar from "./Desktopnav";
import Mobilenavbar from "./Mobilenav";

const Switchnav = () => {
    return (
        <>
          <header className=" bg-white/5  shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[2.7px]   sticky top-0">
            <div className="lg:block hidden">
                <Desktopnavbar/>
            </div>
            <div className="block lg:hidden ">
                <Mobilenavbar/>
            </div>
            
            </header>  
        </>
    );
}

export default Switchnav;