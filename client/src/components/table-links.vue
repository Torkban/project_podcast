<template>
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
</template>
<style scoped>

.table-links {
    margin: 140px;
    margin-top:120px;
    margin-bottom:0;
    display: flex;
    padding:0;
    border-top: solid 1px;
    border-bottom: solid 1px;
    height: 124px;
    width:1160;
    align-items: center;
    font-size:23px;
}

.table-links__text {
    width: 1400px;
    text-align: left;
}

.link-logo {
margin:0;
width: 275px;
}

.link-logo__img {
    /* height: 30px; */
}

.table-links__logo {
    display: flex;
    /* margin-right:75px; */
    margin-left:75px;
    height: 30px;
    width:865;
}

</style>
