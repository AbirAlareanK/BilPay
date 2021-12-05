import { UseFormElement } from '../../../../Utils/Context/FormProvider'
import Classes from '../FormElements.module.scss'

const Checkbox = ({ field_type ,field_id, field_label, field_value }) => {
   
    const { HandleChange } = UseFormElement()

    return (
        <div className={Classes.formControl}>
            <input type={field_type} checked={field_value}
                onChange={event => HandleChange(field_id, event)}
            />
            <label>{field_label}</label>
        </div>
    )
}

export default Checkbox
