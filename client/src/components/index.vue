<script>
import button1 from './button1.vue'
import tableLinks from './table-links.vue'
import mainHeader from './main-header.vue'
import customFooter from './footer2.vue'
import card from './card.vue'

export default {
    components: {
        button1,
        tableLinks,
        mainHeader,
        customFooter,
        card
    }
}
</script>

<template>
    <head>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat Alternates">
    </head>
    <body>

        <section class = 'main-page'>
            <!-- <button1 message="messdfg"/>
            <card/> -->
            <header class = 'top-block'>
                <a href="" class="top-block__logo">
                    <img src="../assets/svg/logo.svg" alt="podcast"></a>
                <nav >
                <ul class = 'navigation'>
                    <li>Episodes</li>
                    <li>About</li>
                    <li>More</li>
                </ul>
                </nav>
                <input type ='button' value = 'recent episodes' class = 'pButton pButton__inverse pButton__nav'>
                <input type ='button' value = 'subscribe' class = 'pButton pButton__nav'>
            </header>

            <h1>Your Daily</h1>
            <h1>Podcast</h1>
            <p>We cover all kinds of categories and <br> a weekly special guest.<br><br></p>
            <input type ='button' value = 'subscribe' class = 'pButton'>
            <div class = 'karusel'>karusel</div>
            <div class = 'table-links'>
                <span class = 'table-links__text'>
                    <p >Supported by:</p>
                </span>
                <div class = 'table-links__logo'>
                    <div class = 'link-logo'><a href="" class = ''><img src="../assets/svg/spotify.svg" height = '34' alt="Spotify" class = 'link-logo__img'></a></div>
                    <div class = 'link-logo'><a href="" class = ''><img src="../assets/svg/Google Podcast.svg" height = '36' alt="Google_podcast" class = 'link-logo__img'></a></div>
                    <div class = 'link-logo'><a href="" class = ''><img src="../assets/svg/Youtube.svg" height = '28' alt="Youtube" class = 'link-logo__img'></a></div>
                </div>

            </div>

        </section>
        <section class = 'first-page'>
          <div class = 'title'>
              <h1>Membership benefits</h1>
              <h2>Become our sponsor and get all benefits</h2>
          </div>
          <div class = 'first-page__form'>
              <div class = 'first-card card'>
                  <div class = 'card__image-container image-container'>
                      <img src="../assets/svg/doodle.svg" alt="doodle">
                  </div>
                  <a href="">Topick by Request</a>
                      <p>Lorem ipsum dolor sit amet consectet pis
                  cing elit, sed do eiusmod tempor.</p>
              </div>
              <div class = 'second-card card'>
                  <div class = 'card__image-container image-container'>
                      <img src="../assets/svg/Shining stars.svg" alt="shining stars">
                  </div>
                  <a href="">Exclusive Content</a>
                  <p>Lorem ipsum dolor sit amet consectet pis
                  cing elit, sed do eiusmod tempor.</p>
              </div>
              <div class = 'third-card card'>
                  <div class = 'card__image-container image-container'>
                      <img src="../assets/svg/Face 1.svg" alt="smile">
                  </div>
                      <a href="">Join the Community</a>
                  <p>Lorem ipsum dolor sit amet consectet pis
                cing elit, sed do eiusmod tempor.</p>
              </div>
              <div class = 'fourth-card card'>
                  <div class = 'card__image-container image-container'>
                      <img src="../assets/svg/Face 5.svg" alt="faces">
                  </div>
                  <a href="">Livestreaming Access</a>
                  <p>Lorem ipsum dolor sit amet consectet pis
                cing elit, sed do eiusmod tempor.</p>
              </div>
              <div class = 'fifth-card card'>
                  <div class = 'card__image-container image-container'>
                      <img src="../assets/svg/Fire.svg" alt="fire">
                  </div>
                  <a href="">Exclusive Episides & Merch</a>
                  <p>Lorem ipsum dolor sit amet consectet pis
                cing elit, sed do eiusmod tempor.</p>
              </div>
              <div class = 'sixth-card card'>
                  <div class = 'card__image-container image-container'>
                      <img src="../assets/svg/Star.svg" alt="cross">
                      </div>
                  <a href="">And much more!</a>
                  <p>Lorem ipsum dolor sit amet consectet pis
                cing elit, sed do eiusmod tempor.</p>
              </div>
          </div>
          <input type="button" value = 'see Pricing' class = 'pButton'>

        </section>
        <section class = 'second-page' >
          <div class = 'title'>
              <h1>Recent Episodes</h1>
              <h2>Available on your favorite platform</h2>
          </div>
          <div class = 'second-page__form'>
              <div class = 'first-album album'>
                  <div class = 'album__content'>
                      <img src="../assets/images/cover1.png" alt="cover">
                      <div class = 'album__text-content'>
                          <span class = 'album__episode'>Eps. 6</span>
                          <a href="" class = 'album__title'>Pandemic Becoming Endemic</a>
                          <p class = 'album__description'>Lorem ipsum dolor sit amet, consectetur addpiscing elit.
                            Curabitur ac ultricies odio.</p>
                      </div>
                  </div>
                  <div class = 'album__footer'>
                      <div class = 'album__tags'>
                          <span class = 'album__tag tag'>covid-19</span>
                          <span class = 'album__tag tag'>health</span>
                      </div>
                      <div class= 'album__authors'>
                          <span class = 'album__hosts'>Hosted by:</span>
                          <div class = 'album__authors-icon'>
                            <img src="../assets/images/avatar1.png" alt="av" class="av">
                            <img src="../assets/images/avatar2.png" alt="av" class="av">
                          </div>
                        </div>
                  </div>
              </div>
              <div class = 'second-album album'>
                  <div class = 'album__content'>
                      <img src="../assets/images/cover2.png" alt="cover">
                      <div class = 'album__text-content'>
                          <span class = 'album__episode'>Eps. 5</span>
                          <a href="" class = 'album__title'>Tesla Autopilot Controversy</a>
                          <p class = 'album__description'>Lorem ipsum dolor sit amet, consectetur addpiscing elit.
                        Curabitur ac ultricies odio.</p>
                      </div>
                  </div>
                  <div class = 'album__footer'>
                      <div class = 'album__tags'>
                          <span class = 'album__tag tag'>automation</span>
                          <span class = 'album__tag tag'>tech</span>
                      </div>
                      <div class= 'album__authors'>
                          <span class = 'album__hosts'>Hosted by:</span>
                          <div class = 'album__authors-icon'>
                            <img src="../assets/images/avatar1.png" alt="av" class="av">
                            <img src="../assets/images/avatar2.png" alt="av" class="av">
                          </div>
                      </div>
                  </div>
              </div>
              <div class = 'third-album album'>
                  <div class = 'album__content'>
                      <img src="../assets/images/cover3.png" alt="cover">
                      <div class = 'album__text-content'>
                          <span class = 'album__episode'>Eps. 4</span>
                          <a href="" class = 'album__title'>Women's Right? Is it alright?</a>
                          <p class = 'album__description'>Lorem ipsum dolor sit amet, consectetur addpiscing elit.
                        Curabitur ac ultricies odio.</p>
                      </div>
                  </div>
                  <div class = 'album__footer'>
                      <div class = 'album__tags'>
                          <span class = 'album__tag tag'>women's right</span>
                      </div>
                      <div class= 'album__authors'>
                          <span class = 'album__hosts'>Hosted by:</span>
                          <div class = 'album__authors-icon'>
                            <img src="../assets/images/avatar1.png" alt="av" class="av">
                            <img src="../assets/images/avatar2.png" alt="av" class="av">
                          </div>
                      </div>
                  </div>
              </div>
              <div class = 'fourth-album album'>
                  <div class = 'album__content'>
                      <img src="../assets/images/cover4.png" alt="cover">
                      <div class = 'album__text-content'>
                          <span class = 'album__episode'>Eps. 3</span>
                          <a href="" class = 'album__title'>How to Deal with Self-Confidences</a>
                          <p class = 'album__description'>Lorem ipsum dolor sit amet, consectetur addpiscing elit.
                            Curabitur ac ultricies odio.</p>
                      </div>
                  </div>
                  <div class = 'album__footer'>
                      <div class = 'album__tags'>
                          <span class = 'album__tag tag'>self-esteem</span>
                          <span class = 'album__tag tag'>health</span>
                      </div>
                      <div class= 'album__authors'>
                          <span class = 'album__hosts'>Hosted by:</span>
                          <div class = 'album__authors-icon'>
                            <img src="../assets/images/avatar1.png" alt="av" class="av">
                            <img src="../assets/images/avatar2.png" alt="av" class="av">
                          </div>
                      </div>
                  </div>
              </div>
              <div class = 'fifth-album album'>
                  <div class = 'album__content'>
                      <img src="../assets/images/cover5.png" alt="cover">
                      <div class = 'album__text-content'>
                          <span class = 'album__episode'>Eps. 2</span>
                          <a href="" class = 'album__title'>Type of Social Classes of People</a>
                          <p class = 'album__description'>Lorem ipsum dolor sit amet, consectetur addpiscing elit.
                            Curabitur ac ultricies odio.</p>
                      </div>
                  </div>
                  <div class = 'album__footer'>
                      <div class = 'album__tags'>
                          <span class = 'album__tag tag'>social class</span>
                          <span class = 'album__tag tag'>wealth</span>
                      </div>
                      <div class= 'album__authors'>
                          <span class = 'album__hosts'>Hosted by:</span>
                          <div class = 'album__authors-icon'>
                            <img src="../assets/images/avatar1.png" alt="av" class="av">
                            <img src="../assets/images/avatar2.png" alt="av" class="av">
                          </div>
                      </div>
                  </div>
              </div>
              <div class = 'sixth-album album'>
                  <div class = 'album__content'>
                      <img src="../assets/images/cover6.png" alt="cover">
                      <div class = 'album__text-content'>
                          <span class = 'album__episode'>Eps. 1</span>
                          <a href="" class = 'album__title'>Are you a Perplexed Mind Person?</a>
                          <p class = 'album__description'>And Lorem ipsum dolor sit amet, consectetur addpiscing elit.
                          Curabitur ac ultricies odio.</p>
                      </div>
                  </div>
                  <div class = 'album__footer'>
                      <div class = 'album__tags'>
                          <span class = 'album__tag tag'>mind behavior</span>
                          <span class = 'album__tag tag'>health</span>
                      </div>
                      <div class= 'album__authors'>
                          <span class = 'album__hosts'>Hosted by:</span>
                          <div class = 'album__authors-icon'>
                              <img src="../assets/images/avatar1.png" alt="av" class="av">
                              <img src="../assets/images/avatar2.png" alt="av" class="av">
                          </div>
                      </div>
                  </div>
              </div>
          </div>
              <input type="button" value = 'browse all episodes' class = 'pButton'>
        </section>
    </body>
    <footer>
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


    </footer>
