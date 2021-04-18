import axios from 'axios'

const API_BASE_URL = 'http://127.0.0.1:8000/api/v1'

export const api = (httpReqMethod, id = '', objectData = {}) => {

    const config = {
        url: `${API_BASE_URL}/register/${id}`,
        method: httpReqMethod,
        data: objectData
    }

    const response = axios(config)

    return response
}