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
    <div>
        <h3>You are at Sign in </h3>

        <form @submit.prevent="attemptSignin">

            <input type="text" v-model="form.email" placeholder="Email" />
            <input type="password" v-model="form.password" placeholder="Password" />
            <button type="submit">Sign in</button>

        </form>
    </div>
</template>