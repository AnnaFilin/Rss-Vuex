<!--
<template>
    <div>
        <ul v-if="feeds && feeds.length" class="nav navbar-nav" >
            <router-link to="/articles" v-for="feed in feeds" :key="feed.title" tag="li" activeClass="active">
                <a>
                    {{feed.title}}
                </a>  
                
            </router-link> 
        </ul>
    </div>
</template>
-->

<template>
    <div>
        <ul v-if="feeds && feeds.length" class="nav navbar-nav" >
            <li to="/articles" v-for="feed in feeds" :key="feed.title" activeClass="active">
                <a 
                    href="#"
                    @click="selectFeed(feed)">
                    {{feed.title}}
                    <span @click="addToFavorites(feed)" class="glyphicon glyphicon-plus" aria-hidden="true"></span>
                </a>      
            </li> 
        </ul>
    </div>
</template>


<script>
    import {mapActions} from 'vuex';

    export default {

        computed: {
            feeds() {
                return this.$store.getters.feeds;
            } 
        },

        // watch: {
        //     watchFeeds() {
        //         return ths.$store.getters.feeds;
        //     }
        // },
        
       
        methods: {
            ...mapActions({
                chooseFeed: 'chooseFeed',
                addFavorites: 'addFavorites'
            }),
            selectFeed(feed) {
                console.log('Feed selected');
                console.log(feed.title);
                this.$store.dispatch('chooseFeed', feed);
            },
            addToFavorites(feed) {
                console.log('adding to favorites');
                this.$store.dispatch('addFavorites', feed);
            }
        }
    }
</script>

<style >

</style>

