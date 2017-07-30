<template>
  <div class="elmemint">
    <mt-button type="default">{{ msg }}饿了么</mt-button>
    <mt-button type="primary">饿了</mt-button>
    <mt-button type="danger">饿死了</mt-button>
  
  </div>
</template>
<script>
export default {
  name: 'elmemint',
  data () {
    return {
      msg: ' elmemint'
    }
  }
}
</script>