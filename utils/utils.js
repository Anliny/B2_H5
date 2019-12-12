
const utils = {
	/**
	 *   头像放大
	 * */
	fullImage(data) {
		var current = data.target.dataset.src
		uni.previewImage({
			current: current,
			urls: [current]
		})
	},
	// 身份证验证
	checkIdCard(idcard) {
		const regIdCard = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
		if (!regIdCard.test(idcard)) {
			uni.showToast({
				title: "身份证号码错误",
				icon: "none"
			})
			return false;
		} else {
			return true;
		}
	},
	// 根据省份证获取出生年月日
	getBirthday(idCard) {
		var birthday = "";
		if (idCard != null && idCard != "") {
			if (idCard.length == 15) {
				birthday = "19" + idCard.substr(6, 6);
			} else if (idCard.length == 18) {
				birthday = idCard.substr(6, 8);
			}
			birthday = birthday.replace(/(.{4})(.{2})/, "$1-$2-");
		}
		return birthday;
	},
	// 身份证号码提取性别
	getSex(idCard) {
		if (idCard != null && idCard != "") {
			if (parseInt(idCard.substr(16, 1)) % 2 == 1) {
				return 1 //男
			} else {
				return 2 //女
			}
		}
	},
	// 身份证号码获取年龄
	getAge(idCard) {
		if (idCard != null && idCard != "") {
			//获取年龄
			var myDate = new Date();
			var month = myDate.getMonth() + 1;
			var day = myDate.getDate();
			var age = myDate.getFullYear() - idCard.substring(6, 10) - 1;
			if (idCard.substring(10, 12) < month || idCard.substring(10, 12) == month && idCard.substring(12, 14) <=
				day) {
				age++;
			}
			return age
		}
	}
}
export default utils
