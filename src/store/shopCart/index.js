import { reqCartList, reqDeleteCartById, reqUpdateCheckedByid } from "@/api"
const state = {
    cartList: []
};
const mutations = {
    GETCARLIST(state, cartList) {
        state.cartList = cartList
    }
};
const actions = {
    async getCartList({ commit }) {
        let result = await reqCartList();
        if (result.code == 200) {
            commit("GETCARLIST", result.data)
        }
    },
    async delectCartList({ commit }, skuId) {
        let result = await reqDeleteCartById(skuId);
        console.log(result);
        if (result.code == 200) {
            return "ok"
        } else {
            return Promise.reject(new Error('faile'))
        }
    },
    async updateChecked({ commit }, skuId, isChecked) {
        console.log(skuId, isChecked);
        let result = await reqUpdateCheckedByid(skuId, isChecked);
        console.log(result);
        if (result.code == 200) {
            return "ok"
        } else {
            return Promise.reject(new Error('faile'))
        }
    }
};
const getters = {
    cartList(state) {
        return state.cartList[0] || {}
    },
};
export default {
    state,
    mutations,
    actions,
    getters
}