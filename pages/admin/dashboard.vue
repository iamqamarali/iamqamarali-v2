<script setup>
// define page meta data
definePageMeta({
    middleware: 'auth',
    layout: 'admin',
})

const { signout } = useAuth()

</script>

<template>
    <main class="site-content">
        <section class="section">
            <div class="container">
                <h1 >Dashboard</h1>
                <p>This route should be protected</p>

                <button @click="signout">Logout</button>
            </div>
        </section>

    </main>
</template>
