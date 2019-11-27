<template>
  <div id="app"> 
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
 
#app {
  font-family: '微软雅黑', Helvetica, Arial, sans-serif; 
  color: #000; 
}
body,html{
	margin: 0; 
} 
img{
	display: block;
}
a{
	text-decoration: none;
}
</style>
