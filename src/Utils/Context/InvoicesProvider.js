import { createContext, useContext , useState } from "react";
import InvoicesData from '../../Assets/JSON/Invoices/invoices-data.json';

export const InvoicesContext =  createContext();
export const UseInvoices = () => useContext(InvoicesContext) ;

const InvoicesProvider = (props) => {
    const [invoices , setInvoices ] = useState(InvoicesData);
    const [ ActiveFilter , setActiveFilter ] = useState('');
    const status = (st) => st ? st : 'unpaid' ;

    const filteredRows = invoices.map(invoice => (
        {
            id : invoice['invoice-number'],
            client : invoice['client'],
            date : convertDate(invoice['invoice-date']),
            email: invoice['email'],
            amount : `$${invoice['subtotal']}`,
            serviceType : invoice['service-details'],
            serviceStatus : status(invoice['status']),
            detailsPage : "..."
         } 
    ));

    const filteredShortRows = invoices.slice(0,5).map(invoice => (
        {
            id : invoice['invoice-number'],
            recipient : invoice['client'],
            date : convertDate(invoice['invoice-date']),
            status : status(invoice['status'])
         } 
    ));

    function filteredMonthly(){
        const newInvoices = InvoicesData.filter(row => daysBack(30) === parseInt(row['invoice-date'].slice(5,7)) )
        setActiveFilter('Monthly');
        setInvoices(newInvoices);
    }

    const filteredDaily = () => {
        const newInvoices = InvoicesData.filter(row => daysBack(1) <= parseInt(row['invoice-date'].slice(8)) && new Date().getMonth() === parseInt(row['invoice-date'].slice(5,7)))
        setActiveFilter('Daily');
        setInvoices(newInvoices);
    }

    const filteredWeekly = () => {
        const newInvoices = InvoicesData.filter(row => daysBack(7) <= parseInt(row['invoice-date'].slice(8)) && new Date().getMonth() === parseInt(row['invoice-date'].slice(5,7)))
        setActiveFilter('Weekly');
        setInvoices(newInvoices);
    }

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

    function convertDate(date){

        const monthNames = ["start" ,"January", "February", "March", "April", "May", "June",
                           "July", "August", "September", "October", "November", "December"];
         const year = date.slice(0,4);
         const month = monthNames[date.slice(5,7)];
         const day = date.slice(8);
         const newDate = (month+' '+day+', '+ year);
         return newDate;
    }

    function daysBack(days){
        var date = new Date();
        var last = new Date(date.getTime() - (days * 24 * 60 * 60 * 1000));
        var daysBackToCom = last.getMonth() + 1;
        return daysBackToCom ;
    }

    const GetDateToday = () => {
       const today = new Date()
       var DateDay = today.getDate()
       if(DateDay <= 9){
           DateDay = `0${DateDay}`
       }
       var month = today.getMonth() + 1;
       if(month <= 9){
            month = `0${month}`
       }
       const DateToday = (today.getFullYear()+'-'+month+'-'+DateDay);
       return DateToday;
   
   };

    const AddInvoice = (newInvoice) => {
        console.log(newInvoice)
        setInvoices([
            ...invoices,
            {
                ...newInvoice,
                status : 'unpaid'
            }
        ]);
    }

    const GetTableRows = () => {
        return filteredRows ;
    }

    const GetShortTableRows = () => {
        return filteredShortRows ;
    }

    const  GetPaidInvoices = () => {
        const fInv = InvoicesData.filter(invoice =>  invoice.status === "paid");
        return {
            number : fInv.length,
            precentage : Math.round(100 * fInv.length / InvoicesData.length)
        }
    }
    const GetUnPaidInvoices = () => {
        const fInv = InvoicesData.filter(invoice => invoice.status === "unpaid");
        return {
            number : fInv.length,
            precentage : Math.round(100 * fInv.length / InvoicesData.length)
        }
    }
    const GetTotalInvoices = () => {
        return {
            number : InvoicesData.length,
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
                GetShortTableRows,
                GetInvoiceDetails,
                CalculateInvoiceNumber,
                GetDateToday,
                filteredMonthly,
                filteredDaily,
                filteredWeekly,
                ActiveFilter
            }}>
           {props.children}
        </InvoicesContext.Provider>
    );
}

export default InvoicesProvider;
