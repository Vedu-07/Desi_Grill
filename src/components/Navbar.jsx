import { useState } from "react";

const Navbar = () => {

    const [isMobileMenuOpen, setisMobileMenuOpen] = useState(false);
    const toggleMobileMenu = () => {
        setisMobileMenuOpen(!isMobileMenuOpen);
    }

    const handleScroll =  (event,targetId) => {
        event.preventDefault();
        const targetElement = document.getElementById(targetId);
        if(targetElement) {
            const offsetTop = targetElement.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: "smooth"
            })
        }
        setisMobileMenuOpen(false);
    }

    return(
        <>
        <nav className="fixed top-4"></nav>
        </>
    )
}

export default Navbar;