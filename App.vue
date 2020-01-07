<script>
	// document.body.addEventListener('touchmove', function (e) {
	//     e.preventDefault(); 
	// }, {passive: false}); 
	export default {
		onLaunch: function() {
			console.log(document.body.clientWidth);
			// if(document.body.clientWidth > 750){
			// 	document.body.clientWidth = 750
			// }
		},
		onShow: function() {
		},
		onHide: function() {
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import url("./assets/common.scss");
</style>
