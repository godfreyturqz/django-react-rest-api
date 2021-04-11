import Input from './Element/Input'
import useForm from '../utils/useForm'

const Modal = (props) => {

    const initialState = props
    const { formData, handleInputChange, handleUpdate } = useForm(initialState)

    const FORM_INPUT_ELEMENTS = [
        { label: 'Name', id: 'name', name: 'name' },
        { label: 'Contact', id: 'contact', name: 'contact' }
    ]

    return (
        <ModalParent
            id={props.id}
            handleUpdate={handleUpdate}
            modalId={props.modalId}
        >
            { FORM_INPUT_ELEMENTS.map(attribute =>
                <Input
                    key={attribute.id}
                    handleInputChange={handleInputChange}
                    value={formData[attribute.name] ? formData[attribute.name] : ''}
                    {...attribute}
                />
            )}
        </ModalParent>
    )
}

const ModalParent = (props) => {

    const id = props.id
    const handleUpdate = props.handleUpdate
    const MODAL_ID = props.modalId

    const MODAL_TITLE = 'Edit'
    const BTN_NAME_1 = 'Close'
    const BTN_NAME_2 = 'Save changes'
    
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
                        <button type="button" className="btn btn-primary" onClick={() => handleUpdate(id)}>{BTN_NAME_2}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal
