import Classes from './InvoiceFilter.module.scss';
import { UseInvoices } from '../../../Utils/Context/InvoicesProvider';

const InvoiceFilter = () => {
    const { ActiveFilter , filteredMonthly , filteredWeekly , filteredDaily} = UseInvoices();

    return (
        <section className={Classes.tableActionButtons}>
            <h5>Latest Invoices</h5>                  
            <ul>
                <li className={ActiveFilter === 'Monthly' ? Classes.activeFilter : ''}
                    onClick={()=> filteredMonthly()}>Monthly</li>
                <li className={ActiveFilter === 'Weekly' ? Classes.activeFilter : ''}
                    onClick={()=> filteredWeekly()}>Weekly</li>
                <li className={ActiveFilter === 'Daily' ? Classes.activeFilter : ''}
                    onClick={()=> filteredDaily()}>Today</li>
            </ul>
        </section>
    );
};

export default InvoiceFilter;