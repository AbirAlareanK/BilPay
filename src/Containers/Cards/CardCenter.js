import { Col , Row , Container } from "react-bootstrap";
import {useEffect, useState} from 'react';
import CardsWrapper from "./CardsWrapper";
import Classes from './CardCenter.module.scss';
import FormJSON from '../../Assets/JSON/cards-form-elements.json';
import FormElement from "../../Components/Invoices/invoice-form/FormElement";
import { UseFormElement } from "../../Utils/Context/FormProvider";
import Button from '../../Components/UIs/Button';
import { MdOutlineAddBox } from 'react-icons/md'

const CardCenter = () => {

    const { SetFormElements , ResetForm } = UseFormElement();
    const [ fields ] = useState(FormJSON);

    useEffect(()=>{
        SetFormElements(fields);
        return () => {
            SetFormElements([])
        }
    },[SetFormElements , fields])

    const SubmitFormHandler = (event) =>{
        event.preventDefault();
        ResetForm();
    }

    return(
        <Container fluid className="full-view">
            <Row>
                <Col lg={3}>
                </Col>
                <Col lg={9}>
                    <h3>Card Center</h3>
                    <Row>
                        <div className={Classes.cardWrapper}>
                            <CardsWrapper />
                        </div>
                    </Row>
                    <Row>
                        <Col lg={9}>
                        </Col>
                        <Col lg={3} className="card-wrapper">
                            <h6>Add Card</h6>
                            <form>
                                {fields ? fields.map((field, i) => <FormElement key={i} field={field} />) : <p>Form is emplty</p>}
                            </form>
                            <Button 
                                    //className={`${FormIsValid ? Classes.saveInvoiceButton : Classes.saveInvoiceButtonDisabled}`}
                                    // disabled={!FormIsValid}
                                    onClick={SubmitFormHandler}>
                                <MdOutlineAddBox />
                                Add Card
                            </Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}


export default CardCenter;
