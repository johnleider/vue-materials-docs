<template>
    <div class="col s12">
        <h4>Small</h4>
        <row>
            <grid s4><progress-circular small active></progress-circular></grid>
            <grid s4><progress-circular small active></progress-circular></grid>
            <grid s4><progress-circular small active></progress-circular></grid>
        </row>
        <markup html='
        <progress-circular small active></progress-circular>'
        ></markup>
        <h4>Large</h4>
        <row>
            <grid s4><progress-circular active large></progress-circular></grid>
            <grid s4><progress-circular active large></progress-circular></grid>
            <grid s4><progress-circular active large></progress-circular></grid>
        </row>
        <markup html='
        <progress-circular active large></progress-circular>'
        ></markup>
        <h4>Flashing</h4>
        <row>
            <grid s4><progress-circular active red red-flash></progress-circular></grid>
            <grid s4><progress-circular active green></progress-circular></grid>
            <grid s4><progress-circular active blue></progress-circular></grid>
        </row>
        <markup html='
        <progress-circular active red red-flash></progress-circular>'
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