<template>
<div class = 'quote'>
    <p class = 'quote__text'>{{text}}</p>
    <div class = 'quote__sign'>
        <img :src = src alt="avatar">
        <p>{{ name }},</p>
        <img :src= icon_src alt="icon">
        <p>{{icon_text}}</p>
    </div>
</div>
</template>
<script>
export default {
    props: {
        text: {
            type: String,
            required: true
        },
        icon_text: {
            type: String,
            required: true
        },
        src: {
            type: String,
            required: true
        },
        icon_src: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        }
    }

}

</script>

<style>
div {
    padding: 0;
}
.quote {

    background-color: #F7EDE8;
}

.white-page__quote {
    margin: auto;
    margin-top: 120px;
    font-family: 'Montserrat Alternates';
    display: flex;
    flex-direction: column;
    justify-content: end;
    padding: 40px;
    gap: 40px;
    width: 1160px;
    height: 366px;
}


.quote__text {
    font-size: 37px;
    align-self: center;
    padding: 0;
    margin: 0;
    width: 700px;
}
.quote__sign {
    align-self: center;
    display: flex;
    flex-direction: row;
    gap:10px;
    font-size: 14px;
}
.quote__sign img:last-child {
    width: 16px;
}

.quote__sign img:first-child {
    border-radius: 50%;
    width: 48px;
}
</style>
