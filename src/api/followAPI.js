import instance from "./instance"



const followAPI = {
	follow(userId){
		return instance.post(`follow/${userId}`);
	},

	unFollow(userId){
		return instance.delete(`follow/${userId}`);
	}
}


export default followAPI;