import { createContext , useCallback, useContext , useEffect, useState } from "react";
import formJSON from '../../Assets/JSON/InvoiceFormElement.json';


const FormContext = createContext(null); 
export const UseFormElement = () => useContext(FormContext) ;

const FormProvider = (props) => {

    const [ fieldElements , setFieldElements] = useState(formJSON);

    // get today date
    // const monthNames = ["January", "February", "March", "April", "May", "June",
    // "July", "August", "September", "October", "November", "December"
    // ];
    const today = new Date()
    // const DateToday = (monthNames[today.getMonth()])+' '+today.getDate()+', '+today.getFullYear()
    var DateDay = today.getDate()
    if(DateDay < 9){
        DateDay = `0${DateDay}`
    }
    const DateToday = (today.getFullYear()+'-'+today.getMonth()+'-'+DateDay)
    console.log(DateToday)
    //

    const initialElements =  useCallback(()=> {
        return fieldElements.map(field => {
                if(field['field_id'] === "date"){
                    return {...field , field_value: DateToday }
                }
                if(field['field_id'] === 'invoice-number'){
                    return {...field , field_value: "INV_002" }
                }
                if(field['field_id'] === 'due-date'){
                    return {...field , field_value: DateToday }
                }
                return field
            }) || []
    },[])
    
    const HandleChange = (id, event) => {
        console.log('event' + event.target.value);
        console.log(id)
    }

    
    return(
        <FormContext.Provider value = {{
                initialElements,
                HandleChange,
            }}>
           {props.children}
        </FormContext.Provider>
    );
}

export default FormProvider;
