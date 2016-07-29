<template>
    <div class="markup">
        <pre>
            <code ref="markup">{{ markup }}</code>
        </pre>
        <table>
            <thead>
                <tr>
                    <th>Prop</th>
                    <th>Type</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="prop in props">
                    <td v-for="value in prop">{{ value }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                template: '',
                script: '',
                style: ''
            }
        },

        props: ['markup', 'props'],

        mounted () {
            this.highlight()
        },

        methods: {
            highlight () {
                hljs.highlightBlock(this.$refs.markup)
            }
        }
    }
</script>

<style scoped>
    .row {
        margin-bottom: 0 !important;
    }
</style>