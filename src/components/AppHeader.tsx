"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Logo from "./Logo";

const routes = [
    {
        label: "Home",
        path: "/"
    },
    {
        label: "Shop",
        path: "/collections/all"
    },
    {
        label: "Contact",
        path: "/contact"
    },
]


export default function AppHeader() {
    const activePathname = usePathname()

  return (
    <header className="flex justify-between items-center bg-zinc-900 p-5 px-14">
        <Logo />

        <nav>
            <ul className="flex gap-2">
                {
                    routes.map((route) => (
                        <li key={route.path}>   
                            <Link href={route.path} className={cn("text-white/60 rounded-sm px-2 py-1 font-extrabold text-xl hover:text-white focus:text-white transition", {
                                "bg-black/10 text-white": route.path === activePathname
                            })}>{route.label}</Link>
                        </li>
                    ))
                }
            </ul>
        </nav>
        <nav>
            <ul>
                <li>   
                    <Link href="/cart" className={cn("text-white/60 rounded-sm px-2 py-1 font-extrabold text-xl hover:text-white focus:text-white transition", {
                        "bg-black/10 text-white": "/cart" === activePathname
                    })}>Cart</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}