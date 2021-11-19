import './App.css';
import Invoices from './Containers/Invoices';
import InvoicesProvider from './Utils/Context/InvoicesProvider';

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
