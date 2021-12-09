
import './App.scss';
// import CardCenter from './Containers/Cards/CardCenter';
// import InvoiceDetails from './Containers/Invoices/InvoiceDetails';
import InvoiceForm from './Containers/Invoices/InvoiceForm';
import FormProvider from './Utils/Context/FormProvider';
// import Invoices from './Containers/Invoices/Invoices';
import InvoicesProvider from './Utils/Context/InvoicesProvider';

// THis code to check if there is two react 
require('react-dom');
window.React2 = require('react');
console.log('this proj has one react ' + (window.React1 === window.React2)); // true => one react

function App() {
  return (
    <div className="App">
      <InvoicesProvider>
        <FormProvider>
          {/* <CardCenter /> */}
           {/* <Invoices /> */}
        {/* <InvoiceDetails/> */}
          <InvoiceForm />
        </FormProvider>
      </InvoicesProvider>
    </div>
  );
}

export default App;
