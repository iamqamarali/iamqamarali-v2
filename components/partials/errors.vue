
<script setup>
defineProps(['errors'])


</script>

<template>
    <div class="errors text-danger" v-if="errors && errors.length">
        <ul class="font-size-base">
            <li v-for="error in errors" :key="error">
                {{ error }}
            </li>
        </ul>
    </div>
</template>
