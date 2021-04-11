import useForm from '../utils/useForm'

const DeleteBtn = (props) => {

    const { handleDelete } = useForm()
    
    return(
        <button className='btn btn-danger' onClick={() => handleDelete(props.id)}>
            Delete
        </button>
    )
}

export default DeleteBtn
