<template>
    <li :class="style.slide">
        <h2>{{ title }}</h2>
        <img :class="style.slideImage" :src="imageSrc" alt="image01" />
    </li>
</template>

<script>
    import style from './Slide.module.scss'

    export default {
        name: 'Slide',
        props: {
            imageSrc: String,
            title: String
        },
        data () {
            return {
                style
            }
        }
    }
</script>

<style lang="scss" module>
    /*@import "./HelloWorld.module.css";*/
</style>