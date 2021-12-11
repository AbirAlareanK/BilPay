import { createContext , useContext , useState } from "react";

export const FormContext = createContext(null); 
export const UseFormElement = () => useContext(FormContext) ;

const FormProvider = (props) => {

    const [ fieldElements , setFieldElements] = useState();
    const [ FormIsValid , setFormIsValid ] = useState(false);

    const isNotEmpty = (value) => value.trim() !== '';
    const isEmail = (value) => value.includes('@');
    const isCardNumber = (value) =>  /^\d+$/.test(value) && value.length === 16 ;

    const SetFormElements = (formEl) => {
        setFieldElements(formEl)
    }

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
        console.log(newElements);
        newElements.forEach(field => {
            const { field_type, field_id } = field;
            if (id === field_id) {
                field['field_isTouched'] = true;
                
                // Check if input is valid
                if(field_type === "email"){
                    field['field_isValid'] = isEmail(event.target.value);
                }else if(field_id === "card-number"){
                    field['field_isValid'] = isCardNumber(event.target.value);
                }else{
                    field['field_isValid'] = isNotEmpty(event.target.value);
                }
                
                //check if input has error
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

    const ResetForm = () => {
        const newElements = [ ...fieldElements ] 
        newElements.forEach(field => {
            // if(field['field_id'] === 'invoice-number'){
            //     field['field_value'] = CalculateInvoiceNumber
            // }else{
            //     field['field_value'] = ''
            // }
            field['field_value'] = ''
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
    
    const GetFormElement = () => {
        return fieldElements;
    }
    // const GetNewInvoice = () => {
    //     const newInvoice =  {
    //         invoiceNumber : '',
    //         invoiceDate: '',
    //         client: '',
    //         email:  '',
    //         companyName: '',
    //         companyAddress: '',
    //         serviceName: '',
    //         serviceDetails:'' ,
    //         dueDate: '',
    //         subtotal: '',
    //         status:  'UnPaid',
    //         discount:  0 ,
    //         dicountAmount : 0   
    //     }
    //     fieldElements.forEach(field => {
    //         switch(field['field_id']){
    //             case 'invoice-number':
    //                 newInvoice.invoiceNumber = CalculateInvoiceNumber
    //             break;
    //             case 'date':
    //                 newInvoice.invoiceDate = DateToday
    //             break;
    //             case 'client-name':
    //                 newInvoice.client = field['field_value']
    //             break;
    //             case 'client-email':
    //                 newInvoice.email = field['field_value']
    //             break;
    //             case 'company-name':
    //                 newInvoice.companyName = field['field_value']
    //             break;
    //             case 'company-address':
    //                 newInvoice.companyAddress = field['field_value']
    //             break;
    //             case 'service-name':
    //                 newInvoice.serviceName = field['field_value']
    //             break;
    //             case 'service-details':
    //                 newInvoice.serviceDetails = field['field_value']
    //             break;
    //             case 'due-date':
    //                 newInvoice.dueDate = field['field_value']
    //             break;
    //             case 'subtotal':
    //                 newInvoice.subtotal = field['field_value']
    //             break;
    //             default:
    //             return null;
    //         }
    //     });
    //     return newInvoice ;
    // }
    
    return(
        <FormContext.Provider value = {{
                //initialElements,
                FormIsValid,
                HandleChange,
                SetFormElements,
                HandleBlur,
                HasError,
                GetFormElement,
                // GetNewInvoice,
                ResetForm
            }}>
           {props.children}
        </FormContext.Provider>
    );
}

export default FormProvider;
