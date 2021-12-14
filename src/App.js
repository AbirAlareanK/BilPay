
import './App.scss';
import FormProvider from './Utils/Context/FormProvider';
import InvoicesProvider from './Utils/Context/InvoicesProvider';
import CardsProvider from './Utils/Context/CardsProvider';
import Layout from './Components/UIs/Layout';

// This code to check if there is two react 
require('react-dom');
window.React2 = require('react');
console.log('this proj has one react ' + (window.React1 === window.React2)); // true => one react

function App() {
  return (
    <div className="App">
      <InvoicesProvider>
        <FormProvider>
          <CardsProvider>
            <Layout />
          </CardsProvider>
        </FormProvider>
      </InvoicesProvider>
    </div>
  );
}

export default App;
