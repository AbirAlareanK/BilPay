import { Link } from "react-router-dom";
import Classes from './Navbar.module.scss';
import { IoReceiptOutline , IoPeopleOutline} from 'react-icons/io5'
import { MdOutlineAccountBalanceWallet , MdOutlineDashboard } from 'react-icons/md'
import { GoDiffAdded } from 'react-icons/go';
import { BsCardText } from 'react-icons/bs'  ;
import { AiOutlineTransaction } from 'react-icons/ai';

const Navbar = () => {
    
    return(
        <div>
            <ul className={Classes.navbarList}>
                <li>
                    <Link to="/"><MdOutlineDashboard /> Dashboard</Link>
                </li>
                <li>
                    <Link to="/"><MdOutlineAccountBalanceWallet /> Wallet</Link>
                </li>
                <li>
                    <Link to="/invoices"><IoReceiptOutline />Invoices</Link>
                </li>
                <li>
                    <Link to="/invoice-form"><GoDiffAdded /> Create Invoice</Link>
                </li>
                <li>
                    <Link to="/card-center"><BsCardText /> Cards</Link>
                </li>
                <li>
                    <Link to="/transaction"><AiOutlineTransaction /> Transaction</Link>
                </li>
                <li>
                    <Link to="/clients"><IoPeopleOutline /> Clients</Link>
                </li>
                {/* <Link to="/invoice-details">Invoices Details</Link> */}
            </ul>
        </div>
    )
}


export default Navbar;