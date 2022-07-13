import VueRouter from 'vue-router'
import Vue from "vue";
import routes from "./routes"
Vue.use(VueRouter);



let originPush = VueRouter.prototype.push;

VueRouter.prototype.push = function(location, resolve, reject) {
    if (resolve && reject) {
        originPush.call(this, location, resolve, reject);
    } else {
        originPush.call(this, location, () => {}, () => {})
    }
}

let originReplace = VueRouter.prototype.push;

VueRouter.prototype.replace = function(location, resolve, reject) {
    if (resolve && reject) {
        originReplace.call(this, location, resolve, reject);
    } else {
        originReplace.call(this, location, () => {}, () => {})
    }
}

export default new VueRouter({
    routes,
    scrollBehavior(to, from, savePosition) {
        return { y: 0 }
    }
})