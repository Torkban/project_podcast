<template>
<div class = 'container'>
    <div class = 'blue-page__quote-list quote-list'>
        <quote class="list__quote quote-list__quote " text = 'Lorem ipsum dolor sit amet consectet
        piscing elit, sed do eiusmod tempor incidi ut labore et dolore magna aliqua.' name = 'Luna lovegood' src = "/src/assets/images/sign_avatar2.png"  icon_src = '/src/assets/svg/spotify1.svg' icon_text = 'Spotify'/>
        <quote class="list__quote quote-list__quote" text = 'Lorem ipsum dolor sit amet consectet
        piscing elit, sed do eiusmod tempor incidi ut labore et dolore magna aliqua.' name = 'Emily Blunt' src = "/src/assets/images/sign_avatar3.png" icon_src = '/src/assets/svg/google_podcast_icon.svg' icon_text = 'Google Podcast'/>
        <quote class="list__quote quote-list__quote" text = 'Lorem ipsum dolor sit amet consectet
        piscing elit, sed do eiusmod tempor incidi ut labore et dolore magna aliqua.' name = 'Mia Winters' src = "/src/assets/images/sign_avatar4.png" icon_src = '/src/assets/svg/spotify1.svg' icon_text = 'Spotify'/>
    </div>
    <input type="button" value="11" class = 'quote-list__button-left'>
    <input type="button" value="22" class = 'quote-list__button-right'>
</div>
</template>
<script>
import quote from './quote.vue'

export default {
    components: {
        quote
    },
    mounted() {
        var buttonLeft = document.querySelector('.quote-list__button-left');
        var buttonRight = document.querySelector('.quote-list__button-right');
        var movable = document.querySelector('.quote-list');
            buttonLeft.addEventListener('click', () => {
                movable.style.transform = 'translateX(-570px)';
                    // Сдвиг влево на 570 пикселей
            });

             buttonRight.addEventListener('click', () => {
                movable.style.transform = 'translateX(0)';
                // Возврат на 0
            });

        }

}

</script>

<style>
.container {
    position: relative;
    height: 468px;
    overflow: hidden;
    margin-top: 100px;
    padding-left: 140px;
}

.blue-page__quote-list {
    bottom: 108px;
}

.quote-list .quote__text {
    font-size: 22px;
    width: 490px;
}

.quote-list {
    display: flex;
    gap: 20px;
    position: absolute;
    /* margin-left: 140px; */
    transition: 1s;
}

.quote-list__button-left {
    position: absolute;
    bottom: 0px;
    left: 140px;
    border-radius: 50%;
    border-width: 2.5px;
    margin-top: auto;
    border-color: #CD4631;
}


.quote-list__button-left:click {
    transform: translateX(400px);
}


.quote-list__button-right {
    position: absolute;
    bottom: 0px;
    left: 140px;
    margin-left: 20px;
    border-radius: 50%;
    border-width: 2.5px;
    border-color: #CD4631;
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
}

</style>
