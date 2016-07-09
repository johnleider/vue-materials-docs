<template>
    <div class="col s12">
        <h4>Examples</h4>
        <pagination :length="10" 
                    v-model="selected"
        ></pagination>
        <markup html='
        <pagination :length="10" 
                    v-model="selected"
        ></pagination>'
        ></markup>
        <pagination color="blue"
                    waves
                    :length="5"
                    v-model="active"
                    @click="update"
        ></pagination>
        <markup html='
        <pagination color="blue"
                    waves
                    :length="5"
                    v-model="active"
        ></pagination>'
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