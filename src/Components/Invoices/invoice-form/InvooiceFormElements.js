import Classes from './InvoiceFormElements.module.scss';
import { Row  } from "react-bootstrap";


const InvoiceFormElements = () => {

    const SubmitFormHandler = () => {

    }

    return (
        <section className={` ${Classes.invoiceFormContent} card-wrapper`}>
            <form onSubmit={SubmitFormHandler}>
                <Row>
                    <label htmlFor='number'>Invoice Number</label>
                    <input type="text"/>
                    <label htmlFor='date'>Date</label>
                    <input type="date" />
                </Row>
                <Row>
                    <label htmlFor='client'>Client</label>
                    <input type="text"/>
                </Row>
                <Row>
                    <label htmlFor='company-name'>Company Name</label>
                    <input type="text"/>
                </Row>
                <Row>
                    <label htmlFor='company-address'>Company Address</label>
                    <textarea rows={4} contentEditable={false}/>
                </Row>
                <Row>
                    <label htmlFor='company-email'>Company Email</label>
                    <input type="text"/>
                </Row>
                <Row>
                    <label htmlFor='service-name'>Service Name</label>
                    <input type="text"/>
                    <label htmlFor='service-details'>Service Details</label>
                    <input type="text"/>
                </Row>
                <Row>
                    <label htmlFor='due-date'>Due Date</label>
                    <input type="date"/>
                    <label htmlFor='subtotal'>Subtotal</label>
                    <input type="text"/>
                </Row>
            </form>
        </section>
    )
}

export default InvoiceFormElements;