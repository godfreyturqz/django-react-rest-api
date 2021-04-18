import { useState, useEffect } from 'react'
import { ApiRequest } from '../../services/ApiV2'
import EditBtn from '../../components/EditBtn'
import DeleteBtn from '../../components/DeleteBtn'
// structure
import Form from '../../components/Form'
import Table from '../../components/Table'
// dynamic input and data
import { DB_TABLE_COLUMNS } from './DB_TABLE_COLUMNS'
import { FORM_INPUTLIST } from './FORM_INPUTLIST'


const Rfi = () => {

    const [fetchedData, setFetchedData] = useState()

    const ApiClass = new ApiRequest()

    useEffect(() => {
        try {
            const fetchData = async () => {
                const result = await ApiClass.rfi('GET')
                setFetchedData(result.data)
            }
            fetchData()
        } catch (error) {
            console.log(error)
        }
    }, [])

    const apiPostReq = (formData) => {
        return ApiClass.rfi('POST', '', formData)
    }
    
    const apiUpdateReq = (id, formData) => {
        return ApiClass.rfi('PUT', id + '/', formData)
    }

    const apiDelReq = (id) => {
        return ApiClass.rfi('DELETE', id)
    }
    

    return (
        <>
            <Form inputs={FORM_INPUTLIST} apiPostReq={apiPostReq}/>
            <Table columns={DB_TABLE_COLUMNS} >
            {
                fetchedData && fetchedData.map( res =>
                    <tr key={res.id}>
                        <td>{res.id}</td>
                        <td>{res.rfiNumber}</td>
                        <td>{res.discipline}</td>
                        <td>{res.question}</td>
                        <td>{res.answer}</td>
                        <td>{res.created_at}</td>
                        <td><EditBtn {...res} inputs={FORM_INPUTLIST} apiUpdateReq={apiUpdateReq}/></td>
                        <td><DeleteBtn {...res} apiDelReq={apiDelReq}/></td>
                    </tr>
                )
            } 
            </Table>
        </>
    )
}

export default Rfi
