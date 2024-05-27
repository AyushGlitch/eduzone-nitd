import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

export default async function Navbar() {
    return (
        <div className="w-screen h-30 flex items-center justify-between px-10 py-3">
            <Link href={"/"}>
                <div className="flex gap-3 justify-center items-center">
                    <Image alt="Logo" src={"/logo.png"} width={100} height={100} />
                    <p className="text-white font-semibold text-3xl">Eduzone NIT-Delhi</p>
                </div>
            </Link>

            <div>
                <Button asChild variant={"ghost"} size={"lg"}>
                    <Link href={"/about"}>
                        <p className="text-xl">About</p>
                    </Link>
                </Button>
            </div>
        </div>
    )
}