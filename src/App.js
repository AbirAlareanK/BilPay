import './App.scss';
import InvoiceDetails from './Containers/Invoices/InvoiceDetails';
// import Invoices from './Containers/Invoices/Invoices';
import InvoicesProvider from './Utils/Context/InvoicesProvider';


// THis code to check if there is two react 
require('react-dom');
window.React2 = require('react');
console.log(window.React1 === window.React2); // true => one react

function App() {
  return (
    <div className="App">
      <InvoicesProvider>
        {/* <Invoices /> */}
        <InvoiceDetails/>
      </InvoicesProvider>
    </div>
  );
}

export default App;
