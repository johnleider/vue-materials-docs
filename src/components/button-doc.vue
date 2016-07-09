<template>
    <div class="col s12">
        <h4>Examples</h4>
        <btn>Button</btn>
        <markup html="
        <btn>Button</btn>"
        ></markup>
        <btn class="red" large>Large Button</btn>
        <markup html='
        <btn class="red" 
             large
        >
            Large Button
        </btn>'
        ></markup>
        <btn disabled>Disabled</btn>
        <markup html="
        <btn disabled>Disabled</btn>"
        ></markup>
        <btn waves-light>With Waves</btn>
        <markup html="
        <btn waves-light>With Waves</btn>"
        ></markup>
        <btn-link href="#!">Button Link</btn-link>
        <markup html='
        <btn-link href="#!">Button Link</btn-link>'
        ></markup>
        <btn-link modal flat>Flat</btn-link>
        <markup html='
        <btn-link flat 
                  modal
        >
            Flat
        </btn-link>'
        ></markup>
        <btn floating><icon>list</icon></btn>
        <markup html='
        <btn floating>
            <icon>list</icon>
        </btn>'
        ></markup>
        <props :props="button_props"></props>
        <h4>Fixed Action Button</h4>
        <fab horizontal>
            <btn-link floating
                      large
                      slot="btn"
            >
                <icon>list</icon>
            </btn-link>
            <ul slot="items">
                <li>
                    <btn-link floating><icon>add</icon></btn-link>
                </li>
                <li>
                    <btn-link floating><icon>add</icon></btn-link>
                </li>
                <li>
                    <btn-link floating><icon>add</icon></btn-link>
                </li>
            </ul>
        </fab>
        <markup html='
        <fab horizontal>
            <btn-link floating
                      large
                      slot="btn"
            >
                <icon>list</icon>
            </btn-link>
            <ul slot="items">
                <li>
                    <btn-link floating><icon>add</icon></btn-link>
                </li>
                <li>
                    <btn-link floating><icon>add</icon></btn-link>
                </li>
                <li>
                    <btn-link floating><icon>add</icon></btn-link>
                </li>
            </ul>
        </fab>'
        ></markup>
        <props :props="fab_props"></props>
    </div>
</template>

<script>
    export default {
        props: ['show'],

        data () {
            return {
                button_props: [
                    ['disabled', 'boolean'],
                    ['flat', 'boolean'],
                    ['modal', 'boolean'],
                    ['floating', 'boolean'],
                    ['large', 'boolean'],
                    ['type (<btn> only)', 'string']
                ],
                fab_props: [
                    ['horizontal', 'boolean'],
                    ['clickable', 'boolean']
                ]
            }
        }
    }
</script>

<style scoped>
    .btn {
        margin-bottom: 1rem;
    }
</style>