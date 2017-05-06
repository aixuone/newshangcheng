<template>
  <div class="home_nav">
    <header>
    <!--搜索  开始-->
      <div>
        <span>
          <img src="../assets/images/home_search.png">
        </span>
        <input type="search" autocomplete="off"  placeholder="搜索"/>
      </div>
      <!--搜索  结束-->
    </header>

    <!--二级标题  开始-->
    <div  class="second_nav">
      <ul>
        <li v-for="second_nav in second_navs" v-bind:class="{active:second_nav.active}" v-on:click="nav_active">
          {{second_nav.name}}
        </li>
      </ul>
    </div>
    <!--二级标题  结束-->

    <!-- banner 开始--> 
    <div class="home_banner">
      <ul>
        <li v-for="home_banner in home_banners">
          <img v-bind:src="home_banner.src">
        </li>
      </ul>
    </div>
  
  <!-- banner 结束--> 

  <!-- 商品列表 cont_tuijian 开始--> 
    <div class="cont_tuijian">          
        <h2><img v-bind:src="conts.titleimg"><span>{{conts.title}}</span></h2>        
        <div class="cont_tuijian_body">
          <ul>
            <li v-for="cont in conts.arr">
              <img v-bind:src="cont.img">
              <div>
                <h2>{{cont.h}}</h2>
                <p><span class="red">{{cont.a}}</span>{{cont.b}}</p>
                <p>{{cont.c}}</p>
                <p><span class="yellow">{{cont.star}}</span>{{cont.d}}</p>
              </div>
            </li> 
          </ul>
          
        </div>
    </div>
  <!-- 商品列表 cont_tuijian 结束--> 

  </div>
