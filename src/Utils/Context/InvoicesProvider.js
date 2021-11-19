import { createContext, useContext , useState } from "react";
import InvoicesData from '../../Assets/invoices-data.json';
import { nanoid } from 'nanoid';

const InvoicesContext =  createContext();
export const UseInvoices = () => useContext(InvoicesContext) ;

const InvoicesProvider = (props) => {
    const [invoices , setInvoices ] = useState(InvoicesData);

    const filteredPaidInvo = invoices.filter(invoice =>  invoice.status === "paid");
    const filteredUnPaidInvo = invoices.filter(invoice => invoice.status === "unpaid");

    const AddInvoice = (newInvoice) => {
        setInvoices([
            ...invoices,
            {
                id: nanoid(),
                ...newInvoice
            }
        ]);
    }

    
    const  GetPaidInvoices = () => {
        return {
            number : filteredPaidInvo.length,
            precentage : (100 * filteredPaidInvo.length / invoices.length)
        }
    }
    const GetUnPaidInvoices = () => {
        return {
            number : filteredUnPaidInvo.length,
            precentage : (100 * filteredUnPaidInvo.length / invoices.length)
        }
    }
    const GetTotalInvoices = () => {
        return {
            number : invoices.length,
            precentage : 100
        }
    }
    
    return(
        <InvoicesContext.Provider value = {{
                invoices,
                AddInvoice,
                GetPaidInvoices,
                GetUnPaidInvoices,
                GetTotalInvoices 
            }}>
           {props.children}
        </InvoicesContext.Provider>
    );
}

export default InvoicesProvider;
