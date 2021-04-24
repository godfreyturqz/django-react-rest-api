import { useState } from 'react'

const useForm = ({apiPostReq, apiDelReq, apiUpdateReq}, initialState = {}) => {

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
            apiPostReq(formData)
            .then(() => setFormData(initialState))
            .catch(error => console.log(error))
        } catch (error) {
            console.log(error)
        }
    }

    const handleUpdate = (id) => {
        try {
            apiUpdateReq(id, formData)
            .catch(error => console.log(error))
        } catch (error) {
            console.log(error)
        }
    }

    const handleDelete = (id) => {
        try {
            apiDelReq(id)
            .catch(error => console.log(error))
        } catch (error) {
            console.log(error)
        }
    }

    return { formData, handleInputChange, handleFormSubmit, handleUpdate, handleDelete }
}

export default useForm
