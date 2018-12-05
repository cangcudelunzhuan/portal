<template>
  <div class="news">
        <p>{{$t('messageReminding')}}</p>
        <ul>
          <li v-for='nl in newsList'>
          	<a :href="nl.href">
          		<span class='title'>{{nl.title}}</span>
          		<span class='new'><img src="../../assets/images/NWE.png" alt="最新新闻" /></span>
          		<span class='time'>{{nl.publishTime}}</span>
          	</a>
          </li>
        </ul>
  </div>
</template>

<script>
  export default {
    name: 'Work',
    data () {
      return {
        newsList: [
          {
            title: this.$t('systemList.title'),
            publishTime: this.$t('systemList.times'),
            href: ''
          }
        ]
      }
    }
  }
</script>

<style>
.news {
  background: #FFFFFF;
  border-radius: 10px;
  width: 100%;
  height: 284px;
  margin: 24px 24px 0 0;
  float:left;
  box-sizing: border-box;
  padding: 24px
}
.news:hover {
    box-shadow: 0 2px 16px 0 rgba(0,0,0,0.05);
}
.news>p {
  font-size: 14px;
  color: #515152;
  font-weight: bold;
  text-align: left
}
.news ul {
  margin: 24px 0;
  padding: 0
}
.news li a:hover .title {
  text-decoration: underline;
  color: #292C4B; 
}
.news li a {
  line-height: 32px;
  font-size: 14px;
  width: 100%;
	display: inline-block;
}
.news li .title {
  max-width: 63%;
  float: left;
  color: #515152;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}
.news li .new {
	float: left
}
.news li .time {
  float: right;
  color: #8E8E8F;
}
.news {
  float:right;
  margin: 24px 0
}
</style>
