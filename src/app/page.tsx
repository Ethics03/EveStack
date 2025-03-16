'use client'

import ThemeSwitcher from "@/components/ui/themeswitch";
export default function Home() {
  return (
    <div className = "flex items-center justify-around p-3 ">
    <h1 className = 'font-bold text-xl'>EveStack</h1>
    <ThemeSwitcher/>
    </div>

    
  );
}
