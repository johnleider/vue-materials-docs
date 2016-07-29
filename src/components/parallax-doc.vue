<template>
    <div class="col s12">
        <h4>Examples</h4>
        <v-parallax src="http://materializecss.com/images/parallax1.jpg"></v-parallax>
        <markup html='
        <v-parallax src="http://materializecss.com/images/parallax1.jpg"></v-parallax>'
        ></markup>
        <v-parallax src="http://materializecss.com/images/parallax1.jpg"
                  :height="250"
        ></v-parallax>
        <markup html='
        <v-parallax src="http://materializecss.com/images/parallax1.jpg"
                  :height="250"
        ></v-parallax>'
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