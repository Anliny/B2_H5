const appRequest = {
    baseRequest(obj) {
        try {
            const userToken = uni.getStorageSync('token');
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
                	title:"用户信息不存在"
                })
            }
        } catch (e) {
            uni.showToast({
            	title:"用户信息不存在"
            })
        } 
    }
}
export default appRequest;