import instance from "./instance"



const usersAPI = {
	async getUsers(UsersCount, PageNumber){
		const response = await instance.get(`users?count=${UsersCount}&page=${PageNumber}`);
		return response.data;
	}
}


export default usersAPI;