import axios from "axios";
import {baseUrl} from './config';

export const user = {
  state:{
    token: null,
    profile: {}
  },
  reducers: {
    update(state, user){
      return {
        ...state,
        ...user
      }
    },
    logout(){
      return {
        token: null,
        profile: {}
      }
    }
  },
  effects: dispatch => ({
    async login({username, password}){
      const res = await axios.post(baseUrl + '/auth/login', { username, password })
      this.update({ token: res.data.token, profile: res.data.profile })
    }
  })
}




