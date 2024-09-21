<template>
    <div class='container'>
        <div class='blue-page__quote-list quote-list'>
            <swiper
                :slides-per-view="2.5"
                :space-between="40"
                :navigation="{
                    prevEl: prev,
                    nextEl: next,
                }"
                :pagination="true"
                :modules="modules"
            >
                <swiper-slide v-for="(person, index) in persons" :key="index">
                    <quote
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

<script >
import quote from './quote.vue';
import { ref, onMounted } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/swiper-bundle.css';

// const prev = ref(null);
// const next = ref(null);
// const onSwiper = (swiper) => {
//         console.log(swiper);
//         };
//         const onSlideChange = () => {
//         console.log('slide change');
//         };

// const persons = ref(
//     [
//         {src:'/src/assets/images/sign_avatar2.png', name: 'Luna lovegood', icon: '/src/assets/svg/spotify1.svg', iconText: 'Spotify'},
//         {src: '/src/assets/images/sign_avatar3.png', name: 'Emily Blunt', icon: '/src/assets/svg/google_podcast_icon.svg', iconText: 'Google Podcast'},
//         {src: '/src/assets/images/sign_avatar4.png', name: 'Mia Winters', icon: '/src/assets/svg/spotify1.svg', iconText: 'Spotify'},
//         {src: '/src/assets/images/sign_avatar2.png', name: 'Luna lovegood', icon: '/src/assets/svg/spotify1.svg' , iconText: 'Spotify'},
//         {src: '/src/assets/images/sign_avatar3.png', name: 'Emily Blunt', icon: '/src/assets/svg/google_podcast_icon.svg', iconText: 'Google Podcast'},
//         {src: '/src/assets/images/sign_avatar4.png', name: 'Mia Winters', icon: '/src/assets/svg/spotify1.svg', iconText: 'Spotify'}
//     ],
// )

// onMounted(() => {

// })

// function onSwiperInit(swiper) {
//             swiperInstance = swiper; // Сохраняем экземпляр Swiper
//             console.log('Swiper initialized:', this.swiperInstance);
// }

// function goToPrevSlide() {
//     if (this.swiperInstance) {
//         swiperInstance.slidePrev();
//         }
// }

// function goToNextSlide() {
//     if (swiperInstance) {
//         swiperInstance.slideNext();
//     }
// }

export default {
       components: {
        quote,
        Swiper,
        SwiperSlide,
    },
    data() {
        return {
            swiperInstance: null, // Для хранения экземпляра Swiper
            persons: [
                {src:'/src/assets/images/sign_avatar2.png', name: 'Luna lovegood', icon: '/src/assets/svg/spotify1.svg', iconText: 'Spotify'},
                {src: '/src/assets/images/sign_avatar3.png', name: 'Emily Blunt', icon: '/src/assets/svg/google_podcast_icon.svg', iconText: 'Google Podcast'},
                {src: '/src/assets/images/sign_avatar4.png', name: 'Mia Winters', icon: '/src/assets/svg/spotify1.svg', iconText: 'Spotify'},
                {src: '/src/assets/images/sign_avatar2.png', name: 'Luna lovegood', icon: '/src/assets/svg/spotify1.svg' , iconText: 'Spotify'},
                {src: '/src/assets/images/sign_avatar3.png', name: 'Emily Blunt', icon: '/src/assets/svg/google_podcast_icon.svg', iconText: 'Google Podcast'},
                {src: '/src/assets/images/sign_avatar4.png', name: 'Mia Winters', icon: '/src/assets/svg/spotify1.svg', iconText: 'Spotify'}
            ],
        };
    },
    mounted() {
        console.log(this.$refs.mySwiper.swiper);
    },
    setup() {
        const prev = ref(null);
        const next = ref(null);
        const onSwiper = (swiper) => {
        console.log(swiper);
        };
        const onSlideChange = () => {
        console.log('slide change');
        };
        return {
        onSwiper,
        onSlideChange,
        modules: [Navigation],
        prev,
        next,
        };
    },
    methods: {
        onSwiperInit(swiper) {
            this.swiperInstance = swiper; // Сохраняем экземпляр Swiper
            console.log('Swiper initialized:', this.swiperInstance);
        },
        goToPrevSlide() {
            if (this.swiperInstance) {
                this.swiperInstance.slidePrev();
                }
        },
        goToNextSlide() {
      if (this.swiperInstance) {
        this.swiperInstance.slideNext();
      }
    },
    },
}
</script>

<style scoped>
.container {
    position: relative;
    height: 468px;
    overflow: hidden;
    margin-top: 100px;
    font-size: 22px;
    /* padding-left: 140px; при включении ломаются пробелы между слайдами */
}

.blue-page__quote-list {
    bottom: 108px;
}

.quote-list >>> .quote__text {
    font-size: 22px;
    width: 490px;
}

.quote-list {
    display: flex;
    gap: 20px;
    /* position: absolute; */
    /* margin-left: 140px; при включении ломаются пробелы между слайдами */
    transition: 1s;
}

.quote-list__button-left {
    position: absolute;
    bottom: 0px;
    left: 140px;
    border-radius: 50%;
    border-width: 2.5px;
    margin-top: auto;
    border-color: #000000;
    padding: 0;
    height: 35px;
    width: 35px;
}

.quote-list__button-left::before {
    content: '';
    width: 10px;
    height: 10px;
    top: 11px;
    left: 12px;
    position: absolute;
    border-top: 3px solid black;
    border-left: 3px solid black;
    transform: rotate(-45deg);
}

.quote-list__button-left:click {
    transform: translateX(400px);
}

.quote-list__button-right {
    position: absolute;
    bottom: 0px;
    left: 140px;
    margin-left: 60px;
    border-radius: 50%;
    border-width: 2.5px;
    border-color: #CD4631;
    padding: 0;
    height: 35px;
    width: 35px;
}

.quote-list__button-right::before {
    content: '';
    width: 10px;
    height: 10px;
    top: 11px;
    left: 8px;
    position: absolute;
    border-top: 3px solid #CD4631;
    border-left: 3px solid #CD4631;
    transform: rotate(135deg);
}

.quote-list__button-left:hover,
.quote-list__button-right:hover,
.quote-list__button-left:hover::before,
.quote-list__button-right:hover::before {
    border-color: gray;
}

.quote-list__quote {
    height: 360px;
    width: 570px;
    /* margin: auto; */
    /* margin-top: 120px; */
    font-family: 'Montserrat Alternates';
    display: flex;
    flex-direction: column;
    justify-content: end;
    padding-bottom: 40px;
    gap: 40px;
    text-align: left;
    font-size: 22px;
}

.quote__sign {
    margin-left: 40px;
    align-self: start;
}

</style>
