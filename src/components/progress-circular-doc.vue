<template>
    <div class="col s12">
        <h4>Small</h4>
        <v-row>
            <v-grid s4><v-progress-circular small active></v-progress-circular></v-grid>
            <v-grid s4><v-progress-circular small active></v-progress-circular></v-grid>
            <v-grid s4><v-progress-circular small active></v-progress-circular></v-grid>
        </v-row>
        <markup html='
        <v-progress-circular small active></v-progress-circular>'
        ></markup>
        <h4>Large</h4>
        <v-row>
            <v-grid s4><v-progress-circular active large></v-progress-circular></v-grid>
            <v-grid s4><v-progress-circular active large></v-progress-circular></v-grid>
            <v-grid s4><v-progress-circular active large></v-progress-circular></v-grid>
        </v-row>
        <markup html='
        <v-progress-circular active large></v-progress-circular>'
        ></markup>
        <h4>Flashing</h4>
        <v-row>
            <v-grid s4><v-progress-circular active red red-flash></v-progress-circular></v-grid>
            <v-grid s4><v-progress-circular active green></v-progress-circular></v-grid>
            <v-grid s4><v-progress-circular active blue></v-progress-circular></v-grid>
        </v-row>
        <markup html='
        <v-progress-circular active red red-flash></v-progress-circular>'
        ></markup>
        <props :props="props"></props>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                props: [
                    ['active', 'boolean'],
                    ['small', 'boolean'],
                    ['large', 'boolean'],
                    ['blue', 'boolean'],
                    ['blue-flash', 'boolean'],
                    ['green', 'boolean'],
                    ['green-flash', 'boolean'],
                    ['red', 'boolean'],
                    ['red-flash', 'boolean'],
                    ['yellow', 'boolean'],
                    ['yellow-flash', 'boolean']
                ]
            }
        }
    }
</script>