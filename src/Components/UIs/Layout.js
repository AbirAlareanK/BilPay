import { Row , Col , Container} from 'react-bootstrap'
import Navbar from '../../Containers/Navbar/Navbar';
import Classes from './Layout.module.scss'
import { Routes , Route} from "react-router-dom";
import CardCenter from "../../Containers/Cards/CardCenter";
import InvoiceDetails from "../../Containers/Invoices/InvoiceDetails";
import InvoiceForm from "../../Containers/Invoices/InvoiceForm";
import Invoices from "../../Containers/Invoices/Invoices";
import Transactions from '../../Containers/Transctions/Transactions';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import TopNavbar from '../../Containers/Navbar/TopNavbar';

const Layout = () => {

    
    const location = useLocation();
    const [ pageTitle , setPageTitle ] = useState()

    useEffect(()=>{
        const pathName = location.pathname.slice(1);
        switch(pathName){
            case'dashboard' : 
                setPageTitle('Dashboard');
            break;
            case'wallet' : 
                setPageTitle('Wallet');
            break;
            case'invoices' : 
                setPageTitle('Invoices');
            break;
            case'invoice-details' : 
                setPageTitle('Invoice Details');
            break;
            case'card-center' : 
                setPageTitle('Cards Center');
            break;
            case'transaction' : 
                setPageTitle('Transaction Details');
            break;
            case'invoice-form' : 
                setPageTitle('Create Invoice');
            break;
            default:
                return
        }
        
    },[location])

    return (
      <Container fluid>
        <Row>
          <Col xs={12} md={3} lg={2} style={{padding:'0px'}} className="fixed-top one">
              <Navbar/>
          </Col>
          <Col xs={12} md={9} lg={10} className={`${Classes.contentContainer} offset-lg-2 offset-md-3 two`}>
                <Row style={{alignItems: 'center'}}>
                    <Col lg={12}>
                        <TopNavbar />
                    </Col>
                </Row>
                <Row>
                    <Col lg={12}>
                        <section className={Classes.sectionHeader}>
                            <h4>{pageTitle}</h4>
                        </section> 
                    </Col>
                </Row>
                <Row className="padding">
                    <Routes>
                        <Route path="/dashboard" element={<p>Dashboard</p>} />
                        <Route path="/wallet" element={<p>Wallet page</p>} />
                        <Route path="/invoices" element={<Invoices />} />
                        <Route path="/invoices/:invoiceId" element={<InvoiceDetails />} />
                        <Route path="/invoice-form" element={<InvoiceForm />} />
                        <Route path="/card-center" element={<CardCenter />} />
                        <Route path="/transaction" element={<Transactions />} />
                    </Routes>
                </Row>
          </Col>
        </Row>
      </Container>
    );
}

export default Layout;