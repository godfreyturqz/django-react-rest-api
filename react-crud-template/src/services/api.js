import axios from 'axios'

const API_BASE_URL = 'http://127.0.0.1:8000/api/v1'

export const api = (httpReqMethod, id = '', objectData = {}) => {

    const result = axios({
        url: `${API_BASE_URL}/${id}`,
        method: httpReqMethod,
        data: objectData
    })

    return result
}