<template>
    <div class="col s12">
        <h4>Examples</h4>
        <v-chip>Notice</v-chip>
        <markup html='
        <v-chip>Notice</v-chip>'
        ></markup>
        <v-chip class="blue white-text"
              close
        >
            Closable
        </v-chip>
        <markup html='
        <v-chip class="blue white-text"
              close
        >
            Closable
        </v-chip>'
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
                    ['close', 'boolean']
                ]
            }
        }
    }
</script>