import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

import logo from '../../images/logo.png'

const NavbarItem = ({tittle, classProps}) =>{
    return(
        <li className = {'mx-4 cursor-pointer ${classProps}'}>
            {tittle}

        </li>
    );
}
const Navbar = () => {
    return (
        <nav className = "w-full flex md:justify-center justify-between items-center p-4">
            <div className= "md:flex-[0.5] flex-initial justify-center items-center text-white">
                <img src={logo} alt="logo" className="w-32 cursor-pointer"/>
            <ul className = " md:flex hiddent list-none flex-row justify-between items-center flex-initial">
                <div className = "text-white	color: rgb(255 255 255);">
                {["market", "Exchange", "Wallet"].map((item, index)=>(
                <NavbarItem key={item + index} tittle = {item}/>
                 ))}
                </div>

            </ul>
            </div>
        </nav>
    );
}

export default Navbar;