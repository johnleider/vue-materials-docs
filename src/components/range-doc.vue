<template>
    <div class="col s12">
        <h4>Example</h4>
        <v-range></v-range>
        <markup html='
        <v-range></v-range>'
        ></markup>
        <h4>Model</h4>
        <v-range v-model="range"></v-range>
        <h5 class="center">{{ range }}</h5>
        <markup html='
        <v-range v-model="range"></v-range>'
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