import { useState, useEffect } from "react";
export default function Cursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    useEffect(() => {
        const handleMouseMove = (event) => {
            setPosition({ x: event.clientX, y: event.clientY });
        };
        document.addEventListener("mousemove", handleMouseMove);

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);
    return (
        <div
        style={{ left: `${position.x}px`, top: `${position.y}px`, transform: 'translate(-50%, -50%)'}}
            className="w-4 h-4 rounded-full pointer-events-none mix-blend-difference bg-[#DCD6F7] fixed z-50"
        ></div>
    );
}
