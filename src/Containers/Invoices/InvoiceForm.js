
import Button from '../../Components/UIs/Button';
import { Col , Row , Container } from "react-bootstrap";
// import InvoiceFormElements from "../../Components/Invoices/invoice-form/InvoiceFormElements";
import Classes from './InvoiceForm.module.scss'
import { AiOutlineSave , AiOutlineEye} from 'react-icons/ai';
import { BsPrinter , BsDownload} from 'react-icons/bs';
import  {IoSendOutline} from 'react-icons/io5'
import FormElement from '../../Components/Invoices/invoice-form/FormElement';
import { UseFormElement } from '../../Utils/Context/FormProvider';
import { useEffect, useState } from 'react';


const InvoiceForm = () => {

 
    const  { initialElements }  =  UseFormElement();
    const [ fields , setFields ] = useState()
    
    useEffect(() => {
        setFields(initialElements())
        console.log('set the initial only once')
    } ,[initialElements])


    const SubmitFormHandler = (event) => {
        event.preventDefault();
    }


    const PrintInvoiceHandler = () => {
        window.print();
    }

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
                            <Col lg={8} md={9} xs={12} className="card-wrapper">
                              <form>
                                  {fields ? fields.map((field, i) => <FormElement key={i} field={field} />) : <p>Form is emplty</p>}
                              </form>
                            </Col>
                            <Col lg={4} md={3} xs={12}>
                                <section className={Classes.createInvoiceActions}>
                                    <Button 
                                    //className={`${formValid ? Classes.saveInvoiceButton : Classes.saveInvoiceButtonDisabled}`}
                                            //disabled={!formSubmitted}
                                            onClick={SubmitFormHandler}>
                                        <AiOutlineSave />
                                        Save
                                    </Button>
                                    <Button><AiOutlineEye />Preview</Button>
                                    <Button><BsDownload />Download</Button>
                                    <Button onClick={PrintInvoiceHandler}><BsPrinter />Print</Button>
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