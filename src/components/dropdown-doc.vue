<template>
    <div class="col s12">
        <h4>Examples</h4>
        <v-btn v-dropdown:dropdown>dropdown</v-btn>
        <v-dropdown id="dropdown">
            <li>
                <a href="#!">Click me!</a>
            </li>
            <li>
                <a href="#!">Click me!</a>
            </li>
            <li>
                <a href="#!">Click me!</a>
            </li>
        </v-dropdown>
        <markup html='
        <v-btn v-dropdown:dropdown>dropdown</v-btn>
        <v-dropdown id="dropdown">
            <li>
                <a href="#!">Click me!</a>
            </li>
            <li>
                <a href="#!">Click me!</a>
            </li>
            <li>
                <a href="#!">Click me!</a>
            </li>
        </v-dropdown>'
        ></markup>
        <h4>Hover</h4>
        <v-btn v-dropdown:dropdown2 class="red" hover>dropdown</v-btn>
        <v-dropdown id="dropdown2">
            <li>
                <a href="#!">Click me!</a>
            </li>
            <li>
                <a href="#!">Click me!</a>
            </li>
            <li>
                <a href="#!">Click me!</a>
            </li>
        </v-dropdown>
        <markup html='
        <v-btn v-dropdown:dropdown2 class="red" hover>dropdown</v-btn>
        <v-dropdown id="dropdown2">
            <li>
                <a href="#!">Click me!</a>
            </li>
            <li>
                <a href="#!">Click me!</a>
            </li>
            <li>
                <a href="#!">Click me!</a>
            </li>
        </v-dropdown>'
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
                    ['induration', 'number'],
                    ['outduration', 'number'],
                    ['constrainwidth', 'boolean'],
                    ['hover', 'boolean'],
                    ['gutter', 'number'],
                    ['beloworigin', 'boolean'],
                    ['alignment', 'string']
                ]
            }
        }
    }
</script>