</template>
<script>
export default {
  name: 'hello',
  data () {
    return {
      second_navs: [
          {name: '推荐', active: true},
          {name: '药妆', active: false},
          {name: '母婴', active: false},
          {name: '数码相机', active: false},
          {name: '小家电', active: false},
          {name: '更多', active: false} 
      ],
      home_banners: [
          {src: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3628699643,3300500826&fm=23&gp=0.jpg'},
          {src: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3424606476,362323671&fm=23&gp=0.jpg'},
          {src: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3941412831,2082107578&fm=23&gp=0.jpg'},
          {src: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=884089017,4229252865&fm=23&gp=0.jpg'}
      ],
      conts: {
        title: '热门推荐',
        titleimg: '../static/images/cont_tuijian.png',
        arr:[
          {
            img: '../static/images/p1.png',
            h: 'Phenix Cashmere 女士 轻质羊毛围巾',
            a: '600元~/$36.00~',
            b: '京都',
            c: '全日本共50家店铺比较',
            star: '★★★★☆',
            d: '共20条评价'
          },
          {
            img: '../static/images/p1.png',
            h: 'Phenix Cashmere 女士 轻质羊毛围巾',
            a: '600元~/$36.00~',
            b: '京都',
            c: '全日本共50家店铺比较',
            star: '★★★★☆',
            d: '共20条评价'
          },
          {
            img: '../static/images/p1.png',
            h: 'Phenix Cashmere 女士 轻质羊毛围巾',
            a: '600元~/$36.00~',
            b: '京都',
            c: '全日本共50家店铺比较',
            star: '★★★★☆',
            d: '共20条评价'
          },
          {
            img: '../static/images/p1.png',
            h: 'Phenix Cashmere 女士 轻质羊毛围巾',
            a: '600元~/$36.00~',
            b: '京都',
            c: '全日本共50家店铺比较',
            star: '★★★★☆',
            d: '共20条评价'
          }
        ]
      },
      tuijian: {
        title: '热门推荐',
        titleimg: '../static/images/cont_tuijian.png',
        arr:[
          {
            img: '../static/images/p1.png',
            h: 'Phenix Cashmere 女士 轻质羊毛围巾',
            a: '600元~/$36.00~',
            b: '京都',
            c: '全日本共50家店铺比较',
            star: '★★★★☆',
            d: '共20条评价'
          },
          {
            img: '../static/images/p1.png',
            h: 'Phenix Cashmere 女士 轻质羊毛围巾',
            a: '600元~/$36.00~',
            b: '京都',
            c: '全日本共50家店铺比较',
            star: '★★★★☆',
            d: '共20条评价'
          },
          {
            img: '../static/images/p1.png',
            h: 'Phenix Cashmere 女士 轻质羊毛围巾',
            a: '600元~/$36.00~',
            b: '京都',
            c: '全日本共50家店铺比较',
            star: '★★★★☆',
            d: '共20条评价'
          },
          {
            img: '../static/images/p1.png',
            h: 'Phenix Cashmere 女士 轻质羊毛围巾',
            a: '600元~/$36.00~',
            b: '京都',
            c: '全日本共50家店铺比较',
            star: '★★★★☆',
            d: '共20条评价'
          }
        ]
      },
      hot: {
        title: '人气商品',
        titleimg: '../static/images/cont_hot.png',
        arr:[
          {
            img: '../static/images/p1.png',
            h: 'Phenix Cashmere 女士 轻质羊毛围巾',
            a: '6002元~/$36.00~',
            b: '京都',
            c: '全日本共123家店铺比较',
            star: '★★★★☆',
            d: '共20条评价'
          },
          {
            img: '../static/images/p1.png',
            h: 'Phenix Cashmere 女士 轻质羊毛围巾',
            a: '600元~/$36.00~',
            b: '京都',
            c: '全日本共50家店铺比较',
            star: '★★★★☆',
            d: '共20条评价'
          },
          {
            img: '../static/images/p1.png',
            h: 'Phenix Cashmere 女士 轻质羊毛围巾',
            a: '600元~/$36.00~',
            b: '京都',
            c: '全日本共50家店铺比较',
            star: '★★★★☆',
            d: '共20条评价'
          },
          {
            img: '../static/images/p1.png',
            h: 'Phenix Cashmere 女士 轻质羊毛围巾',
            a: '600元~/$36.00~',
            b: '京都',
            c: '全日本共50家店铺比较',
            star: '★★★★☆',
            d: '共20条评价'
          }
        ]
      },

    }
  },
  methods: {
    nav_active: function(e){ 
      var _this = this;  
      var target = e.target;
      if(target.className.indexOf('active')>=0) return;
      var siblings = target.parentNode.childNodes;
      for(var i=0;i<siblings.length;i++)
        siblings[i].className = ''; 
      target.className= 'active';
      console.log(_this);
      _this.conts = _this.hot;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header{
  width: 100%;
  height: 10em;
  background: #E82D50;
  margin: 0;
  border-top:solid 1px #E82D50; 
}
header>div{
  width: 90%;
  height: 5em;
  background: #D01034;
  margin: auto;
  margin-top: 2.5em;
  border-radius: 1em;
  padding-left: 1em;
  vertical-align: middle;
}
header>div>span>img{
  display: inline;
  width: 4.5em;
  height: 4.5em;
  margin: 0;

} 
header>div>input{
  margin-left: 1em;
  display: inline-block;
  width: 80%;
  height: 1.5em;
  padding: 0;
  line-height: 4.5em;
  vertical-align: top;
  background: #D01034;
  border: none; 
  font-size: 4em;
  color: #fff;
}
.second_nav{
  width: 100%;
  overflow-x: scroll;
  overflow-y: hidden; 
}
.second_nav>ul{
  width: 140%;
  background: #fff;
  margin: 0;
  padding: 0;

}
.second_nav>ul>li{
  display: inline-block;
  padding: 0.5em 1.3em 0.5em 1.3em;
  font-size: 3.5em; 
}
.home_banner{
  width: 100%;
  overflow: scroll;
}
.home_banner>ul{
  width: 400%;
  margin: 0;
  padding: 0;
  overflow: hidden;
}
.home_banner li{
  display: block;
  margin: 0;
  padding: 0;
  width: 25%;
  float: left;

}
.home_banner img{
  margin: 0;
  padding: 0;
  width: 100%;
  height: 40em;
}
/* for Chrome */
*::-webkit-scrollbar {
    display: none;
}
.second_nav li.active{
  border-bottom: 0.3em solid #E82D50;
  color: #E82D50;
}
h2{
  font-size: 4em;
  color: #717171;
  margin: 0;
  padding: 0.5em 0;
  border-bottom: 2px solid #eee;
}
h2 img{
  margin:0 1em;
  height: 1.1em;
}
.cont_tuijian_body,.cont_tuijian_body ul,.cont_tuijian_body ul li{
  width: 100%;
  margin: 0;
  padding: 0;

}
.cont_tuijian_body ul li h2{
  border-bottom: none;
  color: #000;
}
.cont_tuijian_body ul li img{
  display: inline-block;
  width: 35%;
}
.cont_tuijian_body ul li>div{
  display: inline-block;
  vertical-align: top;
  width: 64%;
}
.cont_tuijian_body ul li .red{
  color: #EE637D;
  margin-right: 1em;
}
.cont_tuijian_body ul li .yellow{
  color: #F89C26;
  margin-right: 1em;
  font-size: 1.2em;
}
.cont_tuijian_body p{
  font-size: 2rem;
  margin-top: 0.5em;
  color: #bbb;
}
</style>
