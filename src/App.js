import './App.css';
import Invoices from './Containers/Invoices';
import InvoicesProvider from './Utils/Context/InvoicesProvider';


// THis code to check if there is two react 
require('react-dom');
window.React2 = require('react');
console.log(window.React1 === window.React2); // true => one react

function App() {
  return (
    <div className="App">
      <InvoicesProvider>
        <Invoices />
      </InvoicesProvider>
    </div>
  );
}

export default App;
