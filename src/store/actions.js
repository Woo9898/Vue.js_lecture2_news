import {
  getNews,
  getAsk,
  getJobs,
  getUser,
  getAskItem,
  getList,
} from "../api/index.js";

export default {


  async fetchUser(context, username){
    var res = await getUser(username)
    context.commit("setUser", res.data)
    return res
  },
  
  async fetchAskItem(context, id){
    var res = await getAskItem(id)
    context.commit("setAskItem", res.data)
    return res // 최종적으로 promise를 반환해야 비동기 처리를 보장할 수 있다. (!!promise도 마찬가지!!)
  },
  
  async fetchList(context, pagename){
    var res = await getList(pagename)
    context.commit("setListItem", res.data);
    return res
  }
};
