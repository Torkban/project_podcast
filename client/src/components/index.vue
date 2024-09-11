<script>
import button1 from './button1.vue'
import tableLinks from './table-links.vue'
import mainHeader from './main-header.vue'
import customFooter from './footer2.vue'
import card from './card.vue'
import albumSlider from './albumSlider.vue'
import album from './album.vue'
import quote from './quote.vue'
import quoteList from './quote_list.vue'

export default {
    components: {
        button1,
        tableLinks,
        mainHeader,
        customFooter,
        card,
        albumSlider,
        album,
        quote,
        quoteList
    },
    data() {
    return {
      tags: ["women's"]
    };
    },
    methods: {
    scrollToSection(sectionId) {
      const section = document.getElementById(sectionId);
      section.scrollIntoView({ behavior: 'smooth' });
    },
  },
}
</script>

<template>
    <head>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat Alternates">
    </head>
    <body>

        <section class = 'main-page'>
            <mainHeader/>
            <h1 class = 'mainTitle'>Your Daily</h1>
            <h1 class = 'mainTitle selected'>Podcast</h1>
            <p>We cover all kinds of categories and <br> a weekly special guest.<br><br></p>
            <button1 message="subscribe"  @click="scrollToSection('part1')"/>
            <albumSlider/>
            <tableLinks/>
        </section>
        <section class = 'white-page'>
            <h1>Talk. Listen. Get inspired<br>by every minute of it.</h1>
            <div class = 'ideas'>
                <div class = 'idea'><img src="../assets/svg/Illustration 01.svg" alt="Illustration 01">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. </p></div>
                <div class = 'idea'><img src="../assets/svg/Illustration 02.svg" alt="Illustration 02"> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. </p></div>
            </div>
            <quote class="white-page__quote" text = 'One of the best daily podcasts that covers every topic on Spotify.' icon_text = 'Social Community Manager' src = "/src/assets/images/sign_avatar1.png" icon_src = '/src/assets/svg/spotify1.svg' name = 'John Smith'/>
        </section>
        <section class = 'blue-page'>
            <h1>What our listeners say</h1>
            <h2>Their experience throughout every platform</h2>
            <quoteList/>
        </section>
        <section class = 'first-page' id = 'part1'>
            <div class = 'title'>
                <h1>Membership benefits</h1>
                <h2>Become our sponsor and get all benefits</h2>
            </div>
            <div class = 'first-page__form'>
                <card titleText = 'Topick by Request' text = 'Lorem ipsum dolor sit amet consectet pis
                    cing elit, sed do eiusmod tempor.' src = '/src/assets/svg/doodle.svg'/>
                <card titleText = 'Exclusive Content' text = 'Lorem ipsum dolor sit amet consectet pis
                    cing elit, sed do eiusmod tempor.' src = '/src/assets/svg/Shining stars.svg'/>
                <card titleText = 'Join the Community' text = 'Lorem ipsum dolor sit amet consectet pis
                    cing elit, sed do eiusmod tempor.' src = '/src/assets/svg/Face 1.svg'/>
                <card titleText = 'Livestreaming Access' text = 'Lorem ipsum dolor sit amet consectet pis
                    cing elit, sed do eiusmod tempor.' src = '/src/assets/svg/Face 5.svg'/>
                <card titleText = 'Exclusive Episides & Merch' text = 'Lorem ipsum dolor sit amet consectet pis
                    cing elit, sed do eiusmod tempor.' src = '/src/assets/svg/Fire.svg'/>
                <card titleText = 'And much more!' text = 'Lorem ipsum dolor sit amet consectet pis
                    cing elit, sed do eiusmod tempor.' src = '/src/assets/svg/star.svg'/>
            </div>
            <button1 message="see Pricing"/>
        </section>
        <section class = 'second-page' >
            <div class = 'title'>
                <h1>Recent Episodes</h1>
                <h2>Available on your favorite platform</h2>
            </div>
            <div class = 'second-page__form'>
                <album text = 'Lorem ipsum dolor sit amet, consectetur addpiscing elit. Curabitur ac ultricies odio.' titleText = 'Pandemic Becoming Endemic' src = '/src/assets/images/cover1.png'  number = '6'  :tags_list = "['covid-19', 'health']"/>
                <album text = 'Lorem ipsum dolor sit amet, consectetur addpiscing elit. Curabitur ac ultricies odio.' titleText = 'Tesla Autopilot Controversy' src = '/src/assets/images/cover2.png'  number = '5'  :tags_list = "['automation', 'tech']"/>
                <album text = 'Lorem ipsum dolor sit amet, consectetur addpiscing elit. Curabitur ac ultricies odio.' titleText = "Women's Right? Is it alright?" src = '/src/assets/images/cover3.png'  number = '4' :tags_list = '["women&#039;s right"]'/>
                <album text = 'Lorem ipsum dolor sit amet, consectetur addpiscing elit. Curabitur ac ultricies odio.' titleText = 'How to Deal with Self-Confidences' src = '/src/assets/images/cover4.png'  number = '3'  :tags_list = "['self-esteem', 'health']"/>
                <album text = 'Lorem ipsum dolor sit amet, consectetur addpiscing elit. Curabitur ac ultricies odio.' titleText = 'Type of Social Classes of People' src = '/src/assets/images/cover5.png'  number = '2'  :tags_list = "['social class', 'wealth']"/>
                <album text = 'Lorem ipsum dolor sit amet, consectetur addpiscing elit. Curabitur ac ultricies odio.' titleText = 'Are you a Perplexed Mind Person?' src = '/src/assets/images/cover6.png'  number = '1'  :tags_list = "['mind behavior', 'health']"/>
            </div>
                <button1 message="browse all episodes"/>
        </section>
    </body>
    <footer>
        <customFooter/>
    </footer>
