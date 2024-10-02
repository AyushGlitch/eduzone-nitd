import Link from "next/link";

export default async function Footer() {
    return (
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center text-center px-4 md:px-6 border-t">
            <p className="text-xs text-gray-500 dark:text-gray-400">
                © 2024 Eduzone NIT-Delhi Paper Archive. All rights reserved.
            </p>
            <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                <Link
                    className="text-sm hover:underline underline-offset-4"
                    href="#"
                >
                    About
                </Link>

                <p className="text-sm group">
                    Icons by <Link href="https://icons8.com/illustrations" target="_blank" className="font-bold group-hover:underline">Ouch!</Link>
                </p>
            </nav>
        </footer>
    );
}
