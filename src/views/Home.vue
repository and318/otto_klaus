<template>
  <div class="home">
    <LoginComp></LoginComp>
  </div>
</template>

<script>
// @ is an alias to /src
import LoginComp from '@/components/LoginComp.vue'

export default {
  name: 'Home',
  components: {
    LoginComp
  }
}
</script>
