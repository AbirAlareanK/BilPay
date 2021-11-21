import { createContext, useContext , useState } from "react";
import InvoicesData from '../../Assets/invoices-data.json';
import { nanoid } from 'nanoid';


const InvoicesContext =  createContext();
export const UseInvoices = () => useContext(InvoicesContext) ;

const InvoicesProvider = (props) => {
    const [invoices , setInvoices ] = useState(InvoicesData);

    const filteredPaidInvo = invoices.filter(invoice =>  invoice.status === "paid");
    const filteredUnPaidInvo = invoices.filter(invoice => invoice.status === "unpaid");
    const filteredRows = invoices.map(invoice => (
        {
            id : invoice['invoice-number'],
            client : invoice['client'],
            date : invoice['invoice-date'],
            email: invoice['email'],
            amount : invoice['subtotal'],
            serviceType : invoice['service-details'],
            serviceStatus : invoice['status'],
            detailsPage : "..."
         } 
     ))
    const AddInvoice = (newInvoice) => {
        setInvoices([
            ...invoices,
            {
                id: nanoid(),
                ...newInvoice
            }
        ]);
    }

    const GetTableRows = () => {
        return filteredRows ;
    }

    const  GetPaidInvoices = () => {
        return {
            number : filteredPaidInvo.length,
            precentage : Math.round(100 * filteredPaidInvo.length / invoices.length)
        }
    }
    const GetUnPaidInvoices = () => {
        return {
            number : filteredUnPaidInvo.length,
            precentage : Math.round(100 * filteredUnPaidInvo.length / invoices.length)
        }
    }
    const GetTotalInvoices = () => {
        return {
            number : invoices.length,
            precentage : 100
        }
    }

    const GetInvoiceDetails = (id)=>{
       const invoiceDe =  invoices.filter(invoice => (invoice['invoice-number'] === id))[0];
    //    console.log(invoiceDe);
       return invoiceDe;
    }
    
    return(
        <InvoicesContext.Provider value = {{
                invoices,
                AddInvoice,
                GetPaidInvoices,
                GetUnPaidInvoices,
                GetTotalInvoices ,
                GetTableRows,
                GetInvoiceDetails
            }}>
           {props.children}
        </InvoicesContext.Provider>
    );
}

export default InvoicesProvider;
