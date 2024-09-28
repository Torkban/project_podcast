<template>
    <div class='album'>
        <div class='album__content'>
            <img :src="album.src" alt="cover">

            <div class='album__text-content'>
                <span class='album__episode'>Eps.{{album.number}}</span>
                <a href="" class='album__title'>{{album.titleText}}</a>
                <p class='album__description'>{{album.text}}</p>
            </div>
        </div>

        <div class='album__footer'>
            <div class='album__tags'>
                <span v-for="(item, index) in album.tags_list" :key="index" class='album__tag tag'>{{ item }}</span>
            </div>

            <div class='album__authors'>
                <span class='album__hosts'>Hosted by:</span>

                <div class='album__authors-icon'>
                    <img src="../assets/images/avatar1.png" alt="av" class="album__authors-image">
                    <img src="../assets/images/avatar2.png" alt="av" class="album__authors-image">
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
const props = defineProps({
    album: {
            type: Object,
            required: true
        },
});
</script>

<style scoped>

</style>
