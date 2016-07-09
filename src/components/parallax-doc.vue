<template>
    <div class="col s12">
        <h4>Examples</h4>
        <parallax src="http://materializecss.com/images/parallax1.jpg"></parallax>
        <markup html='
        <parallax src="http://materializecss.com/images/parallax1.jpg"></parallax>'
        ></markup>
        <parallax src="http://materializecss.com/images/parallax1.jpg"
                  height="250"
        ></parallax>
        <markup html='
        <parallax src="http://materializecss.com/images/parallax1.jpg"
                  height="250"
        ></parallax>'
        ></markup>
        <props :props="props"></props>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                props: [
                    ['height', 'string, number'],
                    ['src', 'string']
                ]
            }
        }
    }
</script>