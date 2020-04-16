<template>
	<div style=" padding-bottom:50px;background: #FFF;">
		<div :class="vip==1?'vipTop':'top'">
			<div class="head">
				<img src="@/assets/back.png" @click="back()">
				<div class="title">升级到VIP</div>
				<router-link :to="{path:'/record',query:{userId:userId}}" class="record">购买记录</router-link> 
			</div>
			<div class="banner" :class="vip==1?'vip':''" @click="login">
				<img :src="require(`../assets/vip${vip}.png`)"  class="vipIcon" />
				<div style="display: flex;align-items: flex-end;margin-bottom: 20px;" v-if="vip==1">
					<div  style="margin-left:20px;color:#fff;font-weight: bold;">
						已开通VIP
					</div>
					<div class="msg">{{endTime}}到期></div>
				</div>
				<div v-else-if="vip==0" style="margin:0px 18px 12px 18px ;color:#666666;font-weight: bold;">
					未开通VIP
				</div>
				<div v-else-if="vip==2" style="margin:0px 18px 12px 18px ;color:#666666;font-weight: bold;">
					已过期
				</div>
				<div style="display: flex;align-items: center;">
					<img :src="icon" style="width:30px;margin-left: 20px;height: 30px;border-radius: 50%;">
					<div style="color:#FFFFFF;font-size: 13px;margin:0 5px;" v-if="vip==1">{{nickname}}</div>
					<div style="color:#666666;font-size: 13px;margin:0 5px;" v-else>{{nickname}}</div>
					<img src="@/assets/icon2.png" style="height: 17px;" v-if="vip==1">
					<img src="@/assets/icon3.png" style="height: 17px;" v-else>
				</div>
			</div>
		</div>
		<div style="margin:0px 13px;"> 
			<div style="color:#1a1a1a;text-align: center;margin-top: 15px;font-size: 18px;">会员权限</div>
			<div class="vipList" @click="listShow=true">
				<div v-for="(item , index) in vipList" class="item">
					<img :src="require(`../assets/vip_icon${index}.png`)" alt="" />
					<div>{{item}}</div>
				</div>
				<div style="clear: both;"></div>
			</div>
			
		</div>
		<a href="http://novel.sharelyreader.cn/?cid=856973" v-if="vip==1">
			<img src="../assets/banner.png" style="width:100%;display: block;">
		</a>
		<div class="cover" v-show="listShow"></div>
		<div class="listShow" v-show="listShow">
			<div class="title">会员权益说明</div>
			<div v-for="(item , index) in vipList" class="item">
				<img :src="require(`../assets/vip_icon${index}.png`)" alt="" />
				<div>
					<div style="font-size: 15px;">{{item}}</div>
					<div style="font-size: 12px;color:rgba(0,0,0,.6)">{{textList[index]}}</div>
				</div>
			</div>
			<div class="button" @click="listShow=false">我知道了</div>
		</div>
		<div class="pay">
			<div class="payList">
				<div class="item" v-for="(item , index) in payList" :class="{selected:item.selected}" @click="select(index)">
					<div style="display: flex;align-items: center;">
						<div class="type">{{item.name}}</div>
						<div :class="classes[index]">{{item.description}}</div>
					</div>
					<div style="display: flex;align-items: center;">
						<div style="color:#949494;font-size: 13px;text-decoration: line-through;margin-right: 5px;">￥{{item.showPrice}}</div>
						<div style="color:#dd9c34;font-size:19px;"> ￥{{item.actualPrice}}</div>
					</div>
				</div>
			</div>
		</div>
		<div style="border-bottom: 5px solid #ededed;">
			<div class="payWay" @click="payWay=0">
				<div>
					<img src="../assets/wxPay.png" class="icon">
					<div class="name">微信支付</div>
				</div>

				<div class="set" :class="payWay==0?'selected':''">
					<img src="../assets/select.png" style="width:7px;">
				</div>
			</div>
			<div class="payWay" @click="payWay=1">
				<div>
					<img src="../assets/aliPay.png" class="icon">
					<div class="name">支付宝</div>
				</div>
				<div class="set" :class="payWay==1?'selected':''"> 
					<img src="../assets/select.png" style="width:7px;">
				</div>

			</div>

		</div>
		<div style="padding:20px 10px;border-bottom: 5px #f5f5f5 solid;">
			<div style="margin-bottom: 15px;">温馨提示：</div>
			<div style="color:#a4a4a6;font-size:13px;margin-bottom: 10px;">1.若开通免广告会员后10分钟内标识仍然没有点亮，请退出账号后重新登录进行尝试，或联系客服QQ:310372207</div>
			<div style="color:#a4a4a6;font-size:13px;margin-bottom: 10px;">2.开通免广告会员则默认您已阅读并同意5G测速大师<a style="color:#ff9307"
				 href="http://www.speedtesting.cn/speed/agreement.html">《用户协议》</a>、<a style="color:#ff9307" href="http://www.speedtesting.cn/speed/privacy.html">《隐私权政策》</a></div>
			<div style="color:#a4a4a6;font-size:13px;">3.会员服务一经开通，即定完成，鉴于该网络服务性质特殊，属于不宜退货的商品，不适用无理由退换规定。</div>
		</div> 
		
		<div style=" box-shadow: 0px -3px 5px 0px rgba(0, 0, 0, 0.15); padding-left: 10px;display: flex;justify-content: space-between;align-items: center;position:fixed;bottom:0;background:#FFF;width:100%">
			<div style="display: flex;align-items: center;font-size:15px;">
				<div style="color:#141414;line-height: 50px;display: flex;">总计<div style="color:#dd9c34;font-size:19px;margin-left: 5px;width:30px;">￥{{dollar}}</div>
				</div>
			</div>
			<div class="button" @click="pay">{{text}}</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'home',
		data() {
			return {
				listShow:false,
				text: "立即开通",
				userId: "",
				vip: 0,
				dollar: "0",
				nickname: "未登录",
				vipList: ['纯净无广告', '无线测速', '更加精准', '免费小说', '尊贵标识'],
				textList: ['享全场无广告', '每天无限次测速', '测速结果更精准', '10完本火热小说免费阅读', 'VIP独有标识，与众不同'],
				classes: ["day1", "day2", "day4", "day4"],
				payList: [],
				icon: require('@/assets/icon.png'),
				endTime: "",
				memberType: "",
				payWay: 0
			}
		},
		created() {
			this.userId = this.$route.query.userId 
			this.version=this.$route.query.versionCode
			let data = {"userId":this.userId}; 
			if(this.userId){
				this.$axios.post("user/api/userInfo.htm",data).then((res) => {
					let data = res.data.data
					console.log(data)
					if(data){
						this.vip = data.memberStatus
						if (this.vip == 0) {
							this.text = "立即开通"
						} else{
							this.text = "立即续费"
						} 
						this.nickname = data.nickname 
						if (data.icon) {
							this.icon = data.icon
						}
						let data2 =data.memberExpireTime
						this.endTime=data2.slice(0,10)
					} 
				})
			}
			
			this.$axios.get("member/api/memberTypeList.htm").then(res=>{
				let data = res.data.data
				this.payList = data
				console.log(this.payList)
				this.dollar = this.payList[1].actualPrice
				this.payList[1].selected=1
				this.memberType = this.payList[1].memberType 
			})

		},
		watch: {
		    '$route' (to, from) {
		      location.reload()
		    }
		},
		methods: {
			select(index) {
				this.payList.forEach(item => {
					item.selected = 0;
				})
				this.payList[index].selected = 1;
				this.dollar = this.payList[index].actualPrice
				this.memberType = this.payList[index].memberType
			},
			pay() {
				let userId = Number(this.userId)
				let memberType = this.memberType 
				if(this.version==2){
					if(userId){
						if(this.payWay==0){
							window.android.wechatPayMember(userId, memberType)
						}else if(this.payWay==1){
							window.android.alipayMember(userId, memberType)
						} 
					} else{
						if(this.payWay==0){
							window.android.wechatPayMember(memberType)
						}else if(this.payWay==1){
							window.android.alipayMember(memberType)
						} 
					}
				}else{
					if(userId){
						if(this.payWay==0){
							window.android.wechatPayMember(userId, memberType)
						}else if(this.payWay==1){
							window.android.alipayMember(userId, memberType)
						} 
					} else{
						 window.android.login()
					}
				}
					
				
			},
			back() {
				window.android.back()
			},
			login(){
				if(this.nickname=="未登录"){
					window.android.login()
					}
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
	.cover{
		width:100%;
		height: 100%;
		background: rgba(0,0,0,.6);
		position: fixed;
		top:0;
		left:0;
		z-index: 9;
	}
	.listShow{
		width:225px; 
		background: #FFF;
		height: 380px;
		border-radius:10px;
		position: fixed; 
		overflow: hidden;
		left:0;
		right:0;
		bottom:0;
		top:0;
		margin:auto;
		z-index: 10;
		.title{
			font-size: 17px;
			text-align: center;
			background: #ededed;
			line-height: 50px;
		}
		.item{
			width:80%;
			margin:10px auto;
			display: flex; 
			align-items: center;
			img{
				display: block;
				width:40px;
				margin-right: 10px;
			}
		}
		.button{
			color:#FFF;
			background: #dd9c34;
			width:80%;
			margin:20px auto;
			}
	}
	.payWay {
		width: 90%;
		margin: 10px auto;
		display: flex;
		align-items: center;
		justify-content: space-between;

		img {
			display: block;
			width: 20px;
			float: left;
			margin-right: 10px;
		}

		.name {
			float: left;
		}

		.set {
			color: #FFF;
			border: 1px solid #666666;
			width: 10px;
			height: 10px;
			border-radius: 50%;
			background: #FFF;
			text-align: center;
			display: flex;
			align-items: center; 
			img{
				display: block;
				margin:0 auto;
			}
		} 
		.selected {
			background: #dd9c34;
			border: 1px solid #dd9c34;
		}
	}

	.top {
		background: url(../assets/head_0.png) no-repeat;
		background-size: 100% 120px;
	}
	.vipTop{
		background: url(../assets/head_1.png) no-repeat;
		background-size: 100% 120px;
	}

	.head {
		height: 45px;
		line-height: 45px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: calc(~'100% - 26px');
		margin: auto;
		padding: 0px 13px;

		img {
			width: 10px;
		}

		.title {
			font-size: 17px;
			color: #fff;
			text-align: center;
			position: absolute;
			width: 50%;
			left: 25%;
		}

		.record {
			font-size: 14px;
			color: #fff;
			opacity: .8;
			text-decoration: none;
		}
	}

	.banner {
		width: calc(100% - 26px);
		height: 70px;
		border-radius: 10px;
		background-image: url(../assets/unvip.png);
		background-size: 100% 100%;
		padding: 10px 0px;
		background-repeat: no-repeat;
		margin: 0 auto;
		position: relative;
		.vipIcon{
			position: absolute;
			width:50px;
			display: block;
			top:0px;
			right:20px;
		}
	}

	.vip {
		background-image: url(../assets/vip.png);
	}

	.msg {
		color: #FFF;
		font-size: 14px;
		margin-left: 10px;

		span {
			color: #f2c193;
		}
	}

	.vipList {
		margin: 10px 0px 20px 0px;
		display: flex;
		justify-content: space-between;

		.item {
			margin: 10px auto;

			img {
				width: 38px;
				margin: 0px auto 5px auto;
				box-shadow: 0px 3px 14.25px 0.75px rgba(233, 198, 99, 0.19);
				height: 38px;
				border-radius: 50%;
			}

			div {
				color: #1a1a1a;
				font-size: 12px;
				text-align: center;
			}
		}
	}

	.pay {
		padding: 15px; 
		border-bottom: 5px solid #ededed;

		.payList {
			border-radius: 20px;

			.item {
				display: flex;
				justify-content: space-between;
				align-items: center;
				height: 47px;
				border: 2px solid #FFF;
				padding: 0px 20px;
				border-radius: 10px;
				border: solid 2px #f5f5f5;
				margin: 5px auto;

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
				border: 2px solid #dd9c34;
				background-image: url(../assets/selected.png);
				background-repeat: no-repeat;
				background-size: 22px 20px;
				background-position: 100% 102%;
			}
		}
	}

	.button {
		background: #dd9c34;
		color: #FFF;
		line-height: 30px;
		width: 100px;
		text-align: center;
		border-radius: 20px; 
		margin-right: 20px;
	}
</style>
