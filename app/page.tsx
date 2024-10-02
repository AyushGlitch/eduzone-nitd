import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Papers from "@/components/Papers";
import Ticker from "@/components/Ticker";

export default async function LandingPage() {
    return (
        <div className="relative overflow-x-hidden">
            {/* <Navbar2 /> */}
            <Hero />
            <Ticker />
            <Papers />
            <Footer />
        </div>
    );
}
