<template>
    <div class="col s12">
        <h4>Example</h4>
        <v-tabs>
            <v-tab :target="'#tab' + n" v-for="n in 5">Tab {{ n }}</v-tab>
        </v-tabs>
        <markup html='
        <v-tabs>
            <v-tab target="#tab1">Tab 1</v-tab>
            <v-tab target="#tab2">Tab 2</v-tab>
            <v-tab target="#tab3">Tab 3</v-tab>
        </v-tabs>'
        ></markup>
        <v-tabs>
            <v-tab :target="'#tab' + n" v-for="n in 10">Tab {{ n }}</v-tab>
        </v-tabs>
        <props :props="tabs_props"></props>
        <markup html='
        <v-tab>Tab</v-tab>'
        ></markup>
        <props :props="tab_props"></props>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                tabs_props: [
                    ['selected', 'boolean']
                ],
                tab_props: [
                    ['active', 'boolean'],
                    ['target', 'string']
                ]
            }
        }
    }
</script>