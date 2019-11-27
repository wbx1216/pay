<template>
	<div style="text-align: center;">
		<div class="head" style=" margin:0px 13px;"><img src="@/assets/back.png" @click="$router.back(-1)">
			<div class="title">免会员广告</div>
		</div>
		<img src="../assets/success.png" style="width:70px;margin:25px auto 10px auto">
		<div style="font-size:18px;margin-bottom: 20px;">支付成功</div>
		<div style="color:#424242">正在激活免广告会员...<span style="color:#ff6e03">（ {{count}}s ）</span></div>
		<div style="color:#424242">请勿离开页面，激活成功将自动为您跳转</div>
	</div>
</template>
<script>
	export default {
		name: "success",
		data() {
			return {
				count: 5
			}
		},
	    created(){
		 this.goGrdoupRecor()
		},
		methods: {
			goGrdoupRecor() {
				const TIME_COUNT = 5;
				if (!this.timer) {
					this.count = TIME_COUNT;
					this.timer = setInterval(() => {
						if (this.count > 0 && this.count <= TIME_COUNT) {
							this.count--;
						} else {
							clearInterval(this.timer);
							this.timer = null;
							this.$router.push("./") 
						}
					}, 1000)
				}
			},

		},
		 

	}
</script>
<style scoped lang="less">
	.head {
		height: 45px;
		line-height: 45px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		position: relative;

		img {
			width: 10px;
		}

		.title {
			font-size: 16px;
			color: #191919;
			text-align: center;
			position: absolute;
			width: 50%;
			left: 25%;
		}
	}
</style>
