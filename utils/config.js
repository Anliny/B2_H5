const appRequest = {
    baseRequest(obj) {
        try {
            const userToken = uni.getStorageSync('token');
            if (userToken) {
                if (obj.header) {
                    obj.header["Authorization"] = userToken;
                } else {
                    obj.header = { "Authorization": userToken };
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