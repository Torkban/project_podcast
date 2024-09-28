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
</script>

<style>

</style>
