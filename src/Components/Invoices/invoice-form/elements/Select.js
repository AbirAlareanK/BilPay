import { UseFormElement } from '../../../../Utils/Context/FormProvider'
import Classes from '../FormElements.module.scss'

const Select = ({ field_error_m , field_hasError , field_id, field_label, field_options }) => {
    
    const { HandleBlur , HandleChange } = UseFormElement();

    const HandleSelectBlur = () => {
        HandleBlur(field_id)
    }
    
    return (
        <div className={field_hasError ? `${Classes.formControl} ${Classes.invalid}` : `${Classes.formControl}`}>
            <label >{field_label} {field_hasError && <p>{field_error_m}</p>}</label>
            <select
                onChange={event => HandleChange(field_id, event)}
                onBlur={HandleSelectBlur}
                defaultValue={field_label} >
                <option disabled>{field_label}</option>
                {field_options.length > 0 && field_options.map((option, i) =>
                    <option value={option.option_label} key={i}>{option.option_label}</option>
                )}
            </select>
        </div>
    )
}

export default Select
