<template>
	<div style="text-align: center;">
		<div class="head" style=" margin:0px 13px;"><img src="@/assets/back2.png" @click="$router.back(-1)">
			<div class="title">升级到VIP</div>
		</div>
		<img src="../assets/success.png" style="width:70px;margin:25px auto 10px auto">
		<div style="font-size:18px;margin-bottom: 20px;">支付成功</div>
		<div style="color:#424242;font-size: 14px;margin-bottom: 5px;">正在激活免广告会员...<span style="color:#ff6e03">（ {{count}}s ）</span></div>
		<div style="color:#424242;font-size: 14px;">请勿离开页面，激活成功将自动为您跳转</div>
		<div class="bottom">·若开通免广告会员后10分钟内标识仍然没有点亮，请退出账号后重新登录进行尝试</div>
	</div>
</template>
<script>
	export default {
		name: "success",
		data() {
			return {
				count: 10
			}
		},
	    created(){
		 this.goGrdoupRecor()
		},
		methods: {
			goGrdoupRecor() {
				const TIME_COUNT =10;
				if (!this.timer) {
					this.count = TIME_COUNT;
					this.timer = setInterval(() => {
						if (this.count > 0 && this.count <= TIME_COUNT) {
							this.count--;
						} else {
							clearInterval(this.timer);
							this.timer = null;
							this.$router.push("./?userId="+this.$route.query.userId) 
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
	.bottom{
		color:#a4a4a6;
		font-size: 12px;
		position: absolute;
		bottom:20px;
		text-align: left;
		width:95%; 
		left:2.5%
	}
</style>
