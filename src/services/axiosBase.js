import axios from 'axios';

const SERVER_URL = 'http://localhost:8080/v1/'

export class AxiosBase {
    
    async HttpRequest(apiUrl,method,body,contentType) {
        let options = {
            method:method,
            url: SERVER_URL + apiUrl

        }
        if (body) {
            options.headers = {
                'Content-Type': contentType
            };
            options.data = body;
        }
        return axios(options).then(res => {
            if (res && res.data) {
                return res.data;
            }
            return null;
        })
    }
    
    async HttpPost(apiUrl, body, contentType = 'application/json') {
        return this.HttpRequest(apiUrl,'POST',body, contentType);
    }
    
    async HttpPut(apiUrl, body, contentType = 'application/json') {
        return this.HttpRequest(apiUrl,'PUT',body,contentType);
    }
    
    async HttpGet(apiUrl) {
        return this.HttpRequest(apiUrl,'GET');
    }
    
}