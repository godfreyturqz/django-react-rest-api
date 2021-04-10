import { useState, useEffect } from 'react'
import { api } from '../services/api'

const Table = () => {

    const [data, setData] = useState()

    useEffect(() => {
        try {
            const fetchData = async () => {
                const result = await api('GET')
                setData(result.data)
            }
            fetchData()
        } catch (error) {
            console.log(error)
        }
    }, [])
    
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Contact</th>
                    <th scope="col">Date</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                {
                    data && data.map( res =>
                        <tr key={res.id}>
                            <th scope="row">{res.id}</th>
                            <td>{res.name}</td>
                            <td>{res.contact}</td>
                            <td>{res.created_at}</td>
                            <td><DeleteButton {...res}/></td>
                        </tr>
                    )
                }  
            </tbody>
        </table>
    )
}

const DeleteButton = (props) => {

    const handleDelete = (id) => {
        try {
            const fetchData = async () => {
                await api('DELETE', id)
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
        >X</button>
    )
}


export default Table
