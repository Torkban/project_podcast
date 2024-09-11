<template>
<input type="button" :value = 'message' class = 'pButton'>
 <!-- <p>{{ message }}</p> -->
</template>
<script>
export default {
    props: {
        message: {
            type: String,
            required: true,
            default: 'strg'
        }
    }

}

</script>

<style>
.pButton {
    border-radius: 5px;
    color: white;
    font-size: 14px;
    text-transform: uppercase;
    font-family: 'Montserrat Alternates';
    background-color: black;
    display: inline-block;
    padding: 20px;
    padding-left: 40px;
    padding-right: 40px;
    box-shadow: 5px 5px 0 0 rgba(0,0,0, 0.25);
    /* margin-bottom: 150px; */
    transition-duration: 0.4s;
}

.pButton--inverse {
    color: black;
    background-color: #F7EDE8;
    box-shadow: none;
}

.pButton:hover {
    border-radius: 10px;
    transform: scale(1.1);
}

.pButton--nav {
    margin:0;
    margin-left: 20px;
    padding: 10px;
    padding-left: 20px;
    padding-right: 20px;

}

</style>
