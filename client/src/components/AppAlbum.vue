<template>
    <div class = 'album'>
        <div class = 'album__content'>
            <img :src="album.src" alt="cover">
            <div class = 'album__text-content'>
                <span class = 'album__episode'>Eps. {{album.number}}</span>
                <a href="" class = 'album__title'>{{album.titleText}}</a>
                <p class = 'album__description'>{{ album.text }}</p>
            </div>
        </div>
        <div class = 'album__footer'>
                <div class = 'album__tags'>
                    <span v-for="(item, index) in album.tags_list" :key="index" class = 'album__tag tag'>{{ item }}</span>
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
</template>
<script setup>
const props = defineProps({
    album: {
            type: Object,
            required: true
        },
});

// export default {
//     props: {
//         album: {
//             type: Object,
//             required: true
//         },
//     },
    // mounted() {
    //     var tags_wrapper = document.querySelector('.album__tags');
    //     var tag = document.createElement('span');
    //     for (var i = 0; i < this.tags_list; i++) {
    //         tag = document.createElement('span');
    //         tag.classList.add('album__tag');
    //         tag.classList.add('tag');
    //         tag.textContent = this.tags_list[i];
    //         tags_wrapper.appendChild(tag);
    //         tag = none;
    //     }
    // }
// }
</script>
<style scoped>

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
.selected {
    color: #CD4631;
}

</style>
