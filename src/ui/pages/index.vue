<script setup lang="ts">
	const {$apiService} = useNuxtApp()
	const users = await $apiService.get<{}>('users')
</script>

<template>
	<div>Hello world!</div>
	<div>{{ users }}</div>
</template>

<style scoped>

</style>
