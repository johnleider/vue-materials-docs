<template>
    <div class="col s12">
        <h4>carousel w/ srcs</h4>
        <v-carousel :items="items"></v-carousel>
        <markup html='
        <v-carousel :items="items"></v-carousel>'
        ></markup>
        <h4>carousel w/ slot</h4>
        <v-carousel>
            <v-carousel-item v-for="item in items"
                           :src="item"
            ></v-carousel-item>
        </v-carousel>
        <markup html='
        <v-carousel>
            <v-carousel-item v-for="item in items"
                           :src="item"
            ></v-carousel-item>
        </v-carousel>'
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
                    ['height', 'number'],
                    ['dist', 'number'],
                    ['time-constant', 'number'],
                    ['shift', 'number'],
                    ['padding', 'number'],
                    ['full-width', 'boolean'],
                    ['slider', 'boolean'],
                    ['items', 'array']
                ],
                items: [
                    'http://lorempixel.com/250/250/nature/1',
                    'http://lorempixel.com/250/250/nature/2',
                    'http://lorempixel.com/250/250/nature/3',
                    'http://lorempixel.com/250/250/nature/4',
                    'http://lorempixel.com/250/250/nature/5'
                ]
            }
        }
    }
</script>