import { Link } from "@remix-run/react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function TopNavigation() {
  return (
    <header className="border-b sticky top-0 bg-background/80 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <h1 className="text-xl font-serif">
            <Link to="/">
              TechBlog
            </Link>
          </h1>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/" className={cn(navigationMenuTriggerStyle(), "text-foreground")}>
                  For you
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center gap-4">
          <Button className="text-sm rounded-full">
            <Link to="https://github.com/chaudharykiran/devlog/blob/master/docs/WRITING.md" target="_blank" rel="noopener noreferrer">
              Write
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}