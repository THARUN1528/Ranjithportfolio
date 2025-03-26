import { CiGlobe } from "react-icons/ci";
import { IoIosContact } from "react-icons/io";
import { FaCode } from "react-icons/fa6";
import { LiaTelegram } from "react-icons/lia";


const Navbar = () => {
    return (
        <nav className="flex flex-wrap justify-between bg-black py-2 px-3">
            <div className="bg-gradient-to-r from-green-500 to-blue-400 bg-clip-text text-transparent tracking-tight text-2xl font-semibold ">Portfolio</div>
            <div className="hidden md:block">
            <div className="flex gap-4 font-light text-white">
                <a className="flex items-center gap-1" href="/hero"><CiGlobe /> Home</a>
                <a className="flex items-center gap-1" href="About.jsx"><IoIosContact />About</a>
                <a className="flex items-center gap-1" href=""><FaCode />Project</a>
                <a className="flex items-center gap-1" href=""><LiaTelegram />Contact</a>
                </div>
                </div>
        </nav>
    )
}

export default Navbar;
