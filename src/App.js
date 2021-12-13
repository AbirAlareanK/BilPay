
import './App.scss';
import { Routes , Route} from "react-router-dom";
import CardCenter from "./Containers/Cards/CardCenter";
import InvoiceDetails from "./Containers/Invoices/InvoiceDetails";
import InvoiceForm from "./Containers/Invoices/InvoiceForm";
import Invoices from "./Containers/Invoices/Invoices";
import FormProvider from './Utils/Context/FormProvider';
import InvoicesProvider from './Utils/Context/InvoicesProvider';
import CardsProvider from './Utils/Context/CardsProvider';
import Layout from './Components/UIs/Layout';
import Transactions from './Containers/Transctions/Transactions';

// This code to check if there is two react 
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
            <Layout />
            <Routes>
              {/* <Route path="/dashboard" element={} />
              <Route path="/wallet" element={} /> */}
              <Route path="invoices" element={<Invoices />}>
                <Route path="invoice-details" element={<InvoiceDetails />} />
              </Route>
              <Route path="invoice-form" element={<InvoiceForm />} />
              <Route path="/card-center" element={<CardCenter />} />
              <Route path="/transaction" element={<Transactions />} />
            </Routes>
          </CardsProvider>
        </FormProvider>
      </InvoicesProvider>
    </div>
  );
}

export default App;
