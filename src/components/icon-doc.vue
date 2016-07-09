<template>
    <div class="col s12">
        <h4>Examples</h4>
        <icon tiny>grade</icon>
        <markup html='
        <icon tiny>grade</icon>'
        ></markup>
        <icon>flight_land</icon>
        <markup html='
        <icon>flight_land</icon>'
        ></markup>
        <icon medium>list</icon>
        <markup html='
        <icon medium>list</icon>'
        ></markup>
        <icon large>bug_report</icon>
        <markup html='
        <icon small>bug_report</icon>'
        ></markup>
        <h4>Icon Prefixs</h4>
        <div class="input-field">
            <icon prefix>account_circle</icon>
            <text-input name="name"></text-input>
            <label for="name">Name</label>
        </div>
        <markup html='
        <div class="input-field">
            <icon prefix>account_circle</icon>
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
                    ['prefix', 'boolean']
                ]
            }
        }
    }
</script>
