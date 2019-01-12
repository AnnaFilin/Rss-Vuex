<template>
    <div>
        <div class="list-group">
            <ul class="list-group-item">
                <router-link to="/favorites" activeClass="active" tag="li" style="list-style-type: none">
                    <a>
                        Favorites
                    </a>
                </router-link>
                <router-link to="/articles" activeClass="active" tag="li" style="list-style-type: none">
                    <a>
                        Feeds
                        <button type="button" class="btn btn-default btn-md" @click="openAddForm">
                            <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>
                        </button>    
                    </a>
                </router-link>
            </ul>
        </div><!-- /.navbar-collapse -->

       
            <FeedList :feeds="feeds"></FeedList>
        
        
            <AddFeed v-if="isFormOpen === true"  @closeForm="handleCloseForm"></AddFeed>
        
    </div>
</template>


<script>
   
    import FeedList from './FeedList.vue';
    import AddFeed from './AddFeed.vue';

    export default {
        data() {
            return {
                isFormOpen: false
            }
        },  
        components: {
            FeedList,
            AddFeed
        },

        computed: {
            feeds() {
                return this.$store.getters.feeds;
            }
        },

        // mounted: {

        // },

        methods: {
            
            openAddForm() {
                this.isFormOpen = true;
            },
            handleCloseForm() {
                this.isFormOpen = false;
            },
           
        }
        // methods: {
        //     ...mapActions({
        //         randomizeStocks: 'randomizeStocks',
        //         fetchData: 'loadData'
        //     }),
        //     endDay() {
        //         this.randomizeStocks();
        //     },
        //     saveData() {
        //         const data = {
        //             funds: this.$store.getters.funds,
        //             stockPortfolio: this.$store.getters.stockPortfolio,
        //             stocks: this.$store.getters.stocks
        //         };
        //         this.$http.put('data.json', data);
        //     },
        //     loadData() {
        //         this.fetchData();
        //     }
        // }
    }
</script>
