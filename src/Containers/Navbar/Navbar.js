import {  NavLink } from "react-router-dom";
import Classes from './Navbar.module.scss';
import { IoReceiptOutline , IoPeopleOutline} from 'react-icons/io5'
import { MdOutlineAccountBalanceWallet , MdOutlineDashboard } from 'react-icons/md'
import { GoDiffAdded } from 'react-icons/go';
import { BsCardText } from 'react-icons/bs'  ;
import { AiOutlineTransaction } from 'react-icons/ai';
import { useState } from "react";
import Burger from "../../Components/UIs/Burger";

const Navbar = () => {
    const [showNavbar , setShowNavbar ] = useState(false);

    return(
        <div className={Classes.navbar}>
            <div className={Classes.headingSmall}>
                <div onClick={()=> setShowNavbar(!showNavbar)} className={Classes.menuButton}>
                    <Burger open={showNavbar} />
                </div>
                <div className={Classes.logo}>
                    <p>BilPay</p>
                </div>
            </div>
            <ul className={ showNavbar ? `${Classes.navbarList} ${Classes.hidden}` : `${Classes.navbarList}`}>
                <li>
                    <NavLink className={(navData) => navData.isActive ? Classes.navItemisActive : ''} to="/dashboard">
                            <MdOutlineDashboard size={28} />
                            <span> Dashboard</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink className={(navData) => navData.isActive ? Classes.navItemisActive : ''} to="/wallet">
                        <MdOutlineAccountBalanceWallet size={28} />
                        <span>Wallet</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink className={(navData) => navData.isActive ? Classes.navItemisActive : ''} to="/invoices">
                        <IoReceiptOutline size={28} />
                        <span>Invoices</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink className={(navData) => navData.isActive ? Classes.navItemisActive : ''} to="/invoice-form">
                        <GoDiffAdded size={28} />
                        <span> Create Invoice</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink className={(navData) => navData.isActive ? Classes.navItemisActive : ''} to="/card-center">
                        <BsCardText size={28} />
                        <span>Cards</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink className={(navData) => navData.isActive ? Classes.navItemisActive : ''} to="/transaction">
                        <AiOutlineTransaction size={28}/>
                        <span>Transaction</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink className={(navData) => navData.isActive ? Classes.navItemisActive : ''} to="/clients">
                        <IoPeopleOutline size={28} />
                        <span>Clients</span>
                    </NavLink>
                </li>
                {/* <Link to="/invoice-details">Invoices Details</Link> */}
            </ul>
        </div>
    )
}


export default Navbar;