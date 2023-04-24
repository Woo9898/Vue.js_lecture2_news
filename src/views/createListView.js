import ListView from './listView.vue'
import bus from "../utils/bus.js";

export default function createListView(name){
    return{
        name : name,
        created() {
            
            bus.$emit('start:spinner');

            return this.$store.dispatch('fetchList', this.$route.name)
                .then(() => {
                     bus.$emit('end:spinner');
                })
                .catch((error) => console.log('error'));
            
        },
        render(createElement){
            return createElement(ListView);
        }
    }
}