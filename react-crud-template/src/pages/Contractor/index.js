import { useState, useEffect, useCallback, useMemo } from 'react'
import { ApiRequest } from '../../services/ApiV2'
// structure
import Form from '../../components/Form'
import Table from '../../components/Table'
// components
import EditBtn from '../../components/EditBtn'
import DeleteBtn from '../../components/DeleteBtn'
// constants
import { FORM_INPUTLIST } from './FORM_INPUTLIST'
import { DB_TABLE_COLUMNS } from './DB_TABLE_COLUMNS'


const Contractor = () => {

    const [fetchedData, setFetchedData] = useState()

    const ApiClass = useMemo(() => new ApiRequest(), [])

    const apiGetReq = useCallback(() => {
        return ApiClass.contractor('GET')
    }, [ApiClass])

    const apiPostReq = useCallback((formData) => {
        return ApiClass.contractor('POST', '', formData)
    }, [ApiClass])

    const apiUpdateReq = useCallback((id, formData) => {
        return ApiClass.contractor('PUT', id + '/', formData)
    }, [ApiClass])

    const apiDelReq = useCallback((id) => {
        return ApiClass.contractor('DELETE', id)
    }, [ApiClass])

    useEffect(() => {
        try {
            const fetchData = async () => {
                const result = await apiGetReq()
                setFetchedData(result.data)
            }
            fetchData()
        } catch (error) {
            console.log(error)
        }
    }, [apiGetReq])

    return (
        <>
            <Form inputs={FORM_INPUTLIST} apiPostReq={apiPostReq}></Form>
            <Table columns={DB_TABLE_COLUMNS}>
                {
                    fetchedData && fetchedData.map( res => 
                        <tr key={res.id}>
                            <td>{res.id}</td>
                            <td>{res.company}</td>
                            <td>{res.category}</td>
                            <td>{res.specialty}</td>
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

export default Contractor
