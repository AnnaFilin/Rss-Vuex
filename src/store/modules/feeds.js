/* eslint-disable */

const state = {
    feeds: [],
    favorites: [],
    articles: {},
    
};

const mutations = {
    'SET_FEEDS'(state, feeds) {
        state.feeds = feeds;
        console.log(feeds);
    },
    'ADD_FEED'(state, feed) {
        state.feeds.push(feed);
    },
    'CHOOSE_FEED'(state, feed) {
        state.articles = [];
        state.articles = feed;
        console.log('pushed to articles');
        console.log(state.articles);
    },
    'ADD_TO_FAVORITES'(state, feed) {
        state.favorites.unshift(feed);
    }
};

const actions = {
    initFeeds: ({ commit }, feeds) => {
        commit('SET_FEEDS', feeds);
    },

    chooseFeed: ({commit}, feed) => {
        commit('CHOOSE_FEED', feed);
        console.log('choosen feed : ' + feed);
    },

    addFavorites: ({commit}, feed) => {
        commit('ADD_TO_FAVORITES', feed);
    },
    addFeed: ({commit}, feed) => {
        commit('ADD_FEED', feed);
        console.log('added feed' + feed);
    }

};

const getters = {
    feeds: state => {
        return state.feeds;
    },
    articles: state => {
        return state.articles;
    },
    favorites: state => {
        return state.favorites;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
};