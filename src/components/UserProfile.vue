<template>
  <div class="userContainer">
        <div>
            <i class="fa-solid fa-user"></i>
        </div>
        <div class="userDescription">
            {{ getUser.id }}
            <div class="time">
            {{ getUser.created }}
            </div>
            <div>
                <slot name="karma"></slot>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters(['getUser'])
    }

}
</script>

<style>
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