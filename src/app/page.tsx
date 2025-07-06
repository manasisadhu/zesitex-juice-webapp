import Desktopnav from "@/components/Navbar/Desktopnav";
import Mobilenav from "@/components/Navbar/Mobilenav";
import Switchnav from "@/components/Navbar/Switchnav";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home || ZESITEX-JUICE-WEBAPP",
};
const page = () => {
  return (
    <>
     <Switchnav/> 
    </>
  );
}

export default page;