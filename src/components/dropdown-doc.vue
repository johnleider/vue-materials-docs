<template>
    <div class="col s12">
        <h4>Examples</h4>
        <btn v-dropdown:dropdown>dropdown</btn>
        <dropdown id="dropdown">
            <li>
                <a href="#!">Click me!</a>
            </li>
            <li>
                <a href="#!">Click me!</a>
            </li>
            <li>
                <a href="#!">Click me!</a>
            </li>
        </dropdown>
        <markup html='
        <btn v-dropdown:dropdown>dropdown</btn>
        <dropdown id="dropdown">
            <li>
                <a href="#!">Click me!</a>
            </li>
            <li>
                <a href="#!">Click me!</a>
            </li>
            <li>
                <a href="#!">Click me!</a>
            </li>
        </dropdown>'
        ></markup>
        <btn v-dropdown:dropdown2 class="red" hover>dropdown</btn>
        <dropdown id="dropdown2">
            <li>
                <a href="#!">Click me!</a>
            </li>
            <li>
                <a href="#!">Click me!</a>
            </li>
            <li>
                <a href="#!">Click me!</a>
            </li>
        </dropdown>
        <markup html='
        <btn v-dropdown:dropdown2 class="red">dropdown</btn>
        <dropdown id="dropdown2">
            <li>
                <a href="#!">Click me!</a>
            </li>
            <li>
                <a href="#!">Click me!</a>
            </li>
            <li>
                <a href="#!">Click me!</a>
            </li>
        </dropdown>'
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