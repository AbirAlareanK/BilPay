
import Button from '../../Components/UIs/Button';
import { Col , Row , Container } from "react-bootstrap";
import InvoiceFormElements from "../../Components/Invoices/invoice-form/InvoiceFormElements";
import Classes from './InvoiceForm.module.scss'
import { AiOutlineSave , AiOutlineEye} from 'react-icons/ai';
import { BsPrinter , BsDownload} from 'react-icons/bs';
import  {IoSendOutline} from 'react-icons/io5'
import services from '../../Assets/JSON/services.json'

const InvoiceForm = () => {

    
    return(
        <Container fluid >
            <Row>
                <Col lg={3}>
                </Col>
                <Col lg={9}>
                    <Container>
                    <section className={Classes.sectionHeader}>
                        <h5>Create Invoice</h5>
                    </section>
                        <Row>
                            <Col lg={8} md={9} xs={12}>
                                <InvoiceFormElements services={services}/>
                            </Col>
                            <Col lg={4} md={3} xs={12}>
                                <section className={Classes.createInvoiceActions}>
                                    <Button><AiOutlineSave />Save</Button>
                                    <Button><AiOutlineEye />Preview</Button>
                                    <Button><BsDownload />Download</Button>
                                    <Button><BsPrinter />Print</Button>
                                    <Button><IoSendOutline />Send</Button>
                                </section>
                            </Col>
                        </Row>
                     </Container>
                   
                </Col>
            </Row>
        </Container>
    );
}

export default InvoiceForm;