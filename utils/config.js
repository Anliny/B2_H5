const appRequest = {
    baseRequest(obj) {
        try {
            const userToken = uni.getStorageSync('token');
			console.log(userToken.token)
            if (userToken) {
                if (obj.header) {
                    obj.header["Authorization"] = userToken.token;
                } else {
                    obj.header = { "Authorization": userToken.token };
                }
                obj.url = obj.url;
                uni.request(obj)
            }
            else{
                uni.showToast({
                	title:"没用获取到token信息"
                })
            }
        } catch (e) {
            uni.showToast({
            	title:"没用获取到token信息"
            })
        } 
    },
}
export default appRequest;