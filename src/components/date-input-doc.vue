<template>
    <div class="col s12">
        <h4>Examples</h4>
        <date-input v-model="date"></date-input>
        <main-source :show="show"></main-source>
    </div>
</template>

<script>
    export default {
        props: ['show'],

        data () {
            return {
                date: '7 July, 2016'
            }
        }
    }
</script>