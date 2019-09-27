
import axios from 'axios';
const APP_ID = "Qit_h7TFm";
const API_GATEWAY ='http://localhost:3000'

export const loginToSystem = ({email, password}) => {
    return axios.post(API_GATEWAY+ '/auth/token', {
        client_id: APP_ID,
        email,
        password,
        grant_type: 'password'
    })
};
