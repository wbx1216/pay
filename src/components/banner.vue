<template>
	<div :style="{height:height}" class="body">
		<div class="head" style=" margin:0px 13px;"><img src="@/assets/back2.png" @click="$router.back(-1)">
			<div class="title">会员权益</div>
		</div>
		<swiper :options="swiperOption" ref="swiperTop" class="swiper-no-swiping">
			<swiper-slide v-for="item,index in list" class="item">
				<img :src="require(`../assets/vip_icon${index}.png`)" alt="" class="icon" />
				<div class="title">{{item.title}}</div>
			</swiper-slide>
		</swiper>
		<swiper :options="swiperOption2" ref="swiperTop2">
			<swiper-slide v-for="item,index in list" class="item2">
				<div class="block">
					<div class="title">{{list[index].title}}</div>
					<div class="text">{{list[index].text}}</div>
					<img :src="require(`../assets/banner${index}.png`)" alt="" class="banner" />
				</div>
				<div class="triangle"></div>
			</swiper-slide>
		</swiper>
		<div class="button" @click="$router.back(-1)">立即开通</div>
	</div>
</template>
<script>
	let vm = null;
	import {
		swiper,
		swiperSlide
	} from 'vue-awesome-swiper'
	export default {
		name: "record",
		components: {
			swiper,
			swiperSlide
		},
		data() {
			return {
				height: "",
				list: [{
					title: "全场免广告",
					text: "小狸VIP可免除阅读器内所有广告（阅读页中广告及主界面中的广告）"
				}, {
					title: "首次开通礼",
					text: "首次开通即送尊贵大礼包（5000金币直接发放到账户）"
				}, {
					title: "额外金币",
					text: "会员每日累计阅读满30、60、90、180分钟时，可获得双倍的额外金币奖励。"
				}, {
					title: "提现优先审核",
					text: "运营将优先审核您的提现申请，减少审核排队时间。"
				}, {
					title: "尊贵标识",
					text: "小狸设计师定制尊贵身份标志，开通后您将是我们最尊贵的荣耀会员"
				}, {
					title: "音量键翻页",
					text: "小狸VIP可享用阅读时音量键翻页，彻底解放滑屏双手"
				}, {
					title: "敬请期待",
					text: "更多小狸VIP专属特权开发中，敬请期待"
				}],
				index: 0,
				swiperOption: {
					notNextTick: true,
					noSwiping: true,
					direction: "horizontal",
					slidesPerView: 3,
					spaceBetween: 10,
					centeredSlides: true,
					initialSlide: 0,
					on: {
						slideChangeTransitionEnd: function() {
							vm.index = this.realIndex
						}
					}
					/*横向滑动*/
				},
				swiperOption2: {
					direction: "horizontal",
				},
			}
		},
		created() {
			vm = this;
			this.$axios.get("../../doc/memberFirstCoin.htm").then((res) => {
				if (res.data.coin) {
					this.list[1].text = "首次开通即送尊贵大礼包（" + res.data.coin + "金币直接发放到账户）"
				}
			})
		},
		computed: {
			swiper() {
				return this.$refs.swiperTop.swiper
			},
			swiper2() {
				return this.$refs.swiperTop2.swiper
			}
		},
		mounted() {
			this.$nextTick(() => {
				const swiperTop = this.$refs.swiperTop.swiper
				const swiperTop2 = this.$refs.swiperTop2.swiper
				swiperTop.controller.control = swiperTop2
				swiperTop2.controller.control = swiperTop
			})
			this.index = this.$route.query.index
			let index = this.index
			this.swiper.slideTo(index, 0, false);
			this.swiper2.slideTo(index, 0, false);
		}
	}
</script>

<style scoped lang="less">
	@import '../../node_modules/swiper/dist/css/swiper.min.css';
	.swiper-container {
		width: 100%;
		margin: 20px auto;
		color: #FFF;
	}

	.swiper-no-swiping {
		.swiper-slide {
			transform: scale(0.8);
			opacity: 0.6;
		}

		.swiper-slide-active {
			transform: scale(1);
			opacity: 1;
		}
	}

	.body {
		background-image: url(../assets/background.png);
		background-size: 100% 100%;
		background-repeat: no-repeat;

		height: 100%;
	}

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
			color: #e9c176;
			text-align: center;
			position: absolute;
			width: 50%;
			left: 25%;
		}
	}

	.item {
		.icon {
			width: 60px;
			margin: 0 auto;
		}

		.title {
			text-align: center;
			color: #e9c176;
			font-size: 15px;
			margin-top: 10px;
		}
	}

	.item2 {
		width: 85%;
		margin: 0 auto;
		padding-top: 20px;
		position: relative;

		.triangle {
			width: 0;
			height: 0;
			border: 40px solid;
			border-color: transparent transparent white;
			position: absolute;
			top: -35px;
			left: 0px;
			margin: auto;
			right: 0;
		}

		.block {
			width: 90%;
			border-radius: 5px;
			background: #FFF;
			padding: 30px 0px;
			margin: 0 auto;
		}

		.title {
			color: #212121;
			font-size: 23px;
			margin-left: 25px;
		}

		.text {
			color: #949494;
			font-size: 14px;
			margin: 10px 25px;
			height: 40px;
		}

		.banner {
			width: 90%;
			margin: 5px auto;
		}

	}

	.button {
		color: #29282b;
		background: #f7dd8e;
		line-height: 40px;
		width: 80%;
		text-align: center;
		border-radius: 10px;
		position: absolute;
		bottom: 30px;
		left: 10%;
	}
</style>
