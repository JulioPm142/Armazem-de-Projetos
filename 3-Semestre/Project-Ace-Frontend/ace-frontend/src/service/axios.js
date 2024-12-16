import axios from 'axios'


const USERS_GET_URL = 'http://localhost:8080/Cliente';


class UserService {

    getUsers(){
        return axios.get(USERS_GET_URL);
    }
    createUsers(){
        return axios
    }
}

export default new UserService();