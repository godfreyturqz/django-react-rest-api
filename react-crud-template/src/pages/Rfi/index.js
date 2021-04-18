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
    }, [ApiClass])

    const ApiPostReq = (formData) => {
        return ApiClass.rfi('POST', '', formData)
    }
    

    return (
        <>
            <Form inputs={FORM_INPUTLIST} ApiPostReq={ApiPostReq}/>
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
                        <td><EditBtn {...res}/></td>
                        <td><DeleteBtn {...res}/></td>
                    </tr>
                )
            } 
            </Table>
        </>
    )
}

export default Rfi
