import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default async function Home() {
    return (
        <>
            <div className="h-screen w-full flex flex-col justify-evenly">
                <div className="w-2/3 mx-auto flex flex-col gap-5">
                    <h2 className="text-5xl">
                        Welcome to <span className="font-bold">Eduzone</span>{" "}
                        NIT-Delhi
                    </h2>
                    <p className="text-xl">
                        Explore our archive of books, past year papers and more,
                        maintained by NIT-Delhi community.
                    </p>
                </div>

                <div className="w-2/3 mx-auto">
                    <div className="flex gap-5 justify-evenly">
                        <Card>
                            <CardHeader>
                                <CardTitle>B.Tech</CardTitle>
                            </CardHeader>
                            <CardContent className="text-lg">
                                Bachelors of Technology
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>M.Tech</CardTitle>
                            </CardHeader>
                            <CardContent className="text-lg">
                                Masters of Technology
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    );
}
