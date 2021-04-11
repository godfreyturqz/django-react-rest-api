import { useState } from 'react'
import { api } from '../services/api'

const Form = () => {

    const initialState = {}
    const [formData, setFormData] = useState(initialState)

    const handleFormSubmit = (e) => {
        e.preventDefault()
        try {
            api('POST', '', formData)
            .then(() => setFormData(initialState))
            .then(() => window.location.assign('/'))
            .catch(error => console.log(error))
        } catch (error) {
            console.log(error)
        }
    }

    const handleInputChange = (e) => {
        setFormData({
        ...formData,
        [e.target.name]: e.target.value
        })
    }
    
    const inputList = [
        {
            label: 'Name',
            id_and_name: 'name'
        },
        {
            label: 'Contact',
            id_and_name: 'contact'
        }
    ]

    return (
        <form onSubmit={handleFormSubmit}>
            <div className="form-group">
                <label htmlFor="input1">Name</label>
                <input type="text" className="form-control" id="input1" onChange={handleInputChange} name="name" value={formData.name ? formData.name : ''} autoComplete="off"/>
            </div>
            <div className="form-group">
                <label htmlFor="input2">Contact</label>
                <input type="text" className="form-control" id="input2" onChange={handleInputChange} name="contact" value={formData.contact ? formData.contact : ''} autoComplete="off"/>
            </div>
            <br/>
            <button className="btn btn-primary">Submit</button>
        </form>
    )
}

const Input = (props) => {
    
    return (
        <div className="form-group">
            <label htmlFor={props.id_and_name}>{props.label}</label>
            <input 
                type="text" 
                className="form-control" 
                autoComplete="off"
                id={props.id_and_name} 
                onChange={props.handleInputChange} 
                name={props.id_and_name}
                // value={props.formData.contact ? formData.contact : ''} 
            />
        </div>
    )
}


export default Form
