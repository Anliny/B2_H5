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
	{val:4,label:'钻石会员'},
	{val:5,label:'黑卡会员'}
]
// 婚配信息
const marrys = [
	{val:'',label:'请选择婚姻状况'},
	{val:1,label:'未婚'},
	{val:2,label:'离异'},
	{val:3,label:'丧偶'},
	{val:4,label:'保密'}
]

// 是否有小孩
const isChilds = [
	{val:'',label:'请选择是否有小孩'},
	{val:0,label:'有'},
	{val:1,label:'无'},
	{val:2,label:'保密'},
]
// 收入
const isIncomes = [
	{val:'',label:'请选择收入'},
	{val:'1',label:'低于5000'},
	{val:'2',label:'5000-8000元'},
	{val:'3',label:'8000-10000元'},
	{val:'4',label:'10000-15000元'},
	{val:'5',label:'15000元以上'}
]
// housing  住房情况
const isHousings = [
	{val:'',label:'请选择住房情况'},
	{val:'1',label:'和父母一起'},
	{val:'2',label:'独立住房,有贷款'},
	{val:'3',label:'独立住房,无贷款'},
	{val:'4',label:'没有'}
]

// 是否有车 vehicle
const isVehicles = [
	{val:'',label:'请选择是否有车'},
	{val:'1',label:'有,全款购车'},
	{val:'2',label:'有,按揭购车'},
	{val:'3',label:'准备购买'},
	{val:'4',label:'没有'}
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

export {heights,years,educations,Vips,marrys,jobYars,activeUser,isChilds,isIncomes,isHousings,isVehicles}