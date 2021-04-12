<template>
    <li :class="style.item">
        <h3 :class="headline">{{ listitem }}</h3>
        <span>{{ listitemcontent }}</span>
    </li>
</template>

<script>
    import style from './List.module.scss'

    export default {
        name: 'List',
        props: {
            listitem: String,
            listitemcontent: String
        },
        data () {
            return {
                style
            }
        }
    }
</script>