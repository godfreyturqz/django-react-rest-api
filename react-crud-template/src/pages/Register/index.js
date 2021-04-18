import { useState, useEffect } from 'react'
import { api } from '../../services/api'
import EditBtn from '../../components/EditBtn'
import DeleteBtn from '../../components/DeleteBtn'
// structure
import Form from '../../components/Form'
import Table from '../../components/Table'
// dynamic input and data
import { DB_TABLE_COLUMNS } from './DB_TABLE_COLUMNS'
import { FORM_INPUTLIST } from './FORM_INPUTLIST'

const Register = () => {

    const [fetchedData, setFetchedData] = useState()

    useEffect(() => {
        try {
            const fetchData = async () => {
                const result = await api('GET')
                setFetchedData(result.data)
            }
            fetchData()
        } catch (error) {
            console.log(error)
        }
    }, [])

    return (
        <>
            <Form inputs={FORM_INPUTLIST} />
            <Table columns={DB_TABLE_COLUMNS} >
            {
                fetchedData && fetchedData.map( res =>
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
            </Table>
        </>
    )
}

export default Register
