import { useState } from 'react'
import { api } from '../services/api'

const Modal = (props) => {

    const initialState = props
    const [formData, setFormData] = useState(initialState)

    const handleFormSubmit = (id) => {
        try {
            api('PATCH', id, formData)
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

    return (
        <ModalComponent
            modalId={props.modalId}
            handleFormSubmit={handleFormSubmit}
        >
            {JSON.stringify(formData)}
            <div className="form-group">
                <label htmlFor="input1">Name</label>
                <input type="text" className="form-control" id="input1" onChange={handleInputChange} name="name" value={formData.name ? formData.name : ''} autoComplete="off"/>
            </div>
            <div className="form-group">
                <label htmlFor="input2">Contact</label>
                <input type="text" className="form-control" id="input2" onChange={handleInputChange} name="contact" value={formData.contact ? formData.contact : ''} autoComplete="off"/>
            </div>
        </ModalComponent>
    )
}

const ModalComponent = (props) => {

    const MODAL_ID = props.modalId
    const MODAL_TITLE = 'Edit'
    const BTN_NAME_1 = 'Close'
    const BTN_NAME_2 = 'Save changes'

    const handleFormSubmit = props.handleFormSubmit

    return (
        <div className="modal fade" id={MODAL_ID} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">{MODAL_TITLE}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        {props.children}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">{BTN_NAME_1}</button>
                        <button type="button" className="btn btn-primary" onClick={() => handleFormSubmit(props.id)}>{BTN_NAME_2}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Modal
