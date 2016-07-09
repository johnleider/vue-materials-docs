<template>
    <div class="col s12">
        <h4>Example</h4>
        <slider>
            <slide src="http://lorempixel.com/580/250/nature/1">Slide 1</slide>
            <slide src="http://lorempixel.com/580/250/nature/2">Slide 2</slide>
            <slide src="http://lorempixel.com/580/250/nature/3">Slide 3</slide>
        </slider>
        <markup html='
        <slider>
            <slide src="http://lorempixel.com/580/250/nature/1">Slide 1</slide>
            <slide src="http://lorempixel.com/580/250/nature/2">Slide 2</slide>
            <slide src="http://lorempixel.com/580/250/nature/3">Slide 3</slide>
        </slider>'
        ></markup>
        <props :props="props"></props>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                props: [
                    ['full-width', 'boolean'],
                    ['indicators', 'boolean'],
                    ['height', 'number'],
                    ['transition', 'number'],
                    ['interval', 'number']
                    ['full-width', 'boolean'],
                ]
            }
        }
    }
</script>