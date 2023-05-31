<script setup>
const props = defineProps({
    tabs : Array
}) 

const activeTab = ref(0)


</script>

<template>
    <div class="tabs-wrapper" :class="{ 'tabs-vertical' : $attrs.vertical }" >
        <div class="tabs">
            <div class="tab"
                v-for="(tab , index) in tabs"
                @click="activeTab = index" 
                :class="{ 'active' : activeTab == index}"
                >
                {{ tab }} 
            </div>
        </div>

        <div class="tabs-content-container">
            <slot name="content"  :activeTab="activeTab" ></slot>
        </div>

    </div>

</template>
