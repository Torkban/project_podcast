<template>
    <div class = 'first-card card'>
        <div class = 'card__image-container image-container'>
            <img :src= 'src' alt = {{titleText}} >
        </div>
            <a href="">{{titleText}}</a>
            <p>{{text}}</p>
    </div>

</template>
<script>
export default {
    props: {
        text: {
            type: String,
            required: true,
            default: 'smth'
        },
        titleText: {
            type: String,
            required: true,
            default: 'link_text'
        },
        src: {
            type: String,
            required: true,
            default: '../assets/svg/doodle.svg'
        }
    }
}
</script>
<style>
.card {
    display:flex;
    flex-direction: column;
    font-family: 'Montserrat Alternates';
    justify-content: flex-end;                   /* без этого в первой карточке текст съезжает на половину строки, непонятно  */
    align-items: center;
    height: 202px;
    width:373px;
}

.image-container {
    width: 78px;
    height: 78px;
    display: flex;
}

.card__image-container {
    margin-bottom: 30px;
}

img {
  align-self: center;
}


</style>
