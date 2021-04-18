import useForm from '../utils/useForm'

const DeleteBtn = (props) => {

    const { handleDelete } = useForm(props)
    
    return(
        <button className='btn btn-danger shadow-none' onClick={() => handleDelete(props.id)}>
            Delete
        </button>
    )
}

export default DeleteBtn
