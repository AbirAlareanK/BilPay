import { UseFormElement } from '../../../../Utils/Context/FormProvider'
import Classes from '../FormElements.module.scss'

const Input = ({ field_hasError , field_focus, field_type ,field_id, field_label, field_placeholder, field_value }) => {
    
    const { HandleBlur , HandleChange } = UseFormElement();
   
    const HandleInputBlur = () => {
        HandleBlur(field_id)
    }
    return (
        <div className={field_hasError ? `${Classes.formControl} ${Classes.invalid}` : `${Classes.formControl}`}>
            <label>{field_label}</label>
            <input type={field_type}
                className={field_focus && Classes.autoFucosEffect }  
                placeholder={field_placeholder ? field_placeholder : ''}
                readOnly={field_focus}
                value={field_value}
                onBlur={HandleInputBlur}
                onChange={event => HandleChange(field_id , event)}
            />
        </div>
    )
}

export default Input