</template>

<style>
body {
    padding: 0;
    margin: auto;
    width: 1440px;
    display: flex;
    flex-direction: column;
    overflow: visible;
    position: relative;
}

.main-page {background-color: #F7EDE8;
width: 1440px;
padding-top: 24px;
padding-bottom:140px;
}

.white-page {
    width: 1440px;
    padding: 140px;
    padding-top: 140px;
    padding-bottom:140px;
}

.blue-page {
    width: 1440px;
    padding: 140px;
    padding-left: 0;
    padding-right: 0;
    padding-bottom: 100px;
    background-color: #EDF3F7;
}

.ideas {
    display: flex;
    width: 1160px;
    margin: auto;
    justify-content: space-between;
    font-size: 16px;
    font-family: 'Montserrat Alternates';
    padding-top: 100px;
}

.idea {
    width: 472px;
}

.idea img {
    padding-bottom: 40px;
}
/* @font-face {
    font-family: 'Montserrat Alternates';
    src: url("https://fonts.googleapis.com/css?family=Montserrat+Alternates");
} */
.mainTitle {
    font-size: 96px;
}

.title{
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    padding: 0;
    margin:0;
    margin-bottom: 100px;
}

.first-page {
    color: black;
    width: 1440px;
    padding-top: 140px;
    padding-bottom:140px;
}

a {
  font-size: 23px;
  margin-top: auto;
  color:black;
  font-weight: bold;
}

h1 {
    font-weight: 900;
    font-size: 59px;
    font-family: 'Montserrat Alternates';
    margin:0;

}

h2 {
    font-size: 22;
    color:#4d4d4d;
    font-family: 'Montserrat Alternates';
    margin:0;
    margin-top: 20px;
}

.first-page__form {
    display: grid;
    grid-template-columns: auto auto auto;
    padding: 0;
    margin: auto;
    margin-bottom: 50px;
}

.second-page {background-color: #F7EDE8;
width: 1440px;
padding-top: 140px;
padding-bottom:140px;
}

.second-page__form {
    display: grid;
    grid-template-columns: auto auto;
    grid-auto-flow: row;
    width: 1190px;
    gap:20px;
    padding: 0;
    margin: auto;
    margin-bottom: 100px;
}
.selected {
    color: #CD4631;
}
</style>

