<script setup>
// define page meta data
definePageMeta({
    middleware: 'auth',
    layout: 'admin',
})

const route = useRoute()

const page = useState(() => route.query.page ? parseInt(route.query.page) : 1 )

const {data: contacts, error} = await useFetch(()=>{
    return '/api/admin/contacts?page=' + page.value + '&limit=20'
})


</script>

<template>
    <main class="admin-contacts-page">
        <section class="section">
            <div class="container">
                <header>
                    <h1 class="d-inline-block">Contacts</h1>
                </header>


                <table class="mt-75">
                    <thead>
                        <th>ID</th>
                        <td>Is Read</td>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Message</th>
                        <th>Actions</th>
                    </thead>
                    <tbody>
                        <tr v-for="contact in contacts">
                            <td>{{ contact.id }}</td>
                            <td>{{ contact.is_read ? 'Read' : '' }}</td>
                            <td>{{ contact.name }}</td>
                            <td>{{ contact.email }}</td>
                            <td>{{ contact.message }}</td>
                            <td>
                                <div class="buttons-group">
                                    <NuxtLink :to="`/admin/contacts/`+ contact.id" class="button button-sm" >Show</NuxtLink>
                                    <button @click="deleteContact(contact.id)" class="button button-sm">Delete</button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <button @click="page++" class="mt-75 float-right button button-black">Load More</button>
                <div class="clear-both"></div>

            </div>
        </section>

    </main>
</template>
