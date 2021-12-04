import Checkbox from './elements/Checkbox';
import Input from './elements/Input';
import Select from './elements/Select';
import File from './elements/File';
import Textarea from './elements/Textarea';

const FormElement = ({ field: { field_cols , field_rows ,field_type ,field_element, field_id, field_label, field_placeholder, field_value, field_options } }) => {

    switch (field_element) {
        case 'input':
            return (<Input
                field_id={field_id}
                field_label={field_label}
                field_placeholder={field_placeholder}
                field_value={field_value}
                field_type={field_type}
            />)
        case 'select':
            return (<Select
                field_id={field_id}
                field_label={field_label}
                field_placeholder={field_placeholder}
                field_value={field_value}
                field_options={field_options}
            />)
        case 'textarea':
            return (<Textarea
                field_id={field_id}
                field_label={field_label}
                field_placeholder={field_placeholder}
                field_value={field_value}
                field_cols={field_cols}
                fields_rows={field_rows}
            />)
        case 'checkbox':
            return (<Checkbox
                field_id={field_id}
                field_label={field_label}
                field_value={field_value}
            />)
        case 'file':
            return (<File
                field_id={field_id}
                field_label={field_label}
                field_value={field_value}
            />)

        default:
            return null;
    }


}

export default FormElement;
