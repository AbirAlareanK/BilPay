import Classes from './InvoiceFilter.module.scss';
import { UseInvoices } from '../../../Utils/Context/InvoicesProvider';

const InvoiceFilter = () => {
    const { filteredMonthly , filteredWeekly , filteredDaily} = UseInvoices();

    return (
        <section className={Classes.tableActionButtons}>
            <h5>Latest Invoices</h5>                  
            <ul>
            <li onClick={()=> filteredMonthly()}>Monthly</li>
            <li onClick={()=> filteredWeekly()}>Weekly</li>
            <li onClick={()=> filteredDaily()}>Today</li>
            </ul>
        </section>
    );
};

export default InvoiceFilter;