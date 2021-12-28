import { Col } from "react-bootstrap";
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
                    case 'bank':
                        cardform['card-bank'] = field['field_value']
                    break;
                    case 'namein-card':
                        cardform['namein-card'] = field['field_value']
                    break;
                    default:
                        return null;
                }
            });
            AddNewCard(cardform);
            ResetForm();
        }
    }

    return(
        <>
        <Col lg={12} className="r0-padding">
            <CardsWrapper />
        </Col>
        <Col lg={9}>
            <DataTable 
                    className={Classes.cardsTable}
                    rows={CardsTableRows}
                    cols={CardsTableCols}
                    clickable={false}
                    paging={false}
                    sortable={false}
                    small={false} >
            <h6>Card List</h6>
            </DataTable>
        </Col>
        <Col lg={3}>
            <div className={`${Classes.addcartContainer} card-wrapper`}>
                <h6>Add Card</h6>
                <form>
                    {fields ? fields.map((field, i) => <FormElement key={i} field={field} />) : <p>Form is emplty</p>}
                </form>
                <Button 
                        className={`${FormIsValid ? 'submitFormButton' : 'submitFormButtonDisabled' } ${Classes.addCardBtn}`}
                        disabled={!FormIsValid}
                        onClick={SubmitFormHandler}>
                    <div>
                        <MdOutlineAddBox size={18} />
                        <span>Add Card</span>
                    </div>
                </Button>   
            </div>
        </Col>
        </>
    );
}


export default CardCenter;
