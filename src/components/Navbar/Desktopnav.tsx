import Link from "next/link";
import Darkmode from "../ui/Darkmode";
import { ShoppingBag } from "lucide-react";

const Desktopnav = () => {
    return (
        <>
         <section className="container mx-auto flex justify-between items-center py-4 px-8">
            {/* logo  */}
             <Link href={"/"} className="font-bold text-2xl  ">logo</Link>
            {/* logo  */}
            {/* pages  */}
            <div className="md:flex items-center gap-10 hidden ">
                <Link href={"/"} className="hover:text-purple-600">home</Link>
                <Link href={"/"} className="hover:text-purple-600">Our Products</Link>
                <Link href={"/"} className="hover:text-purple-600">About Us</Link>
                <Link href={"/"} className="hover:text-purple-600">Contact</Link>
            </div>
            {/* pages  */}
            <div className="flex items-center gap-3">
            {/* cart  */}
            <ShoppingBag size={30}/>
            {/* cart  */}
            {/* btn  */}
            <Darkmode/>
            {/* btn  */}
            </div>
            
            </section>   
        </>
    );
}

export default Desktopnav;