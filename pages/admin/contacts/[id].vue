<script setup>
// define page meta data
definePageMeta({
    middleware: 'auth',
    layout: 'admin',
})

const route = useRoute()


const {data: contact, error} = await useFetch(() => {
    return '/api/admin/contacts/' + route.params.id
})
const isRead = ref(contact.value ? Boolean(contact.value.is_read)  : false)



watch(isRead, async () => {
    const {data: res, error} = await useFetch('/api/admin/contacts/' + route.params.id, {
        method: 'PUT',
        body: {
            is_read: isRead.value
        }
    })
})


onUpdated(()=>{

})



</script>

<template>
    <main class="admin-contacts-page">
        <section class="section">
            <div class="container">
                <h2 class="d-inline-block section-title">
                    Contact from {{ contact.name }}
                </h2>
                <p>
                    <strong class="mr-25">Message Read: </strong>
                    <div class="toggle-switch ">
                        <input type="checkbox" v-model="isRead" id="is-read">
                        <label for="is-read"></label>
                    </div>

                </p>

                <p>
                    <strong>Email: </strong> {{ contact.email }}
                </p>
                <p>
                    <strong>Message: </strong>
                    {{ contact.message }}
                </p>

            </div>
        </section>

    </main>
</template>
