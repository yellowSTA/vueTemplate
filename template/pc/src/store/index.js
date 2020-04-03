import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import * as types from './mutation-types'

Vue.use(Vuex)

const state = {
    testInfo: null
}


const mutations = {
    [types.TEST](state, info) {
        state.testInfo = info
    }
}

const actions = {

}


export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    modules: {

    }
})