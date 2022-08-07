import axios from 'axios';



const instance = axios.create({
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	withCredentials: true,
	headers:{'API-KEY': '27d4398c-703e-4c30-a5c4-e527a9ae1597'},
});


export default instance;