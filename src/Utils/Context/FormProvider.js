import { createContext , useCallback, useContext , useState } from "react";
import formJSON from '../../Assets/JSON/InvoiceFormElement.json';
import Invoices from '../../Assets/JSON/invoices-data.json';

const FormContext = createContext(null); 
export const UseFormElement = () => useContext(FormContext) ;

const FormProvider = (props) => {

    const [ fieldElements , setFieldElements] = useState(formJSON);
    const [ FormIsValid , setFormIsValid ] = useState(false);
    const isNotEmpty = (value) => value.trim() !== '';
    const isEmail = (value) => value.includes('@');

    // get month by name:
    // const monthNames = ["January", "February", "March", "April", "May", "June",
    //                     "July", "August", "September", "October", "November", "December"];
    // const DateToday = (monthNames[today.getMonth()])+' '+today.getDate()+', '+today.getFullYear()
    
    const today = new Date()
    var DateDay = today.getDate()
    if(DateDay < 9){
        DateDay = `0${DateDay}`
    }
    const DateToday = (today.getFullYear()+'-'+today.getMonth()+'-'+DateDay)
    
    const ClaculateInvoiceNumber = () => {
        const Invoice_number = Invoices.length
        const zeroFilled =  ('000' + Invoice_number).substr(-3)
        const fullChar = `INV_${zeroFilled}`
        return fullChar ;
    }

    const initialElements =  useCallback(()=> {
        return fieldElements.map(field => {
                if(field['field_id'] === "date"){
                    return {...field , field_value: DateToday }
                }
                if(field['field_id'] === 'invoice-number'){
                    return {...field , field_value: ClaculateInvoiceNumber() }
                }
                return field
            })
    },[])

    const FormIsValidCheck = () => {
        const newElements = fieldElements.map(field => {
            return field['field_isValid']
        }) 
        if(newElements.every(v => v === true)){
            setFormIsValid(true)
        }else{
            setFormIsValid(false)
        }
    }

    const HasError = (id) => {
        const newElements = [ ...fieldElements ] 
        newElements.forEach(field => {
        const { field_id } = field;
            if (id === field_id) {
                if(!field['field_isValid'] && !field['field_isTouched']){
                    field['field_hasError'] = true;
                }else{
                    field['field_hasError'] = false;
                }
            }
        });
        FormIsValidCheck();
        setFieldElements(newElements)
    }
    
    const HandleChange = (id, event) => {
        const newElements = [ ...fieldElements ] 
        newElements.forEach(field => {
            const { field_type, field_id } = field;
            if (id === field_id) {
                field['field_isTouched'] = true;
                
                // Check if input is valid
                if(field_type === "email"){
                    field['field_isValid'] = isEmail(event.target.value);
                }else{
                    field['field_isValid'] = isNotEmpty(event.target.value);
                }
                
                // check if input has error
                HasError(id);

                // save the value
                switch (field_type) {
                case 'checkbox':
                    field['field_value'] = event.target.checked;
                    break;
                default:
                    field['field_value'] = event.target.value;
                    break;
                }
            }
        });
        setFieldElements(newElements)
    }

    const HandleBlur = (id) => {
        const newElements = [ ...fieldElements ] 
        newElements.forEach(field => {
            const { field_id } = field;
            if (id === field_id) {
                field['field_isTouched'] = false;
                HasError(id);
            }
        });
        setFieldElements(newElements)
    }


    
    return(
        <FormContext.Provider value = {{
                initialElements,
                HandleChange,
                HandleBlur,
                HasError,
                FormIsValid
            }}>
           {props.children}
        </FormContext.Provider>
    );
}

export default FormProvider;
