import { UseFormElement } from '../../../../Utils/Context/FormProvider'
import Classes from '../FormElements.module.scss'

const Select = ({ field_id, field_label, field_options }) => {
    
    const { HandleChange } = UseFormElement();

    return (
        <div className={Classes.formControl}>
            <label >{field_label}</label>
            <select
                onChange={event => HandleChange(field_id, event)}
            >
                {/* <option >Select </option> */}
                {field_options.length > 0 && field_options.map((option, i) =>
                    <option value={option.option_label} key={i}>{option.option_label}</option>

                )}
            </select>
        </div>
    )
}

export default Select
