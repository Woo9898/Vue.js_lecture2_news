import Vue from 'vue'
import Router from 'vue-router'
import user from "../views/userView";
import AskItem from "../views/AskItemView";
import createListView from '../views/createListView'

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/news",
    },
    //아래 세 개의 router에 하이 오더 컴포넌트를 사용할 것이다.
    {
      path: "/news",
      name: "news",
      component: createListView('News'),
    },
    {
      path: "/ask",
      name: "ask",
      component: createListView('Ask'),
    },
    {
      path: "/jobs",
      name: "jobs",
      component: createListView('jobs'),
    },
    {
      path: "/user/:id",
      component: user,
    },
    {
      path: "/item/:id",
      component: AskItem,
    },
  ],
});
