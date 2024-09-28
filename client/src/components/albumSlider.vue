<template>
    <div class='sliderContainer'>
        <div class='slider'>
            <div class='slider__items'>
                <img src="../assets/images/cover2.png" alt='first' class='slider__img'>
                <p>Tesla Autopilot</p>
            </div>

            <div class='slider__items'>
                <img src="../assets/images/cover4.png" alt='first' class='slider__img'>
                <p>Self-confidence</p>
            </div>

            <div class='slider__items'>
                <img src="../assets/images/cover6.png" alt='first' class='slider__img'>
                <p>Perplexed Mind</p>
            </div>

            <div class='slider__items'>
                <img src="../assets/images/cover3.png" alt='first' class='slider__img'>
                <p>Womens Rigths</p>
            </div>

            <div class='slider__items'>
                <img src="../assets/images/cover5.png" alt='first' class='slider__img'>
                <p>Social Class</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        var movable = document.querySelectorAll('.slider__items');
        movable[4].addEventListener('mouseenter', () => {
            for (var i = 0; i < movable.length; i++){movable[i].style.transform = 'translateX(-273px)';}
        });

        movable[4].addEventListener('mouseleave', () => {
            for (var i = 0; i < movable.length; i++){movable[i].style.transform = 'translateX(0)';}
        });

        movable[0].addEventListener('mouseenter', () => {
            for (var i = 0; i < movable.length; i++){movable[i].style.transform = 'translateX(273px)';}
        });

        movable[0].addEventListener('mouseleave', () => {
            for (var i = 0; i < movable.length; i++){movable[i].style.transform = 'translateX(0)';}
        });
    }
}
</script>

<style>

</style>
