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

    const { GetFormElement , SetFormElements , ResetForm , FormIsValid } = UseFormElement();
    const { AddNewCard , CardsTableRows , CardsTableCols } =  UseCards();
    const [ fields ] = useState(FormJSON);

    console.log('Card center rendered ! '  + CardsTableRows)
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
            const obj = GetFormElement();
            const cardform = {
                "card-number" : '',
                "card-bank" : '',
                "namein-card" : ''
            }
            obj.forEach(field => {
                switch(field['field_id']){
                    case 'card-number':
                        cardform['card-number'] = field['field_value']
                    break;
                    case 'card-bank':
                        cardform['card-bank'] = field['field_value']
                    break;
                    case 'client-name':
                        cardform['namein-card'] = field['field_value']
                    break;
                    default:
                        return null;
                }
            });
            console.log('submitted !' +  cardform);
            AddNewCard(cardform);
            ResetForm();
        }
    }

    return(
        <Container fluid>
            <Row>
                <Col lg={3}>
                </Col>
                <Col lg={9}>
                    <h5>Card Center</h5>
                    <Container>
                        <Row>
                            <Col lr={12}>
                               <div className={Classes.cardWrapper}>
                                    <CardsWrapper />
                                </div> 
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={9}>
                                <DataTable rows={CardsTableRows}
                                        cols={CardsTableCols}
                                        paging={false}
                                        sortable={false}
                                        small={false} >
                                <h6>Card List</h6>
                                </DataTable>
                            </Col>
                            <Col lg={3}>
                                <div  className="card-wrapper">
                                    <h6>Add Card</h6>
                                    <form style={{padding:'10px'}}>
                                        {fields ? fields.map((field, i) => <FormElement key={i} field={field} />) : <p>Form is emplty</p>}
                                    </form>
                                    <Button 
                                            className={`${FormIsValid ? 'submitFormButton' : 'submitFormButtonDisabled' } ${Classes.addCardBtn}`}
                                            disabled={!FormIsValid}
                                            onClick={SubmitFormHandler}>
                                        <span>
                                            <MdOutlineAddBox style={{paddingLeft:'5px', width:'30px'}} />
                                            Add Card
                                        </span>
                                    
                                    </Button>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
    );
}


export default CardCenter;
