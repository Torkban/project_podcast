<template>
    <button
        :value="message"
        class="button"
        :class="{
            'button--invert': invert,
            'button--small': small,
        }"
    >
        <slot />
    </button>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    invert: {
            type: Boolean,
            default: false,
        },
        small: {
            type: Boolean,
            default: false,
        },
});

// export default {
//     props: {
//         invert: {
//             type: Boolean,
//             default: false,
//         },
//         small: {
//             type: Boolean,
//             default: false,
//         },
//     },
// }
</script>

<style scoped>
.button {
    border-radius: 5px;
    color: white;
    font-size: 14px;
    text-transform: uppercase;
    font-family: 'Montserrat Alternates';
    background-color: black;
    display: inline-block;
    padding: 20px;
    padding-left: 40px;
    padding-right: 40px;
    box-shadow: 5px 5px 0 0 rgba(0,0,0, 0.25);
    /* margin-bottom: 150px; */
    transition-duration: 0.4s;
}

.button--invert {
    color: black;
    background-color: #F7EDE8;
    box-shadow: none;
    border-color: black;
}

.pButton:hover {
    border-radius: 10px;
    transform: scale(1.1);
}

.button--small {
    margin:0;
    margin-left: 20px;
    padding: 10px;
    padding-left: 20px;
    padding-right: 20px;

}

</style>
