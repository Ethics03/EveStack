'use client'

import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import ThemeSwitcher from "@/components/ui/themeswitch";
export default function Home() {
  return (
    <div className = "flex p-2 m-1 justify-between">
    <h1 className = 'font-bold text-xl'>EveStack</h1>
    
    <NavigationMenu>
    <ThemeSwitcher/>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Profile</NavigationMenuTrigger>
      <NavigationMenuContent>
        <NavigationMenuLink>View Profile</NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>
    </div>

    
  );
}
