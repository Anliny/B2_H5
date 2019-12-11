// 头像放大
const utils = {
	fullImage(data) {
		var current = data.target.dataset.src
		uni.previewImage({
			current: current,
			urls: [current]
		})
	}
}

export default utils
