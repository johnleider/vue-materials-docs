<template>
    <div class="col s12">
        <h4>Examples</h4>
        <material-box src="http://materializecss.com/images/sample-1.jpg"
                      width="100%"
        ></material-box>
        <markup html='
        <material-box src="http://materializecss.com/images/sample-1.jpg"
                      width="100%"
        ></material-box>'
        ></markup>
        <h4>Captions</h4>
        <material-box :width="250" 
                      src="http://th01.deviantart.net/fs70/PRE/i/2013/126/1/e/nature_portrait_by_pw_fotografie-d63tx0n.jpg"
                      caption="I'm a caption"
        ></material-box>
        <markup html='
        <material-box :width="250" 
                      src="http://th01.deviantart.net/fs70/PRE/i/2013/126/1/e/nature_portrait_by_pw_fotografie-d63tx0n.jpg"
                      caption="Caption"
        ></material-box>'
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
                    ['width', 'boolean, string, number'],
                    ['src', 'string'],
                    ['caption', 'string, boolean']
                ]
            }
        }
    }
</script>