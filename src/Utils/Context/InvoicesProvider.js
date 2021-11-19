import { useContext , useState , useMemo} from "react";
import Invoices from '../../Assets/invoices-data.json';
import { nanoid } from 'nanoid';

const InvoicesContext =  useContext();

const InvoicesProvider = ({children}) => {

    const [invoices , setInvoices ] = useState(Invoices);

    const filteredPaidInvo = useMemo(invoices.map(invoice => (invoice["invoice-status"] === "paid")) ,[invoices]);
    const filteredUnPaidInvo = useMemo(invoices.map(invoice => (invoice["invoice-status"] === "unpaid")) ,[invoices]);

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
            precentage : (100 * arrayN / invoices.length)
        }
    }
    const GetTotalInvoices = () => {
        return {
            number : invoices.length,
            precentage : 100
        }
    }
    
    return(
        <InvoicesContext.Provider value={
            {invoices,
            AddInvoice,
            GetPaidInvoices,
            GetUnPaidInvoices,
            GetTotalInvoices }}>
                {children}
        </InvoicesContext.Provider>
    );
}


export default InvoicesProvider;