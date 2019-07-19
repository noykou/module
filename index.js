const { get }= require("superagent");
const baseURL = "https://noykou.glitch.me/api/v1/";
 
module.exports = {
	async getImage(endpoint, options){
		return new Promise(async(resolve, reject) => {
			const { body } = await get(`${baseURL}${endpoint}?username=${options.username.toLowerCase())}&url=${options.url}&text=${options.text}&message=${options.message}&back=${options.back}&style=${options.style}&roundcolor=${options.roundcolor}&textcolor=${options.textcolor}`)
			resolve(body);
		});
	}
}
