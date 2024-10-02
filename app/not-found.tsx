import Link from "next/link";

export default function NotFound() {
    return (
        <div className="mt-20 w-full flex flex-col overflow-hidden">
            <div className="w-2/3 mx-auto flex flex-col gap-5 items-center">
                <h2 className="text-9xl font-bold">404</h2>
                <p className="text-5xl">Page Not Found</p>
            </div>

            <div className="mx-auto mt-24">
                <Link href="/">
                    <p className="px-4 py-2 bg-blue-600 text-white text-lg font-semibold rounded hover:bg-blue-700 transition-colors">
                        Go back to Home
                    </p>
                </Link>
            </div>
        </div>
    );
}
