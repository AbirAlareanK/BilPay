
import Button from '../../Components/UIs/Button';
import { Col } from "react-bootstrap";
import Classes from './InvoiceForm.module.scss'
import { AiOutlineSave , AiOutlineEye} from 'react-icons/ai';
import { BsPrinter , BsDownload} from 'react-icons/bs';
import  {IoSendOutline} from 'react-icons/io5'
import FormElement from '../../Components/Invoices/invoice-form/FormElement';
import { UseFormElement } from '../../Utils/Context/FormProvider';
// import { UseInvoices } from '../../Utils/Context/InvoicesProvider';
import { useEffect, useState } from 'react';
import formJSON from '../../Assets/JSON/InvoiceFormElement.json';

const InvoiceForm = () => {
    const  { ResetForm , SetFormElements , FormIsValid }  =  UseFormElement();
    // const  { AddInvoice } = UseInvoices();
    const [ fields ] = useState(formJSON)

    useEffect(()=>{
        SetFormElements(fields);
        return () => {
            SetFormElements([])
        }
    },[SetFormElements , fields])


    const SubmitFormHandler = (event) => {
        event.preventDefault();
        // AddInvoice(GetNewInvoice());
        ResetForm();
    }

    const PrintInvoiceHandler = () => {
        window.print();
    }

    return(
        <>
            <Col lg={8} xs={12}>
                <div  className={` ${Classes.invoiceForm} card-wrapper`}>
                    <form>
                        {fields ? fields.map((field, i) => <FormElement key={i} field={field} />) : <p>Form is emplty</p>}
                    </form>
                </div>
            </Col>
            <Col lg={4} xs={12}>
                <section className={Classes.createInvoiceActions}>
                    <Button className={`${FormIsValid ? 'submitFormButton' :  'submitFormButtonDisabled' }`}
                            // disabled={!FormIsValid}
                            onClick={SubmitFormHandler}>
                        <AiOutlineSave  size={15} />
                        Save
                    </Button>
                    <Button><AiOutlineEye size={15} />Preview</Button>
                    <Button><BsDownload size={15}  />Download</Button>
                    <Button onClick={PrintInvoiceHandler}><BsPrinter size={15}  />Print</Button>
                    <Button><IoSendOutline size={15}  />Send</Button>
                </section>
            </Col>
        </>
    );
}

export default InvoiceForm;