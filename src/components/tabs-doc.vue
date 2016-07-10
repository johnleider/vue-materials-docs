<template>
    <div class="col s12">
        <h4>Example</h4>
        <tabs>
            <tab :target="'#tab' + n" v-for="n in 5">Tab {{ n }}</tab>
        </tabs>
        <markup html='
        <tabs>
            <tab target="#tab1">Tab 1</tab>
            <tab target="#tab2">Tab 2</tab>
            <tab target="#tab3">Tab 3</tab>
        </tabs>'
        ></markup>
        <tabs>
            <tab :target="'#tab' + n" v-for="n in 10">Tab {{ n }}</tab>
        </tabs>
        <props :props="tabs_props"></props>
        <markup html='
        <tab>Tab</tab>'
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