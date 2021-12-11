import Transaction from "../../Components/Transactions/Transaction";
import { Col , Row , Container } from "react-bootstrap";
import Classes from './Transactions.module.scss';
import AdminCard from "../../Components/UIs/AdminCard";
import Cards from '../../Assets/JSON/cards-data.json';
import Services from '../../Assets/JSON/services.json';
import Invoices from '../../Assets/JSON/invoices-data.json';

const Transactions = () => {

    const cardData = Cards[0]

    return(
        <Container fluid>
            <Row>
                <h4>Transaction Details</h4>
                <div className={Classes.heading}>
                    <h6>Transaction</h6>
                    <p>/{}</p>
                </div>
            </Row>
            <Row>
                <Col lg={8}>
                    <Transaction Service={Services[0]}
                                 invoice={Invoices[0]}   />
                </Col>  
                <Col lg={4}>
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