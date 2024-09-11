<template>
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
                <button1 message = 'recent episodes' class = 'pButton--nav pButton--inverse'></button1>
                <button1 message = 'subscribe' class = 'pButton--nav'></button1>
                <!-- <input type ='button' value = 'recent episodes' class = 'pButton pButton__inverse pButton__nav'>
                <input type ='button' value = 'subscribe' class = 'pButton pButton__nav'> -->
</header>
</template>

<script>
import button1 from './button1.vue'

export default {
    components: {
        button1
    }
}
</script>
<style>

.top-block {
    margin: auto;
    margin-bottom: 64px;
    padding: auto;
    width: 1160px;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    /* align-items: center; */
    height: 74px;
}


.top-block__logo{
    padding:0;
    margin:0;
    /* margin-left: auto; */
    margin-right: 123px;
}

.navigation {
    display:flex;
    flex-direction: row;
    font-family: 'Montserrat Alternates';
    /* font-size:100px; */
}

nav {
    margin-right: auto;
}
li {
    margin-right: 60px;
    list-style-type: none;
}

</style>
