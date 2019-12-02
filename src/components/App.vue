<template>
	<div class="app">
		<div class="box">Box 1</div>
		<div class="box">Box 2</div>
		<div class="box">Box 3</div>
	</div>
</template>

<script lang="ts">
	export default {
		name: 'App',

		inject: [
			'http',
		],

		mounted() {
			console.log(this.http);
		},
	};
</script>
