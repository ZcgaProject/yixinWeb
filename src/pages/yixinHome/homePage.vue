<template>
    <div class="yixinHomePageBox">
        <div class="yixinHome_one">
            <div class="yixinHomeone_left">
                <img style="width: 50%;height: 40%" src="../../assets/yixinHome/xin.png" alt="">
            </div>
            <div class="yixinHomeone_sou">
                <van-search
                        v-model="value"
                        shape="round"
                        background="#de4141"
                        placeholder="请输入搜索关键词"
                        @search="onSearch"
                        style="width: 100%;height: 100%;"
                />
            </div>
            <div class="yixinHomeone_left">
                <img style="width: 53%;height: 40%" src="../../assets/yixinHome/saoyisao.png" alt="">
                <span style="font-size: 0.22rem;color: #ffffff;font-weight: 400">
                    扫一扫
                </span>
            </div>
            <div class="yixinHomeone_left">
                <img style="width: 53%;height: 40%" src="../../assets/yixinHome/tiaoma.png" alt="">
                <span style="font-size: 0.22rem;color: #ffffff;font-weight: 400">
                    付款码
                </span>
                <span></span>
            </div>
        </div>
        <div class="yixinHome_two">
            <van-swipe class="my-swipe" :autoplay="3000" :show-indicators="false"  @change="onChange">
                <van-swipe-item v-for="(item,index) in imgbox"  :key="index">
                    <img style="width: 100%;height: 100%;" :src="item.imgtext" alt="">
                </van-swipe-item>
            </van-swipe>
        </div>
        <div class="yixinHome_thr">
            <div class="yixinHome_thrBox">
                <div class="thrBox_left">
                    <div class="leftFont_one">
                        <span>蒋松林&#12288;</span>
                        <img style="width: 20px;height: 20px;" src="../../assets/yixinHome/icon-4.png" alt="">
                        <span>&#12288;1年</span>
                    </div>
                    <div class="leftFont_two">
                        <img style="width: 20px;height: 20px;" src="../../assets/yixinHome/icon-5.png" alt="">
                        <span>&#12288;信积分</span>
                    </div>
                    <div class="leftFont_one">
                        <span>5000.00</span>
                    </div>
                    <div class="leftFont_two">
                        <span>最新收益+10&#12288;</span>
                        <img style="width: 14px;height: 14px;" src="../../assets/yixinHome/icon-5.png" alt="">
                    </div>
                    <div class="leftFont_two">
                        <span>信用值</span>
                    </div>
                    <div class="leftFont_one">
                        <span>85分</span>
                    </div>
                </div>
                <div class="thrBox_right">
                    <div class="leftFont_one">
                        <span style="font-size: 0.28rem">信用ID：</span>
                        <span style="font-size: 0.2rem">zcgaxm100125801</span>
                    </div>
                    <div class="leftFont_two">
                        <span>待还信积分</span>
                    </div>
                    <div class="leftFont_one">
                        <span>100000.00</span>
                    </div>
                    <div class="leftFont_two">
                        <span>11/24 待还10.00</span>
                    </div>
                    <div class="leftFont_two">
                        <span>可借信积分</span>
                    </div>
                    <div class="leftFont_one">
                        <span>60,000.00</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="yixinHome_fou">
            <div class="yixinHome_fouimg">
                <img style="width: 36px;height: 40px" src="../../assets/yixinHome/logo-1.png" alt="">
                <span>易商城</span>
            </div>
            <div class="yixinHome_fouimg">
                <img style="width: 36px;height: 40px" src="../../assets/yixinHome/logo-2.png" alt="">
                <span>信商城</span>
            </div>
            <div class="yixinHome_fouimg">
                <img style="width: 36px;height: 40px" src="../../assets/yixinHome/logo-3.png" alt="">
                <span>托管服务</span>
            </div>
            <div class="yixinHome_fouimg">
                <img style="width: 36px;height: 40px" src="../../assets/yixinHome/logo-4.png" alt="">
                <span>易信学院</span>
            </div>
            <div class="yixinHome_fouimg">
                <img style="width: 40px;height: 40px" src="../../assets/yixinHome/logo-5.png" alt="">
                <span>交易所</span>
            </div>
        </div>
        <div class="yixinHome_fiv">
            <img style="width: 24px;height: 24px;margin-left: 0.2rem" src="../../assets/yixinHome/lb.png" alt="">
            <span style="font-size: 0.2rem;color: #7e7e7e;font-weight: bold;margin-left: 0.2rem">易信学院在线直播讲堂即将上线</span>
        </div>
        <div class="yixinHome_six">
            <div class="yixinHome_sixbox">
                <img style="width: 100%;height: 90%" src="../../assets/yixinHome/1.png" alt="">
            </div>
        </div>
        <div class="yixinHome_sev">
            <img style="width: 100%;height: 94%" src="../../assets/yixinHome/2.jpg" alt="">
        </div>
        <div class="yixinHome_eig">
            <div class="yixinHome_eigBox">
                <span>易信学院</span>
            </div>
        </div>
        <div class="yixinHome_nin">
            <div class="yixinHome_ninleft">
                <div class="ninlefttop">
                    <img style="width: 80px;height: 80px" src="../../assets/yixinHome/icon_video.png" alt="">
                </div>
                <div class="ninleftbottom">易信互动讲堂</div>
            </div>
            <div class="yixinHome_ninright">
                <div style="color: #000000" class="ninrightTop">每周二、三、五</div>
                <div style="color: #000000" class="ninrightTop">19:00-20:00</div>
                <div style="color: #ea0f0f" class="ninrightTop">准时开播</div>
                <div class="anniu">详情</div>
            </div>
        </div>
        <div class="yixinHome_ten">
            <div class="yixinHome_tenbox">
                <div class="tenboxNav">
                    <span>易商城与信商城的区别？</span>
                </div>
                <div class="tenboxNav">
                    <span>信积分有什么用途？如何获得信积分？</span>
                </div>
                <div class="tenboxNav">
                    <span>什么是信用值？</span>
                </div>
            </div>
        </div>
        <div class="yixinHome_ele">
            <span>中创国安</span>
            <span>信用名片</span>
            <span>诚信中国</span>
        </div>
        <div class="footerSheet">
            <div class="footerSheet_img">
                <div class="footerSheet_imgbox">
                    <img style="width: 100%;height: 100%" src="../../assets/yixinHome/footer-1.jpg" alt="">
                </div>
                <div class="footerSheet_imgbox">
                    <img style="width: 100%;height: 100%" src="../../assets/yixinHome/footer-2.png" alt="">
                </div>
            </div>
            <div style="color: #ff0000" class="footerSheet_font">服务热线：400-838-5198</div>
            <div style="color: #000000" class="footerSheet_font">版权所有:中创国安信用管理股份有限公司</div>
            <div style="color: #000000" class="footerSheet_font">Copyright©2001-2007 BFA All Rights Reserv</div>
            <div style="color: #000000" class="footerSheet_font" @click="beianhao">ICP备案号：琼ICP备19004493号-1  </div>
            <div style="color: #000000" class="footerSheet_kong"></div>
        </div>
        <div class="footerTabertwo"></div>
        <div class="footerTaber"  v-show="hideshow" >
            <van-tabbar style="height:1rem;" v-model="active" :fixed="false" :placeholder="true">
                <van-tabbar-item icon="home-o" v-for="(item,index) in tabbars"
                                 :key="index"
                                 @click="tab(index,item.name)">
                    <span :class="currIndex == index ? active:''">{{item.title}}</span>
                    <template slot="icon" slot-scope="props">
                        <img :src="props.active ? item.active : item.normal">
                    </template>
                </van-tabbar-item>
            </van-tabbar>
        </div>
    </div>
