import { reqGetCode, reqRegister, reqUserLogin } from "@/api"
const state = {
    token: ""
};
const mutations = {
    LOGIN(state, user) {
        state.token = user.token
    }
};
const actions = {
    async getCode({ commit }, phone) {
        let result = await reqGetCode(phone);
        console.log(result);
        if (result.code == 200) {
            return "ok"
        } else {
            return Promise.reject(new Error('未知错误'))
        }
    },
    async checkRegiester({ commit }, user) {
        let result = await reqRegister(user);
        console.log(result);
        if (result.code == 200) {
            return "ok"
        } else {
            return Promise.reject(new Error('未知错误'))
        }
    },
    async userLogin({ commit }, user) {
        let result = await reqUserLogin(user);
        console.log(result);
        if (result.code == 200) {
            commit("LOGIN", result.data)
            return "ok"
        } else {
            return Promise.reject(new Error('未知错误'))
        }
    }
};
const getters = {}
export default {
    state,
    mutations,
    actions,
    getters
}