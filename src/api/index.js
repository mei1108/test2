import request from "./request";
import mockRequest from "./mockRequest"
export const reqCategoryList = (() => {
    return request({ url: '/product/getBaseCategoryList', method: 'get' })
})

export const reqGetBannerList = (() => {
    return mockRequest({ url: '/banner', method: 'get' })
})

export const reqGetFloorList = (() => {
    return mockRequest({ url: '/floor', method: 'get' })
})

export const reqGetSerachList = ((params) => {
    return request({ url: '/list', method: 'post', data: params })
})

export const reqGetDetail = ((skuId) => {
    return request({ url: `/item/${skuId}`, method: 'get' })
})

export const reqAddOrUpdateShopCart = ((skuId, skuNum) => {
    return request({ url: `/cart/addToCart/${skuId}/${skuNum}`, method: 'post' })
})

export const reqCartList = (() => {
    return request({ url: "/cart/cartList", method: 'get' })
})

export const reqDeleteCartById = ((skuId) => {
    return request({ url: `/cart/deleteCart/${skuId.skuId}/`, method: 'delete' })
})

export const reqUpdateCheckedByid = ((skuId, isChecked) => {
    return request({ url: `/cart/checkCart/${skuId.skuId}/${skuId.isChecked}/`, method: 'get' })
})

export const reqGetCode = ((phone) => {
    return request({ url: `/user/passport/sendCode/${phone}/`, method: 'get' })
})

export const reqRegister = ((data) => {
    console.log(data);
    return request({ url: `/user/passport/register/`, method: 'post', data })
})

export const reqUserLogin = ((data) => {
    console.log(data);
    return request({ url: `/user/passport/login/`, method: 'post', data })
})