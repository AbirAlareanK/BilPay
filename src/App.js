
import './App.scss';
import { Routes , Route} from "react-router-dom";
import CardCenter from "./Containers/Cards/CardCenter";
import InvoiceDetails from "./Containers/Invoices/InvoiceDetails";
import InvoiceForm from "./Containers/Invoices/InvoiceForm";
import Invoices from "./Containers/Invoices/Invoices";
import FormProvider from './Utils/Context/FormProvider';
import InvoicesProvider from './Utils/Context/InvoicesProvider';
import Navbar from './Components/Navbar/Navbar';
// import CardCenter from './Containers/Cards/CardCenter';
import CardsProvider from './Utils/Context/CardsProvider';
import Layout from './Components/UIs/Layout';
// import Transactions from './Containers/Transctions/Transactions';

// THis code to check if there is two react 
require('react-dom');
window.React2 = require('react');
console.log('this proj has one react ' + (window.React1 === window.React2)); // true => one react

function App() {
  return (
    <div className="App">
     <Transactions />
      <InvoicesProvider>
      <FormProvider>
        <CardsProvider>
          {/* <CardCenter /> */}
          <Navbar />
        </CardsProvider>
        {/* <Invoices /> */}
        {/* <InvoiceDetails/> */}
          {/* <InvoiceForm /> */}
        </FormProvider>
      </InvoicesProvider>
    </div>
  );
}

export default App;
