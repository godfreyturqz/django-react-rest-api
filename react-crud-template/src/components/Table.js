// import { useState, useEffect } from 'react'
// import { api } from '../../services/api'
// import EditBtn from '../EditBtn'
// import DeleteBtn from '../DeleteBtn'
// import { COLUMN_NAMES } from './TableColumn'

const Table = (props) => {

    // const [data, setData] = useState()

    // useEffect(() => {
    //     try {
    //         const fetchData = async () => {
    //             const result = await api('GET')
    //             setData(result.data)
    //         }
    //         fetchData()
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }, [])

    const DB_TABLE_COLUMNS = props.columns
    
    return (
        <table className="table">
            <thead>
                <tr>
                    { DB_TABLE_COLUMNS && DB_TABLE_COLUMNS.map( item => <th key={item.title} scope="col">{item.title}</th> )}
                </tr>
            </thead>
            <tbody>
                {props.children}
            </tbody>
        </table>
    )
}

export default Table
