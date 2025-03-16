'use client'
import { Switch } from "@/components/ui/switch"
import ThemeSwitcher from "@/components/ui/themeswitch";
export default function Home() {
  return (
    <div className = "flex justify-around p-3">
    <h1 className = 'font-bold text-xl'>EvePro</h1>
    <ThemeSwitcher/>
    </div>

    
  );
}
