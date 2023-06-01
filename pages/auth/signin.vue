<script setup>
definePageMeta({
    middleware: 'guest'
})


const form = reactive({
    email: '',
    password: ''
})


const { signin } = useAuth()

const attemptSignin = async () => {
    let res = await signin(form)
    console.log(res);
}



</script>

<template>
    <div class="site-content">        
        <div class="container">
            <section class="section mb-50">
                <header class="section-header section-header-small">
                    <h1 class="page-title font-size-3xl">Sign In If you have the credentials </h1>
                    <p class="section-subtitle">
                        <strong>Dad Joke of the day: </strong>
                        <span>"Why do fathers take an extra pair of socks when they go golfing?" "In case they get a hole in one!"</span>
                    </p>
                </header>

                <form @submit.prevent="attemptSignin" style="max-width: 530px">

                    <input type="text" v-model="form.email" class="input" placeholder="Email" />
                    <input type="password" v-model="form.password" class="input" placeholder="Password" />
                    <button type="submit" class="button">Sign in</button>

                </form>
            </section>
        </div>

    </div>
</template>