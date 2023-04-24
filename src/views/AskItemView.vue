<template>
  <div>
    <user-profile></user-profile>
    <section>
      <h2>{{ getAskItem.title }}</h2>
    </section>
    <section>
      <div v-html="getAskItem.content"></div>
    </section>
  </div>
</template>

<script>
import userProfile from '../components/UserProfile.vue'
import { mapGetters } from 'vuex';
export default {
  components: {
    userProfile
  },
  computed:{
    ...mapGetters([
      'getAskItem'
    ])
  },

  created(){
    const id = this.$route.params.id
    this.$store.dispatch('fetchAskItem', id)
  }
}
</script>

<style scoped>
.userContainer{
  display: flex;
  align-items: center;
  padding: 0.5rem;
}
.fa-user{
  font-size: 2.5rem;

}
.userDescription{
  padding-left: 8px;
}
.time{
  font-size: 0.7rem;
}

</style>