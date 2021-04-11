import { useState } from 'react'
import { api } from '../services/api'

const useForm = (initialState = {}) => {

    const [formData, setFormData] = useState(initialState)

    const handleInputChange = (e) => {
        setFormData({
        ...formData,
        [e.target.name]: e.target.value
        })
    }

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

    const handleUpdate = (id) => {
        try {
            api('PUT', id + '/', formData)
            .then(() => window.location.assign('/'))
            .catch(error => console.log(error))
        } catch (error) {
            console.log(error)
        }
    }

    const handleDelete = (id) => {
        try {
            api('DELETE', id)
            .then(() => window.location.assign('/'))
            .catch(error => console.log(error))
        } catch (error) {
            console.log(error)
        }
    }

    return { formData, handleInputChange, handleFormSubmit, handleUpdate, handleDelete }
}

export default useForm