</template>

<style>
body {
    padding: 0;
    margin: 0;
    width: 1440px;

}

.main-page {background-color: #F7EDE8;
width: 1440px;
padding-top: 24px;
padding-bottom:140px;
}

/* @font-face {
    font-family: 'Montserrat Alternates';
    src: url("https://fonts.googleapis.com/css?family=Montserrat+Alternates");
} */

.title{
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    padding: 0;
    margin:0;
    margin-bottom: 100px;
}

/* .image-container {
    width: 78px;
    height: 78px;
    display: flex;
}

.card__image-container {
    margin-bottom: 30px;
}

img {
  align-self: center;
} */

.first-page {
    color: black;
    width: 1440px;
    padding-top: 50px;
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
padding-top: 150px;}

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

.album {
    display:flex;
    flex-direction: column;
    font-family: 'Montserrat Alternates';
    justify-content: space-between;
    align-items: space-between;
    height: 221px;
    border: solid black 2px;
    border-radius: 12px;
    padding: 14px;
    background-color: white;
}

.album:first-child, .album:nth-child(4n), .album:nth-child(4n+1) {
    box-shadow: 10px 10px 0 0 #81ADC8;
}

.album:first-child .albumTitle, .album:nth-child(4n) .albumTitle, .album:nth-child(4n+1) .albumTitle {
    color: #CD4631;;
}

.album__content {
  display: flex;
}

.album__text-content {
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    justify-content: center;  /* почему-то не работает  выравнивание, пришлось margin top двигать текст в флексбоксе */
    padding: 0;
    width: 356px;
}

.album__episode {
  color: #CD4631;
  margin-right: auto;
}

.album__title {
    text-align: left;
    margin-right: auto;
}

.album__description {
    padding-top: 10px;
    border-top: solid 2px gray;
    text-align:left;
    font-size: 14px;
}

.album__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.album__tags {
    display: flex;
    align-self: center;
}

.album__authors-icon {
    display: flex;
    align-self: center;
    flex-wrap: wrap;
}

.av {
   position: relative;
   right: -5px;
}

.av:nth-child(1) {
    position: relative;
    right: -15px;

}

.tag {
    border: solid 1px gray;
    border-radius: 5px;
    font-size: 12px;
}

.album__tag {
    padding: 6px 12px 6px 12px;
    margin-right: 6px;
    align-self: flex-end;
}

.album__authors {
    display: flex;
    height: 26px;
    align-items: center;
}

</style>

