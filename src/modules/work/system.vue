<template>
	<div class="system">
        <p>{{$t('systemBulletin')}}</p>
        <ul>
          <li v-for='sl in systemList'>
          	<a :href="sl.href">
          		<span class="title">{{sl.title}}</span>
          		<span class='new'><img src="../../assets/images/NWE.png" alt="最新新闻" /></span>
          		<span class='time'>{{sl.publishTime}}</span>
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
        systemList: [
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
.system {
	background: #FFFFFF;
	border-radius: 10px;
	width: 100%;
	height: 284px;
	margin: 24px 24px 0 0;
	float:left;
	box-sizing: border-box;
	padding: 24px
}
.system:hover {
    box-shadow: 0 2px 16px 0 rgba(0,0,0,0.05);
}
.system>p {
	font-size: 14px;
	color: #515152;
	font-weight: bold;
	text-align: left
}
.system ul {
	margin: 24px 0;
	padding: 0
}
.system li a {
  line-height: 32px;
  font-size: 14px;
  width: 100%;
  display: inline-block;
}
.system li .title {
  max-width: 63%;
  float: left;
  color: #515152;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}
.system li .time {
  float: right;
  color: #8E8E8F;
}
.system li .new {
	float: left;
}
.system li a:hover .title {
  text-decoration: underline;
  color: #292C4B; 
}
.system {
  float:left;
  margin: 24px 0
}
</style>