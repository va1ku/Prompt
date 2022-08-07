import instance from "./instance";

const profilesAPI = {
	async profiles(userId){
		const response = await instance.get(`profile/${userId}`,);
		return response.data;
	},
	async getStatus(userId){
		const response = await instance.get(`profile/status/${userId}`);
		return response.data;
	},

	async updateStatus(status){
		const response = await instance.put(`profile/status`,{status});
		return response.data
	}
}
	

export default profilesAPI;