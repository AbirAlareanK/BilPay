import { useContext , createContext } from "react";

const InvoicesContext = createContext();

const UseInvoices = () => {
    useContext(InvoicesContext)
}

export default UseInvoices;