<template>
    <div class='container'>
        <div class='blue-page__quote-list quote-list'>
            <swiper
                :slides-per-view="2.5"
                :space-between="40"
                :modules="state.modules"
                :navigation="{
                    prevEl: prev,
                    nextEl: next,
                }"
                :pagination="true"
            >
                <swiper-slide v-for="(person, index) in state.persons" :key="index">
                    <Quote
                        class="list__quote quote-list__quote"
                        text='Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod tempor incidi ut labore et dolore magna aliqua.'
                        :name="person.name"
                        :src="person.src"
                        :icon_src='person.icon'
                        :icon_text='person.iconText'
                    />
                </swiper-slide>
            </swiper>

            <button ref="prev" class='quote-list__button-left' type="button"></button>
            <button ref="next" class='quote-list__button-right' type="button"></button>
        </div>
    </div>
</template>

<script setup>
import Quote from './Quote.vue';
import { ref, reactive } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Navigation } from 'swiper/modules';

const prev = ref(null);
const next = ref(null);

const state = reactive({
    modules: [Pagination, Navigation],
    persons: [
        {
            src: '/src/assets/images/sign_avatar2.png',
            name: 'Luna lovegood',
            icon: '/src/assets/svg/spotify1.svg',
            iconText: 'Spotify'
        },
        {
            src: '/src/assets/images/sign_avatar3.png',
            name: 'Emily Blunt',
            icon: '/src/assets/svg/google_podcast_icon.svg',
            iconText: 'Google Podcast'
        },
        {
            src: '/src/assets/images/sign_avatar4.png',
            name: 'Mia Winters',
            icon: '/src/assets/svg/spotify1.svg',
            iconText: 'Spotify'
        },
        {
            src: '/src/assets/images/sign_avatar2.png',
            name: 'Luna lovegood',
            icon: '/src/assets/svg/spotify1.svg',
            iconText: 'Spotify'
        },
        {
            src: '/src/assets/images/sign_avatar3.png',
            name: 'Emily Blunt',
            icon: '/src/assets/svg/google_podcast_icon.svg',
            iconText: 'Google Podcast'
        },
        {
            src: '/src/assets/images/sign_avatar4.png',
            name: 'Mia Winters',
            icon: '/src/assets/svg/spotify1.svg',
            iconText: 'Spotify'
        }
    ]
})
</script>

<style>

</style>
