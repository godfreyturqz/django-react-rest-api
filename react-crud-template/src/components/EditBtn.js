import Modal from './Modal'

const EditBtn = (props) => {

    const MODAL_ID = 'modal' + props.id

    return (
        <div>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#`+ MODAL_ID}>
                Edit
            </button>
            <Modal modalId={MODAL_ID} {...props}/>
        </div>
    )
}

export default EditBtn
