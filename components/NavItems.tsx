"use client";
import { cn } from "@/lib/utils";
import { usePathname } from "next/dist/client/components/navigation";
import Link from "next/link";
import React from "react";

const navItems = [
  { name: "Dashboard", href: "/" },
  { name: "My Projects", href: "/projects" },
  { name: "Sales", href: "/sales" },
];

const NavItems = () => {
  const pathName = usePathname();
  return (
    <nav className="flex items-center gap-4">
      {navItems.map(({ name, href }) => (
        <Link
          key={name}
          href={href}
          className={cn(pathName === href && "text-primary font-semibold")}
        >
          {name}
        </Link>
      ))}
    </nav>
  );
};

export default NavItems;
