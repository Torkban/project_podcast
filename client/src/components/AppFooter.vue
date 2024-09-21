<template>
<div class = 'footer-grid'>
            <div class = 'footer-grid__sec1'>
                <div class = 'footer-grid__podOfCast'>
                    <a href="">
                        <img src="../assets/svg/logoPodcast.svg" alt="podcast"></a>
                    &#169; 2021.
                </div>
                <p class = 'footer-grid__sec1-Text'>Lorem ipsum dolor sit amet, consectetur adpiscing elit.</p>
                <div class = 'footer-grid__icons1'>
                    <a href=""><img src="../assets/svg/twitter.svg" alt="twitter_aka_X"></a>
                    <a href=""><img src="../assets/svg/instagram.svg" alt="instagram"></a>
                    <a href=""><img src="../assets/svg/tiktok.svg" alt="tik-tok"></a>
                </div>
            </div>
            <div class = 'footer-grid__sec2'>
                <a href="">About</a>
                <a href="" class = 'p_selected'>Testimonials</a>
                <a href="">Features</a>
            </div>
            <div class = 'footer-grid__sec3'>
                <a href="" class = 'p_selected'>Episodes</a>
                <a href="" >Pricing</a>
                <a href="">Blog</a>
            </div>
            <div class = 'footer-grid__sec4'>
                <p>Listen to episodes on your fav platform:</p>
                <div class = 'footer-grid__platforms'>
                    <a href=""><img src="../assets/svg/Google Podcast.svg" alt="Google_podcast"></a>
                    <a href=""><img src="../assets/svg/spotify.svg" alt="Spotify"></a>
                    <a href=""><img src="../assets/svg/Youtube.svg" alt="Youtube"></a>
                </div>
                <p>App avialable on:</p>
                <div class = 'footer-grid__appShops'>
                    <a href=""><img src="../assets/svg/app_store.svg" alt="Appstore"></a>
                    <a href=""><img src="../assets/svg/google_play.svg" alt="Gstore"></a>
                </div>
            </div>

        </div>
        <div class = 'footer-grid__sec-Bottom'>
                <p>&#169; 2022 All Right Reserved. <span class = 'p_selected leftSpace'>Pod of Cast</span></p>
                <div class = 'footer-grid__policy'>
                    <a href="">Terms</a>
                    <p> . </p>
                    <a href="">Privacy</a>
                </div>
        </div>

</template>
<style >


footer {
    margin-left: auto;
    margin-right:auto;
    border-top: solid 2px gray;
    width: 1440px;
    padding: 0;
    font-family: 'Montserrat Alternates';
    font-weight: 500;
}

footer a {
    font-size: 16px;
    font-weight: 500;
}

.footer-grid {
    display:grid;
    grid-template-columns: 275 auto auto 375;
    grid-template-rows: auto;
    width: 1160;
    margin-left: 140px;
    margin-right: 140px;
    padding-top: 150px;
    padding-bottom: 150px;
     gap: 100px;
}

.footer-grid__sec1 {
    grid-column: 1;
    display: flex;
    flex-direction: column;
    text-align: left;
}

.footer-grid__podOfCast {
    /* display: flex;                при включении не работает выравнивание по побочной оси */
    margin-bottom: 40px;
}

.podOfCast a {
    margin-right: 24px;
}

.footer-grid__sec1 p {
    margin-bottom: 40px;
    font-size: 14px;
}

.footer-grid__sec1-Text {
    width: 275px;
}

.footer-grid__icons1 a img {
    margin-right: 20px;
}

.footer-grid__sec2 {
    grid-column: 2;
    display: flex;
    flex-direction: column;
    text-align: left;
    justify-content: flex-start;
}

.footer-grid__sec2 a {
    margin: 0;
    margin-bottom: 20px;
}

.footer-grid__sec3 {
    grid-column: 3;
    display: flex;
    flex-direction: column;
    text-align: left;
}

.footer-grid__sec3 a {
    margin: 0;
    margin-bottom: 20px;
}

.footer-grid__sec4 {
    grid-column: 4;
    display: flex;
    flex-direction: column;
    text-align: left;
    justify-content: space-between;
}

.footer-grid__sec4 p {
    margin: 0;
    margin-bottom: 20px;
    font-size: 16px;
}


.footer-grid__platforms {
    margin-bottom: 60px;
    margin-top: 9px;
    display: flex;
    justify-content: space-between;
}


.footer-grid__appShops a img {
    width: 36px;
    height: 36px;
    margin-right: 20px;;
}

.footer-grid__sec-Bottom {
    display: flex;
}

.leftSpace {
    margin-right: auto;
}

.p_selected {
    color: #CD4631;
}

.footer-grid__sec-Bottom {
    width: 1160px;
    border-top: solid 2px gray;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 50px;
    display: flex;
    font-size: 12px;
    justify-content: space-between;
}

.footer-grid__policy {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap: 10px;

}

.footer-grid__policy a {
    margin: 0;
    font-size: 12px;
    /* margin-left: 10px; */
}



</style>
