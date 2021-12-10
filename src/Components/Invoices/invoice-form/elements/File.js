import { UseFormElement } from '../../../../Utils/Context/FormProvider'
import Classes from '../FormElements.module.scss'

const File = ({ field_type , field_id, field_label, field_placeholder, field_value }) => {
    const { HandleChange } = UseFormElement();
    return (
        <div className={Classes.formControl}>
            <label>{field_label}</label>
            <input type={field_type}
                placeholder={field_placeholder ? field_placeholder : ''}
                value={field_value}
                onChange={event => HandleChange(field_id, event)}
            />
        </div>
    )
}

export default File;
