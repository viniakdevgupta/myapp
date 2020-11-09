import {AxiosBase} from "./axiosBase";

const USER_BASE_URL = `user/`;

export default class UserService extends AxiosBase {
    
    getAllUsers() {
        const url = `${USER_BASE_URL}`;
        return this.HttpGet(url);
    }

    getUser(userId) {
        const url = USER_BASE_URL + userId;
        return this.HttpGet(url);
    }
    
}