'use client'

import { useTheme } from "next-themes"
import {useEffect, useState } from "react";
import {Switch} from './switch'

export default function ThemeSwitcher(){
    const {theme,setTheme} = useTheme();

    const [mt,setMt] = useState(false);

    useEffect(()=> {
        setMt(true);
    },[])

    if(!mt){
        return null;
    }
    const handletheme = () => {
        if(theme === 'light'){
            setTheme("dark");
        }
        else{
            setTheme("light");
        }
    }
    return(
        <div className = 'p-2'>
            <Switch onClick={handletheme}/>
        </div>
    )
}