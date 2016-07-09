<template>
    <pre><code class="html">{{ markup }}</code></pre>
</template>

<script>
    export default {
        props: ['html'],

        computed: {
            markup () {
                return this.html.replace(/[\t\r]+/g, '')
            }
        },

        mounted () {
            this.highlight()
        },

        methods: {
            highlight () {
                hljs.highlightBlock(this.$el)
            }
        }
    }
</script>

<style scoped lang="sass">
    pre {
        border: solid 1px rgba(51,51,51,0.12);
        margin: 2rem 0;

        &:before {
            content: "language-markup";
            background: #cecece;
            padding: .2rem;
            border: solid 1px rgba(51,51,51,0.12);
            position: relative;
            left: -9px;
            top: -7px;
        }
    }
</style>