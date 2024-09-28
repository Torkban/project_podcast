<template>
    <div class='quote'>
        <p class='quote__text'>{{text}}</p>

        <div class='quote__sign'>
            <img :src=src alt="avatar">
            <p>{{name}},</p>
            <img :src=icon_src alt="icon">
            <p>{{icon_text}}</p>
        </div>
    </div>
</template>
<script setup>
const props = defineProps({
    text: {
        type: String,
        required: true
    },

    icon_text: {
        type: String,
        required: true
    },

    src: {
        type: String,
        required: true
    },

    icon_src: {
        type: String,
        required: true
    },

    name: {
        type: String,
        required: true
    }
});
</script>

<style>

</style>
