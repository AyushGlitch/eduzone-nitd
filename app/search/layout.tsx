

export default async function Layout({children} : {children: React.ReactNode}) {
    return (
        <>
            {children}
            <div className="absolute bg-red-500 h-80 w-80 rounded-full left-1/3 top-1/3 mix-blend-exclusion -z-10 filter blur-xl opacity-70 animate-blob "></div>
            <div className="absolute bg-cyan-500 h-80 w-80 rounded-full right-1/3 top-1/3 mix-blend-exclusion -z-10 filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute bg-emerald-500 h-80 w-80 rounded-full left-[40%] top-1/2 mix-blend-exclusion -z-10 filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </>
    )
}