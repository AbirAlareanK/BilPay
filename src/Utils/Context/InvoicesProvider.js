import { useContext , useState} from "react";
import Invoices from '../../Assets/invoices-data.json';
import { nanoid } from 'nanoid'

const InvoicesContext =  useContext();

const InvoicesProvider = ({children}) => {
    const [invoices , setInvoices ] = useState(Invoices);

    const AddInvoice = (newInvoice) => {
        setInvoices([
            ...invoices,
            {
                id: nanoid(),
                ...newInvoice
            }
        ]);
    }
    const CalculatePaidInvoices = () => {

    }
    const CalculateUnPaidInvoices = () => {

    }
    const CalculateTotalInvoices = () => {

    }
    
    return(
        <InvoicesContext.Provider value={
            {invoices,
            AddInvoice,
            CalculatePaidInvoices,
            CalculateUnPaidInvoices,
            CalculateTotalInvoices }}>
                {children}
        </InvoicesContext.Provider>
    );
}


export default InvoicesProvider;