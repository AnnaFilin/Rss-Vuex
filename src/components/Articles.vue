<template>
    <div >
        <div >
            <h1>{{articles.title}}</h1>
        </div>  
        <div>
            <ul 
                v-if="articles.items && articles.items.length"
                class="list-group"   
            >
                    <li v-for="article in articles.items" :key="article.title" style="list-style-type: none">
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
                            <div v-if="article.enclosure">
                                <img class="thumbnail" :src="article.enclosure.url" />
                            </div>
                        </div>
                    </li>
            </ul>
        </div>
    </div>

</template>


<script>
    import {mapGetters} from 'vuex';

    export default {
        computed: {
            articles() {
               return this.$store.getters.articles;
            }
        },



        methods: {
            ...mapGetters({
                articles: 'articles'
            }),

            // getAtricles() {
            //     console.log('getting articles...');
            //     this.$store.getters.articles;
            // }
        }

    }
</script>


<style>
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
    .thumbnail {
        max-width: 300px;
    }

</style>