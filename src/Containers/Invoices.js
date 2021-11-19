import {UseInvoices} from '../Utils/Context/InvoicesProvider';

const Invoices = () => {
    const {invoices} = UseInvoices();
    console.log(invoices);

    return(
        <>
            <p>inside invoices</p>
        </>
    )
}

export default Invoices;


