import { Col , Row , Container } from "react-bootstrap";
import {useEffect, useState} from 'react';
import CardsWrapper from "./CardsWrapper";
import Classes from './CardCenter.module.scss';
import FormJSON from '../../Assets/JSON/cards-form-elements.json';
import FormElement from "../../Components/Invoices/invoice-form/FormElement";
import { UseFormElement } from "../../Utils/Context/FormProvider";
import Button from '../../Components/UIs/Button';
import { MdOutlineAddBox } from 'react-icons/md';
import DataTable from "../../Components/Table/DataTable";
import { UseCards } from "../../Utils/Context/CardsProvider";

const CardCenter = () => {

    const { SetFormElements , ResetForm , FormIsValid } = UseFormElement();
    const { CardsTableRows , CardsTableCols } =  UseCards();
    const [ fields ] = useState(FormJSON);

    useEffect(()=>{
        SetFormElements(fields);
        return () => {
            SetFormElements([])
        }
    },[SetFormElements , fields])

    const SubmitFormHandler = (event) =>{
        event.preventDefault();
        if(!FormIsValid){
            return;
        }else{
            console.log('submitted !');
            ResetForm();
        }
    }

    return(
        <Container fluid>
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
                            <DataTable rows={CardsTableRows}
                                       cols={CardsTableCols}
                                       paging={false}
                                       sortable={false}
                                       small={false} />
                        </Col>
                        <Col lg={3} className="card-wrapper">
                            <h6>Add Card</h6>
                            <form>
                                {fields ? fields.map((field, i) => <FormElement key={i} field={field} />) : <p>Form is emplty</p>}
                            </form>
                            <Button 
                                    className={`${FormIsValid ? 'submitFormButton' : 'submitFormButtonDisabled' }`}
                                    disabled={!FormIsValid}
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
