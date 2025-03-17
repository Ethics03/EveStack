'use client'

import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import ThemeSwitcher from "@/components/ui/themeswitch";
export default function Home() {
  return (
    <div className = "flex items-center justify-around p-3 ">
    <h1 className = 'font-bold text-xl'>EveStack</h1>
    <ThemeSwitcher/>
    <NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Profile</NavigationMenuTrigger>
      <NavigationMenuContent>
        <NavigationMenuLink>Link</NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>
    </div>

    
  );
}
