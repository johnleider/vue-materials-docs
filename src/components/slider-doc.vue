<template>
    <div class="col s12">
        <h4>Example</h4>
        <slider>
            <slide src="http://lorempixel.com/580/250/nature/1">Slide 1</slide>
            <slide src="http://lorempixel.com/580/250/nature/2">Slide 2</slide>
            <slide src="http://lorempixel.com/580/250/nature/3">Slide 3</slide>
        </slider>
        <main-source :show="show"></main-source>
    </div>
</template>

<script>
    export default {
        props: ['show']
    }
</script>