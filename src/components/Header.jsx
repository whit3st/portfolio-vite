import { useEffect, useState } from "react"; 
import HeaderContainer from "./HeaderContainer";
import Navigation from "./Navigation";
import NavLink from "./NavLink";
import Logo from "./Logo";
export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const scrolled = window.scrollY;
  
        if (scrolled > 0) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    return (
        <HeaderContainer isScrolled={isScrolled}>
            <NavLink to="/">
                <Logo />
            </NavLink>
            <Navigation>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/blog">Blog</NavLink>
            </Navigation>
        </HeaderContainer>
    );
}
