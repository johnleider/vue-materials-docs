<template>
    <div class="col s12">
        <h4>Carousel w/ srcs</h4>
        <carousel :srcs="srcs"></carousel>
        <markup html='
        <carousel :srcs="srcs"></carousel>'
        ></markup>
        <h4>Carousel w/ slot</h4>
        <carousel>
            <carousel-item v-for="src in srcs"
                           :src="src"
            ></carousel-item>
        </carousel>
        <markup html='
        <carousel>
            <carousel-item v-for="src in srcs"
                           :src="src"
            ></carousel-item>
        </carousel>'
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
                    ['srcs', 'array']
                ],
                srcs: [
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