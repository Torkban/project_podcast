<template>
    <div class='card'>
        <div class='card__image-container image-container'>
            <img :src='src' alt={{titleText}} class='card__image'>
        </div>

        <a href="">{{titleText}}</a>
        <p>{{text}}</p>
    </div>
</template>

<script setup>
const props = defineProps({
    text: {
        type: String,
        required: true,
        default: 'smth'
    },

    titleText: {
        type: String,
        required: true,
        default: 'link_text'
    },

    src: {
        type: String,
        required: true,
        default: '../assets/svg/doodle.svg'
    }
});
</script>

<style>

</style>
