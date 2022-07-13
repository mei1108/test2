import { reqGetSerachList } from "@/api"
const state = {
    searchList: {}
};
const mutations = {
    SERACHLIST(state, searchList) {
        state.searchList = searchList
    }
};
const actions = {
    async getSearchList({ commit }, parame = {}) {

        let result = await reqGetSerachList(parame);
        if (result.code === 200) {
            commit('SERACHLIST', result.data);
        }
    }
};
const getters = {
    attrsList(state) {
        return state.searchList.attrsList || []
    },
    goodsList(state) {
        return state.searchList.goodsList || []
    },
    trademarkList(state) {
        return state.searchList.trademarkList || []
    },
};
export default {
    state,
    mutations,
    actions,
    getters
}