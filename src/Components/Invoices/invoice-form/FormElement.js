import Checkbox from './elements/Checkbox';
import Input from './elements/Input';
import Select from './elements/Select';
import File from './elements/File';
import Textarea from './elements/Textarea';

const FormElement = ({ field: { field_error_m , field_size, field_hasError , field_focus , field_cols , field_rows ,field_type ,field_element, field_id, field_label, field_placeholder, field_value, field_options } }) => {

    switch (field_element) {
        case 'input':
            return (<Input
                field_id={field_id}
                field_label={field_label}
                field_placeholder={field_placeholder}
                field_value={field_value}
                field_type={field_type}
                field_focus={field_focus}
                field_hasError={field_hasError}
                field_size ={field_size}
                field_error_m = {field_error_m}
            />)
        case 'select':
            return (<Select
                field_id={field_id}
                field_label={field_label}
                field_placeholder={field_placeholder}
                field_value={field_value}
                field_options={field_options}
                field_hasError={field_hasError}
                field_size ={field_size}
                field_error_m ={field_error_m}
            />)
        case 'textarea':
            return (<Textarea
                field_id={field_id}
                field_label={field_label}
                field_placeholder={field_placeholder}
                field_value={field_value}
                field_cols={field_cols}
                fields_rows={field_rows}
                field_hasError={field_hasError}
                field_error_m={field_error_m}
            />)
        case 'checkbox':
            return (<Checkbox
                field_id={field_id}
                field_label={field_label}
                field_value={field_value}
                field_error_m={field_error_m}
            />)
        case 'file':
            return (<File
                field_id={field_id}
                field_label={field_label}
                field_value={field_value}
                field_error_m={field_error_m}
            />)

        default:
            return null;
    }


}

export default FormElement;
