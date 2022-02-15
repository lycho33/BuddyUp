import axios from 'axios';

export const addUser = (data, handleSuccess) => (dispatch) => {
    axios
        .post(
            'http://localhost:3001/users'
        )
}