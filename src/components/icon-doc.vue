<template>
    <div class="col s12">
        <h4>Examples</h4>
        <v-icon tiny>grade</v-icon>
        <markup html='
        <v-icon tiny>grade</v-icon>'
        ></markup>
        <v-icon>flight_land</v-icon>
        <markup html='
        <v-icon>flight_land</v-icon>'
        ></markup>
        <v-icon medium>list</v-icon>
        <markup html='
        <v-icon medium>list</v-icon>'
        ></markup>
        <v-icon large>bug_report</v-icon>
        <markup html='
        <v-icon small>bug_report</v-icon>'
        ></markup>
        <h4>Icon Prefixs</h4>
        <div class="input-field">
            <v-icon prefix>account_circle</v-icon>
            <v-text-input name="name"></v-text-input>
            <label for="name">Name</label>
        </div>
        <markup html='
        <div class="input-field">
            <v-icon prefix>account_circle</v-icon>
            <text-input name="name"></text-input>
            <label for="name">Name</label>
        </div>'
        ></markup>
        <props :props="props"></props>
    </div>
</template>

<script>
    export default {
        props: ['show'],

        data () {
            return {
                props: [
                    ['tiny', 'boolean'],
                    ['small', 'boolean'],
                    ['medium', 'boolean'],
                    ['large', 'boolean'],
                    ['prefix', 'boolean'],
                    ['right', 'boolean'],
                    ['left', 'boolean']
                ]
            }
        }
    }
</script>
