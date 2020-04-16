<template>
	<div>
		<div class="head" style=" margin:0px 13px;">
			<a href="javascript:history.back(-1)" style="width:100px;height: 100%;display: flex;align-items: center;position: absolute;z-index: 9;"><img src="@/assets/back2.png" ></a>
			<div class="title">购买记录</div>
		</div>
		<div style="height:9px;background: #f5f5f5;width:100%"></div>
		<div>
			<div v-for="item in record" class="item">
				<div class="msg">
					<div style="font-weight: bold;">{{item.title}}</div>
					<span>购买时间：{{item.time}}</span>
				</div>
				<div class="num"> ￥{{item.price}}</div>
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
				record: []
			}
		},
		created() {
			this.$axios.get("member/api/purchaseRecords.htm?userId=" + this.$route.query.userId).then((res) => {
				console.log(res.data.data)
				this.record=res.data.data
			})
		}
	}
</script>
<style scoped lang="less">
	.head {
		height: 45px;
		line-height: 45px; 
		position: relative; 
		text-align: center;
		img {
			width: 10px; 
			position: absolute; 
		}

		.title {
			font-size: 17px;
			color: #191919; 
		}
	}

	.item {
		width: 90%;
		margin: 0 auto;
		padding: 15px 0px;
		border-bottom: 1px solid #eee;

		.msg {
			float: left;
			font-size: 15px;

			span {
				color: #666;
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
