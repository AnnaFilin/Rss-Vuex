<template>
	<div id="app" class="main-content">
		<Sidebar style="border-right: 1px solid #2c3e50"></Sidebar>
		<router-view></router-view>
	</div>
</template>

<script>
	import axios from 'axios';
	import Sidebar from './components/Sidebar.vue';

	export default {

		data() {
			return {
				feeds: []
			}
		},

		components: {
			Sidebar
		},

		created() {
			this.getFeeds();
		},

		methods: {
			async getFeeds() {
				let { data } = await axios.get('./.netlify/functions/feeds');
				this.feeds = data;
				this.$store.dispatch('initFeeds', data);
			}
		},

	}
</script>

/* eslint-disable no-alert, no-console */


<style>
	 #app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		/*text-align: center;*/
		color: #2c3e50;
		margin: 20px;
	} 

	.main-content {
		display: grid;
        grid-template-columns: 20% 70%;
        grid-gap: 20px;
	}
</style>
