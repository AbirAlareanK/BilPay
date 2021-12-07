
import './App.scss';
// import InvoiceDetails from './Containers/Invoices/InvoiceDetails';
// import InvoiceForm from './Containers/Invoices/InvoiceForm';
// import FormProvider from './Utils/Context/FormProvider';
// import Invoices from './Containers/Invoices/Invoices';
import InvoicesProvider from './Utils/Context/InvoicesProvider';
import AdminCard from './Components/UIs/AdminCard';

// THis code to check if there is two react 
require('react-dom');
window.React2 = require('react');
console.log(window.React1 === window.React2); // true => one react

function App() {
  return (
    <div className="App">
      <InvoicesProvider>
        <AdminCard cardNum="1234 5678 7654 7892"
                   balance="4811,21"
                   validation="03/21"/>
        {/* <Invoices /> */}
        {/* <InvoiceDetails/> */}
        {/* <FormProvider>
          <InvoiceForm />
        </FormProvider> */}
      </InvoicesProvider>
    </div>
  );
}

export default App;
