<template>
  <div id="app" v-cloak> 
    <router-view/>
  </div>
</template>
<script>
  
export default {
  name: 'app',
  components: { 
  }
}
</script>

<style>
[v-cloak]{
	display: none;
}
#app {
  font-family: '微软雅黑', Helvetica, Arial, sans-serif; 
  color: #000; 
	height: 100%;
}
body,html{
	margin: 0; 
	height: 100%;
} 
img{
	display: block;
}
a{
	text-decoration: none;
	-webkit-tap-highlight-color:transparent
}
</style>
