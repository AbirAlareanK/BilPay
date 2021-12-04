
import { Row  } from "react-bootstrap";
import { useCallback, useEffect, useState } from 'react';
import useInput from '../../../Utils/Hooks/use-input';


const InvoiceFormElements = ({ services , onSetFormValid, onSetFormSubmitted , onSaveInvoice}) => {

    const isNotEmpty = (value) => value.trim() !== '';
    const isEmail = (value) => value.includes('@');

    const [ dateToday , setDateToday] = useState();
    

    const {
        value: invoiceNumberValue,
        isValid: invoiceNumberIsValid,
        hasError: invoiceNumberHasError,
        valueChangeHandler: invoiceNumberChangeHandler,
        inputBlurHandler: invoiceNumberBlurHandler,
        reset: resetInvoiceNumber,
    } = useInput(isNotEmpty);
    
    const {
        value: companyNameValue,
        isValid: companyNameIsValid,
        hasError: companyNameHasError,
        valueChangeHandler: companyNameChangeHandler,
        inputBlurHandler: companyNameBlurHandler,
        reset: resetCompanyName,
    } = useInput(isNotEmpty);

    const {
        value: companyAddressValue,
        isValid: companyAddressIsValid,
        hasError: companyAddressHasError,
        valueChangeHandler: companyAddressChangeHandler,
        inputBlurHandler: companyAddressBlurHandler,
        reset: resetCompanyAddress,
    } = useInput(isNotEmpty);

    const {
        value: serviceNameValue,
        isValid: serviceNameIsValid,
        hasError: serviceNameHasError,
        valueChangeHandler: serviceNameChangeHandler,
        inputBlurHandler: serviceNameBlurHandler,
        reset: resetServiceName,
    } = useInput(isNotEmpty);

    const {
        value: clientNameValue,
        isValid: clientNameIsValid,
        hasError: clientNameHasError,
        valueChangeHandler: clientNameChangeHandler,
        inputBlurHandler: clientNameBlurHandler,
        reset: resetClientName,
    } = useInput(isNotEmpty);

    const {
        value: emailValue,
        isValid: emailIsValid,
        hasError: emailHasError,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmail,
    } = useInput(isEmail);

    const {
        value: serviceDetailsValue,
        isValid: serviceDetailsIsValid,
        hasError: serviceDetailsHasError,
        valueChangeHandler: serviceDetailsSelectHandler,
        inputBlurHandler: serviceDetailsBlurHandler,
        reset: resetServiceDetails,
    } = useInput(isNotEmpty);

    const {
        value: dueDateValue,
        isValid: dueDateIsValid,
        hasError: dueDateHasError,
        valueChangeHandler: dueDateChangeHandler,
        inputBlurHandler: dueDateBlurHandler,
        reset: resetDueDate,
    } = useInput(isNotEmpty);

    const {
        value: subTotalValue,
        isValid: subTotalIsValid,
        hasError: subTotalHasError,
        valueChangeHandler: subTotalChangeHandler,
        inputBlurHandler: subTotalBlurHandler,
        reset: resetSubTotal,
    } = useInput(isNotEmpty);

    const FormCompleteHandler = useCallback(() => {
        // send Data to parent component for submition
               const formToSubmit = {
                   name : clientNameValue,
                   email : emailValue,
                   invoiceNumber : invoiceNumberValue,
                   companyName : companyNameValue,
                   companyAddress : companyAddressValue,
                   serviceName : serviceNameValue,
                   dueDate : dueDateValue,
                   subTotal : subTotalValue,
                   serviceDetails : serviceDetailsValue
                 }
                 onSaveInvoice(formToSubmit);
                 onSetFormSubmitted(true);
                 
                   resetServiceDetails();
                   resetSubTotal();
                   resetDueDate();
                   resetServiceName();
                   resetCompanyName();
                   resetCompanyAddress();
                   resetInvoiceNumber();
                   resetClientName();
                   resetEmail();
       },[resetServiceDetails,resetSubTotal,resetDueDate,resetServiceName,resetCompanyName,resetCompanyAddress,resetInvoiceNumber,resetClientName,resetEmail,onSetFormSubmitted,onSaveInvoice
           ,clientNameValue,invoiceNumberValue,serviceDetailsValue,subTotalValue,dueDateValue,serviceNameValue,companyAddressValue,companyNameValue,emailValue]);

    useEffect(() => {

        //Auto fill the date field input to Today date
        const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
        ];
        const today = new Date()
        const DateToday = (monthNames[today.getMonth()])+' '+today.getDate()+', '+today.getFullYear()
        setDateToday(DateToday)

        // Checking Form Validation
        if (clientNameIsValid && emailIsValid && invoiceNumberIsValid && companyNameIsValid && companyAddressIsValid && serviceNameIsValid && dueDateIsValid && subTotalIsValid && serviceDetailsIsValid) {
            onSetFormValid(true)
            onSetFormSubmitted(true)
            FormCompleteHandler()
        }
        if (clientNameHasError || emailHasError || invoiceNumberHasError || companyNameHasError || companyAddressHasError || serviceNameHasError || dueDateHasError || subTotalHasError || serviceDetailsHasError) {
            onSetFormValid(false)
            onSetFormSubmitted(false)
        }

    }, [setDateToday ,onSetFormSubmitted, onSetFormValid,FormCompleteHandler,
        clientNameIsValid , companyNameIsValid,
        emailIsValid , companyNameHasError,
        clientNameHasError, companyAddressHasError,
        emailHasError , companyAddressIsValid,
        invoiceNumberIsValid, serviceNameHasError ,
        invoiceNumberHasError , serviceNameIsValid,
        dueDateHasError , dueDateIsValid ,
        subTotalHasError , subTotalIsValid , 
        serviceDetailsHasError , serviceDetailsIsValid
    ]);
    
       
    
    const SubmitFormHandler = event => {
        event.preventDefault();
    }

    return (
        <section className={` ${Classes.invoiceFormContent} card-wrapper`}>
            <form onSubmit={SubmitFormHandler}>
                <Row className={Classes.formControlMul}>
                    <div className={invoiceNumberHasError ? `${Classes.formControl} ${Classes.invalid}` : `${Classes.formControl}`} >
                        <label htmlFor='number'>Invoice Number</label>
                        <input type="text"
                                // placeholder="INV-005"
                                value={invoiceNumberValue}
                                onChange={invoiceNumberChangeHandler}
                                onBlur={invoiceNumberBlurHandler}
                                placeholder={invoiceNumberHasError ? "Please enter" : 'INV-005'}/>
                    </div>
                    <div className={Classes.formControl} >
                        <label htmlFor='date'>Date</label>
                        <input type="text" placeholder={dateToday}/>
                    </div>
                </Row>
                <Row className={clientNameHasError ? `${Classes.formControl} ${Classes.invalid}` : `${Classes.formControl}`}>
                    <label htmlFor='client'>Client</label>
                    <input  type="text"
                            value={clientNameValue }
                            onChange={clientNameChangeHandler}
                            onBlur={clientNameBlurHandler}
                            placeholder={clientNameHasError ? "Please enter a client name" : ''}/>
                </Row>
                <Row className={companyNameHasError ? `${Classes.formControl} ${Classes.invalid}` : `${Classes.formControl}`}>
                    <label htmlFor='company-name'>Company Name</label>
                    <input type="text"
                            value={companyNameValue}
                            onChange={companyNameChangeHandler}
                            onBlur={companyNameBlurHandler}
                            placeholder={companyNameHasError ? 'Please enter a company name' : ''}/>
                </Row>
                <Row className={companyAddressHasError ? `${Classes.formControl} ${Classes.invalid}` : `${Classes.formControl}`}>
                    <label htmlFor='company-address'>Company Address</label>
                    <textarea   rows={4}
                                value={companyAddressValue}
                                onChange={companyAddressChangeHandler}
                                onBlur={companyAddressBlurHandler}
                                placeholder={companyAddressHasError ? 'Please enter a company address' : ''}/>
                </Row>
                <Row className={emailHasError ? `${Classes.formControl} ${Classes.invalid}` : `${Classes.formControl}`}>
                    <label htmlFor='company-email'>Company Email</label>
                    <input type="text"
                            value={emailValue}
                            onChange={emailChangeHandler}
                            onBlur={emailBlurHandler}
                            placeholder={emailHasError ? "Please enter a valid email" : ''}/>
                </Row>
                <Row className={Classes.formControlMul}>
                    <div className={serviceNameHasError ? `${Classes.formControl} ${Classes.invalid}` : `${Classes.formControl}`} >
                        <label htmlFor='service-name'>Service Name</label>
                        <input type="text"
                                value={serviceNameValue}
                                onChange={serviceNameChangeHandler}
                                onBlur={serviceNameBlurHandler}
                                placeholder={serviceNameHasError ? 'Please enter the service name' : ''}/>
                    </div>
                    <div className={Classes.formControl} >
                        <label htmlFor='service-details'>Service Details</label>
                        <select id="service-details"
                                name="service-details"
                                value={serviceDetailsValue}
                                onChange={serviceDetailsSelectHandler}
                                onSelect={serviceDetailsSelectHandler}
                                onBlur={serviceDetailsBlurHandler}>
                            {services.map(service => (
                                 <option key={service.serviceId} value={service.serviceName}>{service.serviceName}</option>
                            ))}
                        </select>
                    </div>
                </Row>
                <Row className={Classes.formControlMul}>
                    <div className={dueDateHasError ? `${Classes.formControl} ${Classes.invalid}` : `${Classes.formControl}`}>
                        <label htmlFor='due-date'>Due Date</label>
                        <input type="date"
                                value={dueDateValue}
                                onChange={dueDateChangeHandler}
                                onBlur={dueDateBlurHandler}
                                placeholder={dueDateHasError ? 'Please enter a valid date' : ''}/>
                    </div>
                    <div className={subTotalHasError ? `${Classes.formControl} ${Classes.invalid}` : `${Classes.formControl}`} >
                        <label htmlFor='subtotal'>Subtotal</label>
                        <input type="number"
                                value={subTotalValue}
                                onChange={subTotalChangeHandler}
                                onBlur={subTotalBlurHandler}
                                placeholder={subTotalHasError ? 'Please enter subtotal' : ''}/>
                    </div>
                </Row>
            </form>
        </section>
    )
}

export default InvoiceFormElements;