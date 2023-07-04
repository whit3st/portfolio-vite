import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const { pathname } = useLocation();
    const [scrolled, setScrolled] = useState();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <img
        src="arrow-up.svg"
            onClick={() => window.scrollTo(0, 0)}
            style={{ display: scrolled > 800 ? "block" : "none" }}
            className="fixed bottom-5 right-5 z-50 cursor-pointer border border-[#1C2033] rounded-full w-8 p-[1px] transition-all"
        ></img>
    );
}