</template>

<script>
    export default {
        name: "homePage",
        data() {
            return {
                value:'',
                imgbox:[
                    {
                        imgtext:require('../../assets/yixinHome/banner.jpg')
                    },
                    {
                        imgtext:require('../../assets/yixinHome/banner.jpg')
                    },
                    {
                        imgtext:require('../../assets/yixinHome/banner.jpg')
                    }
                ],
                tabbars: [
                    {
                        name: "HomePage",
                        title: "首页",
                        normal: require("../../assets/cityHome/home.png"),
                        active: require("../../assets/cityHome/homeClick.png")
                    },
                    {
                        name: "",
                        title: "分类",
                        normal: require("../../assets/cityHome/fenlei.png"),
                        active: require("../../assets/cityHome/fenleiClick.png")
                    },
                    {
                        name: "",
                        title: "购物车",
                        normal: require("../../assets/cityHome/shop.png"),
                        active: require("../../assets/cityHome/shopClick.png")
                    },
                    {
                        name: "",
                        title: "我的",
                        normal: require("../../assets/cityHome/my.png"),
                        active: require("../../assets/cityHome/myClick.png")
                    }
                ],
                docmHeight: document.documentElement.clientHeight,  //默认屏幕高度
                showHeight: document.documentElement.clientHeight,   //实时屏幕高度
                hideshow:true,  //显示或者隐藏footer
                active: 0,
                currIndex: 0
            }
        },
        created() {
            let that = this
            const u = navigator.userAgent;
            if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) { //安卓手机
                window.addEventListener('resize', function () {
                    // Document 对象的activeElement 属性返回文档中当前获得焦点的元素。
                    if (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA') {
                        console.log('安卓点击了')
                        console.log('显影',that.hideshow)
                        that.hideshow = !that.hideshow
                        // if( that.hideshow === false){
                        //     that.hideshow = true
                        // }
                        // window.setTimeout(function() {
                        //     document.activeElement.scrollIntoView(true);
                        // }, 50);
                    }
                })
            }
        },
        mounted(){
            console.log('123123',this.docmHeight)
            window.onresize = ()=>{
                console.log(999999)
                return(()=>{
                    console.log(789789)
                    this.showHeight = document.body.clientHeight;
                })()
            }
        },
        watch:{
            showHeight:function() {
                if(this.docmHeight > this.showHeight){
                    this.hideshow=false
                    console.log(456456)
                }else{
                    this.hideshow=true
                    console.log(123123)
                }
            }
        },
        methods:{
            onSearch(){
                console.log('搜索')
            },
            tab(index, val) {
                this.currIndex = index;
                // this.$router.push(val);
            },
            onChange(index) {
                console.log(index)
            },
            beianhao(){
                location.href = 'http://www.beian.miit.gov.cn/'
            }
        }
    }
</script>
<style src="../../style/yixinHome/homePage.css" scoped></style>
<style>
    .van-search__content{
        background-color: #a62020 !important;
    }
    .van-field__control{
        color: #ffffff;
    }
    .van-cell{
        color:#ffffff;
    }
    .my-swipe .van-swipe-item {
        color: #fff;
        font-size: 20px;
        line-height: 150px;
        text-align: center;
        /*background-color: #39a9ed;*/
    }
    .van-swipe{
        width: 100%;
        height: 100%;
    }
</style>
