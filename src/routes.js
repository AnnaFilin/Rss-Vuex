import Home from './components/Home.vue'
import Favorites from './components/Favorites.vue'
import Articles from './components/Articles.vue'

export const routes = [
    { path: '', component: Home },
    { path: '/favorites', component: Favorites },
    { path: '/articles', component: Articles }
];