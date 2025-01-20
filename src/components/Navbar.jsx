import { useState } from "react";
import { LINKS } from "../constants/index"
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
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

    const scrollToTop = (event) => {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    return(
        <>
        <nav className="fixed top-4 flex w-full flex-col items-center justify-center z-30">

                <div className=" flex w-full items-center justify-between overflow-y-hidden p-4 backdrop-blur-2xl lg:m-2 lg:w-[50rem] lg:rounded-full lg:shadow-lg">
                    <div 
                    onClick={scrollToTop}
                    className="font-samarkan text-xl cursor-pointer">Desi Grill</div>
                    <div className="hidden space-x-6 lg:flex">
                    {LINKS.map((link,index) => {
                        return (<a 
                        key={index} 
                        href={`#${link.targetId}`} 
                        className={`text-sm ${index !== 0 ? "border-l-2 border-neutral-300/20 pl-2" : ""} hover:opacity-50 `} 
                        onClick={(e) => handleScroll(e,link.targetId)}>
                            {link.text}
                        </a>);
                    })}
                    </div>
                    <div className="lg:hidden">
                    <button onClick={toggleMobileMenu}>
                        {isMobileMenuOpen ? <FaTimes/> : <FaBars/>}
                    </button>
                    </div>
                </div>

                {isMobileMenuOpen && (
                    <div className="w-full backdrop-blur-lg lg:hidden">
                        {
                            LINKS.map((links,index) => {
                                return (<a 
                                key={index} 
                                href={`#${links.targetId}`} 
                                className="block p-4 uppercase tracking-tighter"
                                onClick={(e) => {
                                    handleScroll(e,links.targetId)
                                }}>
                                    {links.text}
                                </a>);
                            })
                        }
                    </div>
                )}
        </nav>
        </>
    )
}

export default Navbar;