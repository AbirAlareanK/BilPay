import { useEffect, useState } from 'react';
import { UseFormElement } from '../../../../Utils/Context/FormProvider'
import Classes from '../FormElements.module.scss';
import { UseInvoices } from '../../../../Utils/Context/InvoicesProvider';

const Input = ({ field_hasError , field_focus, field_type ,field_id, field_label, field_placeholder, field_value }) => {
    
    const {  HandleBlur , HandleChange } = UseFormElement();
    const { GetDateToday , CalculateInvoiceNumber} = UseInvoices();
    const [ initialValue , setInitialValue ] = useState('');

    const HandleInputBlur = () => {
        HandleBlur(field_id)
    }

    useEffect(()=> {
        if(field_id === 'date' && field_value === ''){
            setInitialValue(GetDateToday());
        }else if(field_id === 'invoice-number'  && field_value === ''){
            setInitialValue(CalculateInvoiceNumber())
        }else{
            setInitialValue(field_value)
        }
    } ,[field_value , field_id , GetDateToday , CalculateInvoiceNumber])

    return (
        <div className={field_hasError ? `${Classes.formControl} ${Classes.invalid}` : `${Classes.formControl}`}>
            <label>{field_label}</label>
            <input type={field_type}
                className={field_focus ? Classes.autoFucosEffect : ''}  
                placeholder={field_placeholder ? field_placeholder : ''}
                //readOnly={field_focus}
                value={initialValue}
                onBlur={HandleInputBlur}
                onChange={event => HandleChange(field_id , event , field_type)}
            />
        </div>
    )
}

export default Input
