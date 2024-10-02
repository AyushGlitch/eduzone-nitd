import { User } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

export default async function Navbar2() {
    return (
        <div className="absolute w-screen top-0 z-10 px-10">
            <div className="py-4 flex justify-between items-center">
                <Link href={"/"}>
                    <div className="flex gap-3 justify-center items-center">
                        <Image
                            src={"/logo.png"}
                            alt="Logo"
                            width={50}
                            height={50}
                        />
                        <p className="hidden xl:block text-white font-medium text-xl xl:font-semibold xl:text-3xl">
                            Eduzone
                        </p>
                    </div>
                </Link>

                <div className="block xl:hidden border-white border-opacity-30 border p-1 rounded-xl">
                    <Link href={"/about"}>
                        <User size={25} className="text-white" />
                    </Link>
                </div>

                <div className="hidden xl:block">
                    <Button
                        asChild
                        variant={"ghost"}
                        size={"default"}
                        className="border-white border-opacity-30 border"
                    >
                        <Link href={"/about"}>
                            <p className="text-lg font-semibold">About</p>
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
