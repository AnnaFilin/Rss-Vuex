/* eslint-disable */
import Vue from 'vue'
import Vuex from 'vuex'

import favorites from './modules/favorites.js'
import feeds from './modules/feeds.js'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        favorites,
        feeds
    }
});
