<template>
    <div class="col s12">
        <h4>Examples</h4>
        <v-pagination :length="10" 
                    v-model="selected"
        ></v-pagination>
        <markup html='
        <v-pagination :length="10" 
                    v-model="selected"
        ></v-pagination>'
        ></markup>
        <v-pagination color="blue"
                    waves
                    :length="5"
                    v-model="active"
                    @click="update"
        ></v-pagination>
        <markup html='
        <v-pagination color="blue"
                    waves
                    :length="5"
                    v-model="active"
        ></v-pagination>'
        ></markup>
        <props :props="props"></props>
    </div>
</template>

<script>
    export default {
        props: ['show'],

        methods: {
            update (n) {
                this.active = n
            }
        },

        data () {
            return {
                active: 1,
                selected: 1,
                length: 15,
                props: [
                    ['length', 'string, number'],
                    ['v-model', 'string, number'],
                    ['color', 'string'],
                    ['waves', 'boolean']
                ]
            }
        }
    }
</script>