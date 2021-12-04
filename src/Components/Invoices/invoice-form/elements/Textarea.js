import { UseFormElement } from '../../../../Utils/Context/FormProvider'
import Classes from '../FormElements.module.scss'

const Input = ({ field_cols, field_rows , field_id, field_label, field_placeholder, field_value }) => {
    
    const { HandleChange } = UseFormElement();
    
    return (
        <div className={Classes.formControl}>
            <label>{field_label}</label>
            <textarea rows={field_rows} cols={field_cols}  
                placeholder={field_placeholder ? field_placeholder : ''}
                value={field_value}
                onChange={event => HandleChange(field_id , event)}
            />
        </div>
    )
}

export default Input
