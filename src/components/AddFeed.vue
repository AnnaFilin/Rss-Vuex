
<template>
    <form class="add-feed" @submit.prevent="onSubmit">
        <h2 class="mb-4">
            Add New Feed
            <button type="button" class="btn btn-default btn-md" @click="closeForm">
                <span class="glyphicon glyphicon-remove" @click="closeForm" aria-hidden="true"></span>
            </button>   
        </h2>
        <div class="form-group">
            <label for="description">Feed's Names</label>
            <input 
                type="text"
                id="description"
                class="form-control"
                v-model="description">
        </div>

        <div class="form-group">
            <label for="feedUrl">URL</label>
            <input 
                type="text"
                id="feedUrl"
                class="form-control"
                v-model="feedUrl">
        </div>

        <div class="wrapper">
            <button class="add"
                type="submit"
                >
                    Add
            </button>
        </div>

    </form>
</template>


<script>
     import { mapActions} from 'vuex';
     import axios from 'axios';
     import Parser from 'rss-parser';

     export default {
        props: ['isFormOpen'],

        data() {
            return {
                description: null,
                feedUrl: null,
            }
        },    
        
        methods: {
            ...mapActions({
               addFeed: 'addFeed' 
            }),

            async onSubmit() {
                let createdFeed = {
                    description: this.description,
                    feedUrl: this.feedUrl,
                };
                console.log('created feed : ' + createdFeed);
               // let  feed  = await axios.get('./.netlify/functions/singleFeed');
                const parser = new Parser();
                let feed = await parser.parseURL(createdFeed.feedUrl);
               
                console.log('extracted  feed : ' + feed);
                this.$store.dispatch('addFeed', feed);
                this.description = null;
                this.feedUrl = null;
            },
            closeForm() {
                this.$emit('closeForm');
            }
        }
    }    
</script>


<style scoped>
 /*   input {
        background: white;
        border: solid 1px lightgray;
        margin: 5px;
    }
    
    .add-feed {
        margin: 10px;
        background: whitesmoke;
        border: 15px solid darkblue;
        padding: 10px;
    }*/
    .container {
        border: 1px solid teal;
       
        max-width: 90%;
    }
    .form-group {
        
        display: grid;
        grid-template-columns: 25% 65%;
        grid-gap: 10px;
        padding: 10px;
    }
  /*  .wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .add {
        background: white;
        padding: 10px 50px 10px 50px;
        border: 1px solid lightgrey;

    }*/
</style>










