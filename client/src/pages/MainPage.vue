<template>
    <app-header />

    <main>
        <!--
        <section class='main-page'>
            <MainHeader/>
            <h1 class='main-page__title'>Your Daily</h1>
            <h1 class='main-page__title selected'>Podcast</h1>
            <p>We cover all kinds of categories and <br> a weekly special guest.<br><br></p>
            <AppButton @click="scrollToSection('part1')">subscribe</AppButton>
            <AlbumSlider/>
        </section>

        <section class='white-page'>
            <h1>Talk. Listen. Get inspired<br>by every minute of it.</h1>

            <div class='white-page__ideas'>
                <div class='white-page__idea'>
                    <img src="../assets/svg/Illustration 01.svg" alt="Illustration 01">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio.</p>
                </div>

                <div class='white-page__idea'>
                    <img src="../assets/svg/Illustration 02.svg" alt="Illustration 02">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio.</p>
                </div>
            </div>

            <Quote
                class="white-page__quote"
                text='One of the best daily podcasts that covers every topic on Spotify.'
                icon_text='Social Community Manager'
                src="/src/assets/images/sign_avatar1.png"
                icon_src='/src/assets/svg/spotify1.svg'
                name='John Smith'
            />
        </section>

        <section class='blue-page'>
            <h1>What our listeners say</h1>
            <h2>Their experience throughout every platform</h2>
            <QuoteList/>
        </section>

        <section class='first-page' id='part1'>
            <div class='title'>
                <h1>Membership benefits</h1>
                <h2>Become our sponsor and get all benefits</h2>
            </div>

            <div class='first-page__form'>
                <AppCard v-for="(card, index) in cards" :key="index"
                :titleText="card.titleText"
                :text="card.text"
                :src="card.src"
                />
            </div>

            <AppButton>see pricing</AppButton>
        </section>

        <section class='second-page' >
            <div class='title'>
                <h1>Recent Episodes</h1>
                <h2>Available on your favorite platform</h2>
            </div>

            <div class='second-page__form'>
                <AppAlbum v-for="(Album, index) in albums"
                :key="index"
                :album="Album"
                />
            </div>

            <AppButton>browse all episodes</AppButton>
        </section>
        -->
    </main>

    <!-- <AppFooter/> -->
</template>

<script>
/**
import AppButton from './AppButton.vue'
import TableLinks from './TableLinks.vue'
import MainHeader from './MainHeader.vue'
import AppFooter from './AppFooter.vue'
import AppCard from './AppCard.vue'
import AlbumSlider from './AlbumSlider.vue'
import AppAlbum from './AppAlbum.vue'
import Quote from './Quote.vue'
import QuoteList from './QuoteList.vue'

export default {
    components: {
        AppButton,
        TableLinks,
        MainHeader,
        AppFooter,
        AppCard,
        AlbumSlider,
        AppAlbum,
        Quote,
        QuoteList
    },

    data() {
        return {
            tags: ["women's"],

            cards: [
                {titleText:'Topick by Request', text:'Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod tempor.', src:'/src/assets/svg/doodle.svg'},
                { titleText: 'Exclusive Content', text: 'Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod tempor.', src: '/src/assets/svg/Shining stars.svg' },
                {titleText:'Join the Community', text:'Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod tempor.', src:'/src/assets/svg/Face 1.svg'},
                {titleText:'Livestreaming Access', text:'Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod tempor.', src:'/src/assets/svg/Face 5.svg'},
                {titleText:'Exclusive Episides & Merch', text:'Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod tempor.', src:'/src/assets/svg/Fire.svg'},
                {titleText:'And much more!', text:'Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod tempor.', src:'/src/assets/svg/star.svg'}
            ],

            albums: [
                {tags_list:['covid-19', 'health'], text:'Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod tempor.', titleText:'Pandemic Becoming Endemic', src:'/src/assets/images/cover1.png', number:'6'},
                {tags_list: ['automation', 'tech'], text: 'Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod tempor.', titleText:'Tesla Autopilot Controversy', src: '/src/assets/images/cover2.png', number:'5'},
                {tags_list:["women's right"], text:'Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod tempor.', titleText:"Women's Right? Is it alright?", src:'/src/assets/images/cover3.png', number:'4'},
                {tags_list:['self-esteem', 'health'], text:'Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod tempor.', titleText:'How to Deal with Self-Confidences' , src:'/src/assets/images/cover4.png', number:'3'},
                {tags_list:['social class', 'wealth'], text:'Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod tempor.', titleText:'Type of Social Classes of People', src:'/src/assets/images/cover5.png', number:'2'},
                {tags_list:['mind behavior', 'health'], text:'Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod tempor.', titleText:'Are you a Perplexed Mind Person?', src:'/src/assets/images/cover6.png', number:'1'}
            ],
        };
    },

    methods: {
        scrollToSection(sectionId) {
            const section = document.getElementById(sectionId);
            section.scrollIntoView({ behavior: 'smooth' });
        },
  },
}
*/
</script>

