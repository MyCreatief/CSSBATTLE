<template>
    <button @click="callback($event)" :class="[buttonClass, style.btn]">
        <slot></slot>
    </button>
</template>

<script>
    import style from './Button.module.scss'

    export default {
        name: 'Button',
        props: {
            buttonClass: Array
        },
        methods: {
            callback: function(e) {
                this.$emit('click', e);
            }
        },
        data () {
            return {
                style
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" module>
</style>
