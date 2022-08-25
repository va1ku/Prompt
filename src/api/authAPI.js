import instance from "./instance";

const authAPI = {
	async auth(){
		const response = await instance.get(`auth/me`);
		return response.data;
	},

	async login(email,password,rememberMe,captcha = null){
		const response = await instance.post('auth/login',{email,password,rememberMe,captcha})
		return response.data
	},

	async logout(){
		const response = await instance.delete('auth/login')
		return response.data
	},
	async getCaptcha(){
		return await (await instance.get(`/security/get-captcha-url`)).data;
	}
}


export default authAPI;