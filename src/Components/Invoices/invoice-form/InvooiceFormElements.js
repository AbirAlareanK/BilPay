import Classes from './InvoiceFormElements.module.scss';
import { Row  } from "react-bootstrap";
import { useEffect, useState } from 'react';


const InvoiceFormElements = () => {

    
    const [ dateToday , setDateToday] = useState();
    

    useEffect(() => {
        const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
        ];
        const today = new Date()
        const DateToday = (monthNames[today.getMonth()])+' '+today.getDate()+', '+today.getFullYear()
        setDateToday(DateToday)
    }, [setDateToday])


    const SubmitFormHandler = () => {

    }

    return (
        <section className={` ${Classes.invoiceFormContent} card-wrapper`}>
            <form onSubmit={SubmitFormHandler}>
                <Row className={Classes.formControlMul}>
                    <div className={Classes.formControl} >
                        <label htmlFor='number'>Invoice Number</label>
                        <input type="text" placeholder="INV-005"/>
                    </div>
                    <div className={Classes.formControl} >
                        <label htmlFor='date'>Date</label>
                        <input type="text" placeholder={dateToday}/>
                    </div>
                </Row>
                <Row className={Classes.formControl}>
                    <label htmlFor='client'>Client</label>
                    <input type="text"/>
                </Row>
                <Row className={Classes.formControl}>
                    <label htmlFor='company-name'>Company Name</label>
                    <input type="text"/>
                </Row>
                <Row className={Classes.formControl}>
                    <label htmlFor='company-address'>Company Address</label>
                    <textarea rows={4} contentEditable={false}/>
                </Row>
                <Row className={Classes.formControl}>
                    <label htmlFor='company-email'>Company Email</label>
                    <input type="text"/>
                </Row>
                <Row className={Classes.formControlMul}>
                    <div className={Classes.formControl} >
                        <label htmlFor='service-name'>Service Name</label>
                        <input type="text"/>
                    </div>
                    <div className={Classes.formControl} >
                        <label htmlFor='service-details'>Service Details</label>
                        <input type="text"/>
                    </div>
                </Row>
                <Row className={Classes.formControlMul}>
                    <div className={Classes.formControl} >
                        <label htmlFor='due-date'>Due Date</label>
                        <input type="date"/>
                    </div>
                    <div className={Classes.formControl} >
                        <label htmlFor='subtotal'>Subtotal</label>
                        <input type="text"/>
                    </div>
                </Row>
            </form>
        </section>
    )
}

export default InvoiceFormElements;