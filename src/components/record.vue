<template>
	<div>
		<div class="head" style=" margin:0px 13px;"><img src="@/assets/back.png" @click="$router.back(-1)">
			<div class="title">购买记录</div>
		</div>
		<div style="height:9px;background: #f5f5f5;width:100%"></div>
		<div>
			<div v-for="item in record" class="item">
				<div class="msg">
					<div>开通尊贵免广告会员：{{item.day}}</div>
					<span>购买时间：{{item.time}}</span>
				</div>
				<div class="num"> ￥{{item.num}}</div>
				<div style="clear: both;"></div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		name: "record",
		data() {
			return {
				record: [{
					day: '12个月',
					num: "36",
					time: "2019-11-25 9:25:36"
				}, {
					day: '1个月',
					num: "30",
					time: "2019-11-25 9:25:36"
				}, {
					day: '6个月',
					num: "30",
					time: "2019-11-25 9:25:36"
				}]
			}
		}
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

	.item {
		width: 90%;
		margin: 0 auto;
		padding: 15px 0px;
		border-bottom: 1px solid #eee;
		
		.msg {
			float: left;
			font-size:15px;
			span{
				color:#949494;
				font-size: 12px;
			}
		}

		.num {
			float: right;
			color: rgb(254, 108, 7);
			font-size: 19px;
		}
	}
</style>
