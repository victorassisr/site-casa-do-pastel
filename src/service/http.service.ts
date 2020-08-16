import axios from 'axios';

export default class HttpService {

    constructor() {
        if (localStorage.getItem('token')) {
            this.token = localStorage.getItem('token');
        }
    }

    baseUrl: string = 'http://localhost:3000';
    token: string;

    async post(endpoint: string, data?: any): Promise<any> {
        try {
            return (await axios.post(`${this.baseUrl}${endpoint}`, data, {
                headers: {
                    Authorization: `Bearer ${this.token}`,
                },
            })).data;
        } catch (err) {
            console.log(err.message);
        }
    }

    async get(endpoint: string, params?: any): Promise<any> {
        try {
            return (await axios.get(`${this.baseUrl}${endpoint}`, {
                params,
                headers: {
                    Authorization: `Bearer ${this.token}`,
                },
            })).data;
        } catch (err) {
            console.log(err.message);
        }
    }

    setToken(token: string): void {
        this.token = token;
    }
}