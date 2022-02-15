import axios from 'axios';

export const loginStatus = () => {
    axios.get('http://localhost:3001/logged_in',
    {withCredentials: true})

    .then(res => {
        if(res.data.logged_in){
            this.handleLogin(res)
        } else {
            this.handleLogout()
        }
    })
    .catch(error => console.log('api errors:', error))
}
