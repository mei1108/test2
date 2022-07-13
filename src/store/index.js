import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

Vue.config.devtools = true

import home from './home';
import search from './search';
import detail from './detail';
import shopCart from './shopCart';
import user from './user';

export default new Vuex.Store({
    modules: {
        home,
        search,
        detail,
        shopCart,
        user
    }
})