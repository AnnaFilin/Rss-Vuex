<template>
    <div >
        <div >
            <h1>Favorites</h1>
        </div>  
        <div>
            <ul 
                v-if="favorites && favorites.length"
                class="list-group">
                <li v-for="feed in favorites" :key="feed.title">
                    <ul>
                        <li v-for="article in feed.items" :key="article.title" style="list-style-type: none">
                            <div class="feed-content">
                                <div > 
                                    <h2 >{{article.title}}</h2>
                                    <div  v-html="article.content" />
                                    <a 
                                        :href="article.link"
                                        target="_blank"
                                        rel="noopener"
                                    
                                    >
                                        View Original
                                    </a>
                                </div>
                                <div></div>
                                <div>
                                    <img class="thumbnail" :src="article.enclosure.url" />
                                </div>
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>

</template>


<script>
    import {mapGetters} from 'vuex';

    export default {
        // data() {
        //     return {
        //         articles: []
        //     }
        // },


        computed: {
            favorites() {
               return this.$store.getters.favorites;
            }
        },



        // created() {
        //     this.getAtricles();
        // },

        // mounted() {
        //     this.getAtricles();
        // },

        methods: {
            ...mapGetters({
                favorites: 'favorites'
            }),

            addToArticles(feed) {
                 
            },

            // getFavorites() {
            //     console.log('getting favorites...');
            //     //this.$store.getters.favorites;
            //     this.favorites. this.articles
                
            // },

        }

    }
</script>


<style scoped>
    .header {
        display: grid;
        grid-template-columns: 20% 60% auto;
        grid-gap: 20px;
        padding-bottom: 20px;
        margin-bottom: 10px; 
        border-bottom: solid 1px black;
    }
    .feed-content {
        display: grid;
        grid-template-columns: 45% 30% auto;
        grid-gap: 20px;
        margin: 20px;
    } 

</style>