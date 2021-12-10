import { UseFormElement } from '../../../../Utils/Context/FormProvider'
import Classes from '../FormElements.module.scss'

const Input = ({ field_error_m , field_hasError , field_cols, field_rows , field_id, field_label, field_placeholder, field_value }) => {
    
    const { HandleChange , HandleBlur } = UseFormElement();
    
    const HandleTextareaBlur = () => {
        HandleBlur(field_id)
    }
    return (
        <div className={field_hasError ? `${Classes.formControl} ${Classes.invalid}` : `${Classes.formControl}`}>
            <label>{field_label} {field_hasError && <p>{field_error_m}</p>}</label>
            <textarea rows={field_rows} cols={field_cols}  
                placeholder={field_placeholder ? field_placeholder : ''}
                value={field_value}
                onBlur={HandleTextareaBlur}
                onChange={event => HandleChange(field_id , event)}
            />
        </div>
    )
}

export default Input
