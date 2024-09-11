<template>
    <div class = 'sliderContainer'>
        <div class = 'slider'>
            <div class = 'slider__items'><img src= "../assets/images/cover2.png" alt = 'first' class = 'slider__img' >
            <p>Tesla Autopilot</p></div>
            <div class = 'slider__items'><img src= "../assets/images/cover4.png" alt = 'first' class = 'slider__img' ><p>Self-confidence</p></div>
            <div class = 'slider__items'><img src= "../assets/images/cover6.png" alt = 'first' class = 'slider__img' ><p>Perplexed Mind</p></div>
            <div class = 'slider__items'><img src= "../assets/images/cover3.png" alt = 'first' class = 'slider__img' ><p>Womens Rigths</p></div>
            <div class = 'slider__items'><img src= "../assets/images/cover5.png" alt = 'first' class = 'slider__img' ><p>Social Class</p></div>
        </div>
    </div>

</template>
<script>



// const movable = document.querySelectorAll('.slider__items');
// for (var i = 0; i < movable.length; i++){
// movable[4].addEventListener('mouseenter', function(event) {
//     movable.classList.add('left');
// });
// }
export default {
    mounted() {
        var movable = document.querySelectorAll('.slider__items');
            movable[4].addEventListener('mouseenter', () => {
                for (var i = 0; i < movable.length; i++) {
                    movable[i].style.transform = 'translateX(-273px)';
                }// Сдвиг вправо на 50 пикселей
            });
            movable[4].addEventListener('mouseleave', () => {
            for (var i = 0; i < movable.length; i++) {
                movable[i].style.transform = 'translateX(0)';
                }// Возвращение на место
             });

             movable[0].addEventListener('mouseenter', () => {
                for (var i = 0; i < movable.length; i++) {
                    movable[i].style.transform = 'translateX(273px)';
                }// Сдвиг вправо на 50 пикселей
            });
            movable[0].addEventListener('mouseleave', () => {
            for (var i = 0; i < movable.length; i++) {
                movable[i].style.transform = 'translateX(0)';
                }// Возвращение на место
             });


        }
    }

</script>
<style>
.sliderContainer {
    height:373px;
    margin-top: 120px;
    width:1440px;
    overflow: hidden;
    position: relative;
    padding:0;
}

.slider {
    display: flex;
    height:373px;
    width:1945px;
    position: absolute; /* Позволяет выходить за пределы контейнера */
    top: 50%; /* Центрирование по вертикали */
    left: 50%; /* Центрирование по горизонтали */
    transform: translate(-50%, -50%);
    justify-content: space-between;
}


.slider__items {
    height:373px;
    width: 373px;
    position: relative;
    transition-duration: 0.7s;

}
.slider__img {
    height:373px;
}
.slider__items p {
    position: absolute;
    color: #81ADC8;
    position: absolute; /* Абсолютное позиционирование */
            top: 71%; /* Сдвигаем текст вниз на 50% высоты контейнера */
            left: 5%;
    font-size: 36px;
    font-weight: 700;
    font-family: 'Montserrat Alternates';

}


.left {
    transform: translate(-273px);
    background-color: red;
}

</style>
