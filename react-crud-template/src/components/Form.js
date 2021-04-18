import Input from './Element/Input'
import useForm from '../utils/useForm'

const Form = (props) => {

    const { formData, handleInputChange, handleFormSubmit } = useForm(props)

    const FORM_INPUTLIST = props.inputs

    return (
        <form onSubmit={handleFormSubmit}>
            { FORM_INPUTLIST && FORM_INPUTLIST.map(attribute =>
                <Input
                    key={attribute.id}
                    handleInputChange={handleInputChange}
                    value={formData[attribute.name] ? formData[attribute.name] : ''}
                    {...attribute}
                />
            )}
            <br/>
            <button className="btn btn-primary">Submit</button>
        </form>
    )
}

export default Form
