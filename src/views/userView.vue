<template>
  <user-profile>
    <div slot="karma">{{ this.$store.getters.getUser.karma }}</div>
  </user-profile>
</template>

<script>

import userProfile from '../components/UserProfile.vue'

export default {
  components:{
    userProfile
  },
  
    created() {
        const userName = this.$route.params.id
        
        this.$store.dispatch('fetchUser', userName);
    }
}
</script>

<style>

</style>