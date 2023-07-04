import PropTypes from "prop-types";
import { useRef } from "react";
import { useInView } from "framer-motion";

export default function ProjectContainer({ children }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    return (
        <section
            ref={ref}
        >
            <span
                className="flex py-20 flex-col sm:flex-row justify-between gap-14 sm:gap-5"
                style={{
                    transform: isInView ? "none" : "translateX(-50px)",
                    opacity: isInView ? 1 : 0,
                    transition:
                        "all 1s cubic-bezier(0.17, 0.55, 0.55, 1)",
                }}
            >
                {children}
            </span>
        </section>
    );
}
ProjectContainer.propTypes = {
    children: PropTypes.array.isRequired,
};
