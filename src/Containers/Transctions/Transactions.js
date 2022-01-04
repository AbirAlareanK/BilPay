import Transaction from "../../Components/Transactions/Transaction";
import { Col , Row , Container } from "react-bootstrap";
import Classes from './Transactions.module.scss';
import AdminCard from "../../Components/UIs/AdminCard";
import Cards from '../../Assets/JSON/Cards/cards-data.json';
import Invoices from '../../Assets/JSON/Invoices/invoices-data.json';
import { useState } from "react";

const Transactions = () => {

    const cardData = Cards[0]
    const [ services ] = useState([
        {
            id : 'SER_001',
            serviceName : 'Web Design and Development',
            servicePrice : '750.00'
        },
        {
            id : 'SER_002',
            serviceName : 'Hosting',
            servicePrice : '50.00'
        }
    ]);

    const [ tax ] = useState('10.00');

    return(
        <Container fluid>
            <Row>
                <Col lg={12}>
                    <div className={Classes.heading}>
                        <h6>Transaction</h6>
                        <p>/{Invoices[0]['invoice-number']}</p>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col lg={8} md={12}>
                    <Transaction services={services}
                                 invoice={Invoices[0]} 
                                 tax={tax}  />
                </Col>  
                <Col lg={4} md={12}>
                    <div className={Classes.CardUsed}>
                        <AdminCard key={cardData['card-id']}  cardNum={cardData["card-number"]}
                                                    balance={cardData["card-balance"]}
                                                    validation={cardData["card-validation"]}
                                                    color={cardData['card-color']}/>
                    </div>
                    
                </Col>  
            </Row>
        </Container>
       
    )
}

export default Transactions;