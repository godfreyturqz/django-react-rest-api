import { useState, useEffect } from 'react'
import { api } from '../services/api'
import EditBtn from './EditBtn'
import DeleteBtn from './DeleteBtn'

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
                            <td><EditBtn {...res}/></td>
                            <td><DeleteBtn {...res}/></td>
                        </tr>
                    )
                }  
            </tbody>
        </table>
    )
}

export default Table
