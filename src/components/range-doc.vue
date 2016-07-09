<template>
    <div class="col s12">
        <h4>Example</h4>
        <range></range>
        <markup html='
        <range></range>'
        ></markup>
        <h4>Model</h4>
        <range v-model="range"></range>
        <h5 class="center">{{ range }}</h5>
        <markup html='
        <range v-model="range"></range>'
        ></markup>
        <props :props="props"></props>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                range: 15,
                props: [
                    ['min', 'string, number'],
                    ['max', 'string, number'],
                    ['v-model', 'string, number']
                ]
            }
        }
    }
</script>