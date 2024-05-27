import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { User } from "lucide-react";

export default async function Navbar() {
    return (
        <div className="w-screen h-30 flex items-center justify-between px-10 py-3">
            <Link href={"/"}>
                <div className="flex gap-3 justify-center items-center">
                    <img src="/logo.png" alt="Logo" width={100} height={100} />
                    <p className="hidden xl:block text-white font-medium text-xl xl:font-semibold xl:text-3xl">Eduzone NIT-Delhi</p>
                </div>
            </Link>


            <div className="block xl:hidden">
                <Link href={"/about"}>
                    <User size={30} className="text-white" />
                </Link>
            </div>

            <div className="hidden xl:block">
                <Button asChild variant={"ghost"} size={"lg"}>
                    <Link href={"/about"}>
                        <p className="text-xl">About</p>
                    </Link>
                </Button>
            </div>
        </div>
    )
}