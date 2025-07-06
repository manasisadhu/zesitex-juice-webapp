"use client"
import { useTheme } from "next-themes";
import {Button} from "@/components/ui/button";
import { Moon, Sun } from "lucide-react"

const Darkmode = () => {

    
    const {theme,setTheme}= useTheme()



    const handletheme=()=>{
        if (theme==="dark") {
            setTheme("light")
            
        } else {
            setTheme("dark")
            
        }

    }



    return (
        <>
          <Button onClick={handletheme}>
             <Sun className="h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 " />
          <Moon className="absolute h-[1.2rem] w-[1.2rem]  rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            
            </Button>  
        </>
    );
}

export default Darkmode;