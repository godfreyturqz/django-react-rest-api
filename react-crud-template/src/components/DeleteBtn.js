import { api } from '../services/api'

const DeleteBtn = (props) => {

    const BTN_NAME = 'Delete'

    const handleDelete = (id) => {
        try {
            const fetchData = () => {
                api('DELETE', id)
                .then(() => window.location.assign('/'))
                .catch(error => console.log(error))
            }
            fetchData()
        } catch (error) {
            console.log(error)
        }
    }
    
    return(
        <button 
            className='btn btn-danger'
            onClick={() => handleDelete(props.id)}
        >{BTN_NAME}</button>
    )
}

export default DeleteBtn
