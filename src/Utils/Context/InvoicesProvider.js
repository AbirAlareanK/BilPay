import { createContext, useContext , useState } from "react";
import InvoicesData from '../../Assets/JSON/invoices-data.json';

export const InvoicesContext =  createContext();
export const UseInvoices = () => useContext(InvoicesContext) ;

const InvoicesProvider = (props) => {
    const [invoices , setInvoices ] = useState(InvoicesData);

    const status = (st) => st ? st : 'unpaid' ;

    const filteredRows = invoices.map(invoice => (
        {
            id : invoice['invoice-number'],
            client : invoice['client'],
            date : invoice['invoice-date'],
            email: invoice['email'],
            amount : invoice['subtotal'],
            serviceType : invoice['service-details'],
            serviceStatus : status(invoice['status']),
            detailsPage : "..."
         } 
    ));

    // const filteredMonthly = filteredRows.filter(row => row.date )

    const FindMissingNInArray = (array) => {
        const mnia = array.sort().reduce((acc, cur, ind, arr)=> {
            var diff = cur - arr[ind-1];
            if (diff > 1) {
              var i = 1;
              while (i < diff) {
                acc.push(arr[ind-1]+i);
                i++;
              }
            }
            return acc;
          }, []);
        return mnia;
    }

    const CalculateInvoiceNumber = () => {
        const invoiceNums = invoices.map(inv => {
           return inv['invoice-number'].slice(4)
        })
        const missingNum = FindMissingNInArray(invoiceNums.map((el)=>{ return +el;}))
        if(missingNum.length === 0){
             const Invoice_number = invoices.length + 1
            const zeroFilled =  ('00' + Invoice_number)
            const CalculateInvoiceNumber =  `INV_${zeroFilled}`
            return CalculateInvoiceNumber;
        }else {
            const zeroFilled =  ('00' + missingNum[0])
            const CalculateInvoiceNumber =  `INV_${zeroFilled}`
            return CalculateInvoiceNumber;
        }
    }

    // const day = new Date().getDate().toString()
    // const filteredDaily = filteredRows.filter(row => row.date.slice(6,8) === '20' );


    const convertDate = (date) => {

        const monthNames = ["January", "February", "March", "April", "May", "June",
                           "July", "August", "September", "October", "November", "December"];
         const year = date.slice(0,4);
         const month = monthNames[date.slice(5,7)];
         const day = date.slice(8);
         const newDate = (month+' '+day+', '+ year);
         return newDate;
 }
    const GetDateToday = () => {
       const today = new Date()
       var DateDay = today.getDate()
       if(DateDay <= 9){
           DateDay = `0${DateDay}`
       }
       const DateToday = (today.getFullYear()+'-'+today.getMonth()+'-'+DateDay);
       return DateToday;
   
   };

    const AddInvoice = (newInvoice) => {
        setInvoices([
            ...invoices,
            {
                ...newInvoice,
                status : 'unpaid',
                "invoice-date":convertDate(newInvoice['invoice-date'])
            }
        ]);
    }

    const GetTableRows = () => {
        return filteredRows ;
    }

    const  GetPaidInvoices = () => {
        const fInv = invoices.filter(invoice =>  invoice.status === "paid");
        return {
            number : fInv.length,
            precentage : Math.round(100 * fInv.length / invoices.length)
        }
    }
    const GetUnPaidInvoices = () => {
        const fInv = invoices.filter(invoice => invoice.status === "unpaid");
        return {
            number : fInv.length,
            precentage : Math.round(100 * fInv.length / invoices.length)
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
                GetInvoiceDetails,
                CalculateInvoiceNumber,
                GetDateToday
            }}>
           {props.children}
        </InvoicesContext.Provider>
    );
}

export default InvoicesProvider;
