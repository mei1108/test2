import { reqGetDetail, reqAddOrUpdateShopCart } from "@/api"
import { getUuid } from "@/utils/getUUID"
const state = {
    detailItem: {},
    uuid_token: getUuid()
};
const mutations = {
    DETAILITEM(state, detailItem) {
        state.detailItem = detailItem
    }
};
const actions = {
    async getDetail({ commit }, skuId) {
        let result = await reqGetDetail(skuId);
        if (result.code === 200) {
            commit('DETAILITEM', result.data);
        }
    },
    async updateShopCart({ commit }, { skuId, skuNum }) {
        let result = await reqAddOrUpdateShopCart(skuId, skuNum);
        if (result.code == 200) {
            return "ok"
        } else {
            return Promise.reject(new Error('faile'))
        }
    }
};
const getters = {
    categoryView(state) {
        return state.detailItem.categoryView || []
    },
    skuInfo(state) {
        return state.detailItem.skuInfo || []
    },
    spuSaleAttrList(state) {
        return state.detailItem.spuSaleAttrList || []
    }
};
export default {
    state,
    mutations,
    actions,
    getters
}