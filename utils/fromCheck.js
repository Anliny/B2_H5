// 身高列表
const heights = function(){
	let heightList = ["请选择身高"];
	for(let i = 140;i<=240;i++){
		heightList.push(`${i}`)
	}
	return heightList
}()
// 年龄
const years = function(lowYear,heightYear){
	let yearList = ["请选择年龄"];
	for(let i = lowYear;i<=heightYear;i++){
		yearList.push(`${i}`)
	}
	return yearList
}(18,60)
// 学历
const educations = ["请选择学历",'小学',"初中","高中","全日制专科","全日制本科","硕士研究生","博士研究生"]
// 会员等级
const Vips = [
	{val:1,label:'普通会员'},
	{val:2,label:'银卡会员'},
	{val:3,label:'金卡会员'},
	{val:4,label:'砖石会员'},
	{val:5,label:'黑卡会员'}
]
// 婚配信息
const marrys = [
	{val:'',label:'请选择婚姻状况'},
	{val:1,label:'未婚'},
	{val:2,label:'离异'},
	{val:3,label:'丧偶'}
]
// 工作年限
const jobYars = function(lowYear,heightYear){
	let jobList = ["请选择工作年限"];
	for(let i = lowYear;i<=heightYear;i++){
		jobList.push(`${i}`)
	}
	return jobList
}(1,20)

// 活动人数选择
const activeUser = function(lowUser,heightUser){
	let jobList = ["请选择活动人数"];
	for(let i = lowUser;i<=heightUser;i++){
		jobList.push(`${i}`)
	}
	return jobList
}(1,100)

export {heights,years,educations,Vips,marrys,jobYars,activeUser}