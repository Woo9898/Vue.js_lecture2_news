import axios from "axios";

const config = {
  baseUrl: "https://api.hnpwa.com/v0/"
}


function getUser(username) {
  return axios.get(`https://api.hnpwa.com/v0/user/${username}.json`);
}

function getAskItem(id) {
  return axios.get(`https://api.hnpwa.com/v0/item/${id}.json`);
}

function getList(pagename){
  return axios.get(`${config.baseUrl}${pagename}/1.json`);
}

export {  getUser, getAskItem, getList };
