import Input from './Element/Input'
import useForm from '../utils/useForm'

const Form = () => {

    const { formData, handleInputChange, handleFormSubmit } = useForm()
    
    const FORM_INPUT_ELEMENTS = [
        { label: 'Name', id: 'name', name: 'name' },
        { label: 'Contact', id: 'contact', name: 'contact' }
    ]

    return (
        <form onSubmit={handleFormSubmit}>
            { FORM_INPUT_ELEMENTS.map(attribute =>
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
