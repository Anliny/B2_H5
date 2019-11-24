<script>
	// document.body.addEventListener('touchmove', function (e) {
	//     e.preventDefault(); 
	// }, {passive: false}); 
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import url("./assets/common.css");
</style>
