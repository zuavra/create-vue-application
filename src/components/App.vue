<template>
    <div class="app">
        App
    </div>
</template>

<script>
  export default {
    name: 'App',

    inject: [
      'http',
    ],
  };
</script>

<style src="@/css/index.scss"></style>
<style scoped src="@/css/app.scss"></style>
