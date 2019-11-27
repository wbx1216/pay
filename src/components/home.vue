<template>
	<div style="padding-bottom:50px">
		<div style=" margin:0px 13px;">
			<div class="head">
				<img src="@/assets/back.png">
				<div class="title">免广告会员</div>
				<router-link to="/record" class="record">购买记录</router-link>
			</div>
			<div class="banner" :class="{vip:vip}">
				<div style="display: flex;align-items: flex-end;margin-bottom: 10px;" v-if="vip">
					<img src="@/assets/icon1.png" style="width:70px;margin-left: 20px;">
					<div class="msg">您的会员将于<span>2020-02-15</span>到期</div>
				</div>
				<div v-else style="margin-left: 20px;margin-bottom: 10px;color:#FFF;">
					未开通免广告会员
				</div>
				<div style="display: flex;align-items: flex-end;">
					<img src="@/assets/icon.png" style="width:30px;margin-left: 20px;">
					<div style="color:#f6bb7d;font-size: 13px;margin:0 5px;" v-if="vip">米修米修</div>
					<div style="color:#fff;font-size: 13px;margin:0 5px;" v-else>米修米修</div>
					<img src="@/assets/icon2.png" style="width: 22px;" v-if="vip">
					<img src="@/assets/icon3.png" style="width: 22px;" v-else>
				</div>
			</div>
			<div style="color:#212121;text-align: center;margin-top: 15px;">会员权益</div>
			<div class="vipList">
				<router-link :to="{path:'/banner',query:{index:index}}" v-for="(item , index) in vipList" class="item" >
					<img :src="require(`../assets/vip_icon${index}.png`)" alt="" />
					<div>{{item}}</div>
				</router-link>
				<div style="clear: both;"></div>
			</div>
		</div>
		<div class="pay">
			<div class="payList">
				<div class="item" v-for="(item , index) in payList" :class="{selected:item.selected}" @click="select(index)" >
					<div style="display: flex;align-items: center;">
						<div class="type">{{item.type}}</div>
						<div :class="classes[index]">{{item.text}}</div>
					</div>
					<div style="display: flex;align-items: center;">
						<div style="color:#949494;font-size: 13px;text-decoration: line-through;margin-right: 5px;">{{item.old}}</div>
						<div style="color:#fe6c07;font-size:19px;"> {{item.new}}</div>
					</div>
				</div>
			</div>
		</div>
		<div style="padding:20px 10px;border-bottom: 5px #f5f5f5 solid;">
			<div style="margin-bottom: 15px;">温馨提示：</div>
			<div style="color:#a4a4a6;font-size:13px;margin-bottom: 10px;">1.
				若开通免广告会员后10分钟内标识仍然没有点亮，请退出账号后重新登录进行尝试，或联系客服QQ：310372207</div>
			<div style="color:#a4a4a6;font-size:13px;margin-bottom: 10px;">2. 开通免广告会员则默认您已阅读并同意小狸免费小说《小狸用户协议》、《隐私权政策》、《版权声明》。</div>
			<div style="color:#a4a4a6;font-size:13px;">3. 会员服务一经开通，即定完成，鉴于该网络服务性质特殊属于不宜退货的商品，不适用无理由退换规定。</div>
		</div>
		<div style="padding-left: 10px;display: flex;justify-content: space-between;align-items: center;position:fixed;bottom:0;background:#FFF;width:100%">
			<div style="display: flex;align-items: center;font-size:15px;">
				<div style="color:#141414;line-height: 50px;">总计<span style="color:#fe6c07;margin-left: 5px;">{{dollar}}</span></div>
				<img src="../assets/wxPay.png" style="width: 25px;margin:0 15px">
				<div style="color:#141414;line-height: 50px;">微信支付</div>
			</div>
			<div class="button">立即开通</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'home',
		data() {
			return {
				vip: true,
				dollar: "0",
				vipList: ['全场免广告', '首次开通礼', '额外金币', '提现优先审核', '尊贵标识', '音量键翻页', '敬请期待'],
				classes: ["day1", "day2", "", "day4"],
				payList: [{
					type: "1天",
					new: "￥0.5",
					text: "低价体验机会",
					selected: true
				}, {
					type: "1个月",
					old: "￥10",
					new: "￥6",
					text: "限时优惠",
					selected: false
				}, {
					type: "6个月",
					old: "￥60",
					new: "￥30",
					selected: false
				}, {
					type: "12个月",
					old: "￥120",
					new: "￥36",
					text: "仅需0.3元/天",
					selected: false
				}]
			}
		},
		created() {
			this.dollar = this.payList[0].new
		},
		methods: {
			select(index) {
				this.payList.forEach(item => {
					item.selected = false;
				})
				this.payList[index].selected = true;
				this.dollar = this.payList[index].new
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
 
	.head {
		height: 45px;
		line-height:45px;
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

		.record {
			font-size: 13px;
			color: #999999;
			text-decoration: none;
		}
	}

	.banner {
		width: 100%;
		height: 60px;
		border-radius: 20px;
		background-image: url(../assets/unvip.png);
		background-size: 100% 100%;
		padding: 15px 0px;
		background-repeat: no-repeat;
	}

	.vip {
		background-image: url(../assets/vip.png);
	}

	.msg {
		color: #FFF;
		font-size: 12px;
		margin-left: 10px;

		span {
			color: #f2c193;
		}
	}

	.vipList {
		margin: 20px 0px;

		.item {
			width: 25%;
			float: left;
			margin: 10px auto;

			img {
				width: 38px;
				margin: 0px auto 5px auto;
				box-shadow: 0px 3px 14.25px 0.75px rgba(233, 198, 99, 0.19);
				height: 38px;
				border-radius: 50%;
			}

			div {
				color: #212121;
				font-size: 12px;
				text-align: center;
			}
		}
	}

	.pay {
		border-top: 9px #f5f5f5 solid;
		border-bottom: 9px #f5f5f5 solid;
		padding: 15px;

		.payList {
			border: 1px solid #f5f5f5;
			border-radius: 20px;

			.item {
				display: flex;
				justify-content: space-between;
				align-items: center;
				height: 47px;
				border: 2px solid #FFF;
				padding: 0px 20px;
				border-radius: 10px;

				.type {
					width: 80px;
				}

				.day1 {
					color: #949494;
					font-size: 12px;
				}

				.day2 {
					color: #fff;
					font-size: 12px;
					background: #ff5a5a;
					line-height: 20px;
					border-radius: 2px;
					padding: 0 5px;
				}

				.day4 {
					color: #ff5a5a;
					font-size: 12px;
				}
			}

			.selected {
				border: 2px solid #ff6e03;
				background-image: url(../assets/selected.png);
				background-repeat: no-repeat;
				background-size: 22px 20px;
				background-position: 100% 100%;
			}
		}
	}

	.button {
		background: #ff9307;
		color: #FFF;
		line-height: 50px;
		width: 140px;
		text-align: center;
	}
</style>
