// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
// } from "@/components/ui/navigation-menu";
// const CollapsibleMenu = () => {
//   return (
//     <div className="flex items-center justify-center z-[10]">
//       <NavigationMenu>
//         <NavigationMenuList>
//           <NavigationMenuItem>
//             <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
//             <NavigationMenuContent></NavigationMenuContent>
//           </NavigationMenuItem>
//         </NavigationMenuList>
//       </NavigationMenu>
//     </div>
//   );
// };
// export default CollapsibleMenu;

import * as React from "react";

import { cn } from "@/lib/utils";
import { IoRocketSharp } from "react-icons/io5";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "بادگیر",
    href: "/products/jacket",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "تیشرت",
    href: "/products/t-shirt",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "وینداستاپر",
    href: "/products/windstopper",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "شلوار",
    href: "/products/pants",
    description: "Visually or semantically separates content.",
  },
  {
    title: "ورزشی",
    href: "/products/sport",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "غیر ورزشی",
    href: "/products/non-sport",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

const CollapsibleMenu = () => {
  return (
    <div className="z-[2]">
      {" "}
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-base-100">
              تیم آپولو
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] text-right">
                <li className="row-span-3 ">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="/aboutUs"
                    >
                      {" "}
                      <div className="text-4xl">
                        {" "}
                        <IoRocketSharp />
                      </div>
                      <div className="mb-2 mt-4 text-lg font-medium">
                        درباره آپولو
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Beautifully designed components built with Radix UI and
                        Tailwind CSS.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <ListItem href="/contactUs" title="تماس با ما">
                  Re-usable components built using Radix UI and Tailwind CSS.
                </ListItem>
                <ListItem href="/faq" title="پرسش های متداول">
                  How to install dependencies and structure your app.
                </ListItem>
                <ListItem href="/websiteRules" title="قوانین عمومی">
                  Styles for headings, paragraphs, lists...etc
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-base-100">
              دسته بندی
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] text-right">
                {components.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem className="w-32 text-sm">
            <div>
              <NavigationMenuLink className="px-2 py-1 border rounded-xl border-primary cursor-pointer hover:bg-primary hover:text-base-100 transition-all ">
                فروش ویژه
              </NavigationMenuLink>
            </div>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
export default CollapsibleMenu;
