<template>
    <div class="col s12">
        <carousel :srcs="srcs"></carousel>
        <main-source :show="show"></main-source>
    </div>
</template>

<script>
    export default {
        props: ['show'],

        data () {
            return {
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