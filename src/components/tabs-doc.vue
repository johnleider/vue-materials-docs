<template>
    <div class="col s12">
        <h4>Example</h4>
        <tabs selected="tab3">
            <tab target="#tab1">Tab 1</tab>
            <tab target="#tab2">Tab 2</tab>
            <tab target="#tab3" id="tab3">Tab 3</tab>
        </tabs>
        <markup html='
        <tabs selected="tab3">
            <tab target="#tab1">Tab 1</tab>
            <tab target="#tab2">Tab 2</tab>
            <tab target="#tab3" id="tab3">Tab 3</tab>
        </tabs>'
        ></markup>
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