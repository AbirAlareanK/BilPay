import { useEffect, useState } from "react";
import InvoiceBriefWrapper from "../Components/InvoiceBriefWrapper";
import { UseInvoices } from "../Utils/Context/InvoicesProvider";

const InvoiceBriefArray = () => {
    
    const { GetPaidInvoices , GetUnPaidInvoices , GetTotalInvoices} = UseInvoices();
    const [InvoicesBrief , setInvoiceBrief] = useState([]);
    
    useEffect(()=> {
        setInvoiceBrief([
            {
                ...GetTotalInvoices(),
                title:"Total Invoices",
                color:"green"
            },
            {
                ...GetPaidInvoices(),
                title:"Paid Invoices",
                color:"yellow"
            },
            {
                ...GetUnPaidInvoices(),
                title:"Unpaid Invoices",
                color:"red"
            }])
    } ,[InvoicesBrief , GetPaidInvoices , GetUnPaidInvoices , GetTotalInvoices]);

    return(
        <>
            {InvoicesBrief.map((brief , index)=> (
                <InvoiceBriefWrapper 
                    key={index}
                    title={brief.title}
                    color={brief.color}
                    precentage={brief.precentage}
                    number={brief.number}/>
            ))}
        </>
    )
}

export default InvoiceBriefArray;