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
                uni.request(obj)
            }
            else{
                uni.showToast({
                	title:"用户信息不存在,请登录",
					icon:"none"
                })
				setTimeout(()=>{
					uni.reLaunch({
						url:'/pages/login/index',
						success() {
							uni.hideToast()
						}
					})
				},2000)
            }
        } catch (e) {
            uni.showToast({
            	title:"用户信息不存在"
            })
        } 
    }
}
export default appRequest;