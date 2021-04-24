import axios from 'axios'

export class ApiRequest {
    constructor(){
        this.API_BASE_URL = 'http://127.0.0.1:8000/api/v1'
    }

    register(httpReqMethod, id = '', objectData = {}){
        return axios({
            url: `${this.API_BASE_URL}/register/${id}`,
            method: httpReqMethod,
            data: objectData
        })
    }

    rfi(httpReqMethod, id = '', objectData = {}){
        return axios({
            url: `${this.API_BASE_URL}/rfi/${id}`,
            method: httpReqMethod,
            data: objectData
        })
    }

    contractor(httpReqMethod, id = '', objectData = {}){
        return axios({
            url: `${this.API_BASE_URL}/contractor/${id}`,
            method: httpReqMethod,
            data: objectData
        })
    }
}