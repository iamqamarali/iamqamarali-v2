<script setup>
// define page meta data
definePageMeta({
    middleware: 'auth',
    layout: 'admin',
})

const { signout } = useAuth()

</script>

<template>
    <main class="dashboard">
        <h1>Dashboard</h1>

        <p>This route should be protected</p>

        <button @click="signout">Logout</button>
    </main>
</template>
