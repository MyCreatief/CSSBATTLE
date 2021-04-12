<template>
    <li :class="style.slide">
        <div :class="style.slidecontainer">
            <h2 :class="style.title">{{ title }}</h2>
            <ol :class="style.lists">
                <list-item v-for="item in list" :listitem="item.item" :listitemcontent="item.listitemcontent"></list-item>
            </ol>
            <div :class="style.slideImageContainer" v-if="imageSrc">
                <img :class="style.slideImage" :src="imageSrc" alt="image01" />
            </div>
        </div>
    </li>
</template>

<script>
    import style from './Slide.module.scss'
    import listItem from './List.vue'

    export default {
        name: 'Slide',
        props: {
            imageSrc: String,
            title: String,
            list: Array
        },
        components: {
            listItem
        },
        data () {
            return {
                style
            }
        }
    }
</script>