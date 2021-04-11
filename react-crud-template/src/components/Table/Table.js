import { useState, useEffect } from 'react'
import { api } from '../../services/api'
import EditBtn from '../EditBtn'
import DeleteBtn from '../DeleteBtn'
import { COLUMN_NAMES } from './TableColumn'

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
                    { COLUMN_NAMES.map( item => <th key={item.title} scope="col">{item.title}</th> )}
                </tr>
            </thead>
            <tbody>
                { data && data.map( res =>
                    <tr key={res.id}>
                        <td>{res.id}</td>
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
