<template>
    <ul class="news-list">
    <li v-for="item in getList" v-bind:key="item.id" class="post">
      <!--포인트영역-->
      <div class="point"> 
        {{ item.points || 0 }}
      </div>
      <!--기타영역-->
      <div>
        <!--타이틀영역-->
        <p class="news-title">
            <template v-if="item.domain">
                <a v-bind:href="item.url" >
                    {{ item.title }}
                </a>
            </template>
            <template v-else>
                <router-link v-bind:to="`item/${item.id}`">
                    {{ item.title }}
                </router-link>    
            </template>
        </p>
        <small class="user-text">
            by
            <router-link 
                v-if="item.user"
                class="user-text" v-bind:to="`/user/${item.user}`">{{ item.user }}
            </router-link>
            <a v-bind:href="item.url" v-else>
                {{ item.domain }}
            </a> 
        </small>
      </div>
    </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed:{

        path(){
            return this.$route.path;
        },
        ...mapGetters([
            'getList'
        ])
    }
  
}
</script>

<style scoped>
    .news-list{
    margin: 0;
    padding: 0;
    }
    .post{
    display: flex;
    list-style: none;
    align-items: center;
    border-bottom: 1px solid rgb(168, 147, 122);
    }
    .point{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 60px;
    color: #42b883;
    }
    .news-title{
    margin: 0;
    }
    .user-text{
    color: #828282;
    }
</style>