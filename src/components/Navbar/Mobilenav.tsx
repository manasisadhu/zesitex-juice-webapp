import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ShoppingBag } from "lucide-react";
import Link from "next/link";
import Darkmode from "../ui/Darkmode";

const Mobilenav = () => {
    return (
        <>
         <section className="container mx-auto flex justify-between items-center py-4 px-8">
            {/* logo  */}
            <Link href={"/"} className="font-bold text-2xl">logo</Link>
            {/* logo  */}


          <div className="flex items-center gap-3">
         
            {/* cart  */}
            <ShoppingBag size={30}/>
            {/* cart  */}
            {/* btn  */}
            <Darkmode/>
            {/* btn  */}
               {/* sheet  */}
            <Sheet>
  <SheetTrigger><Menu size={40}/></SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>ZESITEX</SheetTitle>
    
    </SheetHeader>
    <div className="flex items-center gap  flex-col">
        <Link href={"/"}>Home</Link>
        <Link href={"/"}>Our Products</Link>
        <Link href={"/"}>About Us</Link>
        <Link href={"/"}>Contact</Link>
    </div>
  </SheetContent>
</Sheet>

            {/* sheet  */}
            </div>
            
            
            
            </section>   
        </>
    );
}

export default Mobilenav;