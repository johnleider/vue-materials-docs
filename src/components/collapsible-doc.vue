<template>
    <div class="col s12">
        <h4>Example</h4>
        <card panel class="center">
            <row>
                <grid s4>
                    <radio with-gap name="type" id="collapsible" v-model="type" val="collapsible">Collapsible</radio>
                </grid>
                <grid s4>
                    <radio with-gap name="type" id="expandable" v-model="type" val="expandable">Expandable</radio>
                </grid>
                <grid s4>
                    <checkbox name="popout" id="popout" v-model="popout">Popout</checkbox>
                </grid>
            </row>
        </card>
        <collapsible :collapsible="collapsible" 
                     :expandable="expandable"
                     :popout="popout"
                     ref="collapse"
        >
            <li>
                <collapsible-header>
                    <icon>filter_drama</icon> First
                </collapsible-header>
                <collapsible-body>
                    <p>Lorem ipsum dolor sit amet.</p>
                </collapsible-body>
            </li>
            <li>
                <collapsible-header>
                    <icon>place</icon> Second
                </collapsible-header>
                <collapsible-body>
                    <p>Lorem ipsum dolor sit amet.</p>
                </collapsible-body>
            </li>
            <li>
                <collapsible-header>
                    <icon>whatshot</icon> Third
                </collapsible-header>
                <collapsible-body>
                    <p>Lorem ipsum dolor sit amet.</p>
                </collapsible-body>
            </li>
        </collapsible>
        <markup html='
        <collapsible>
            <li>
                <collapsible-header>
                    <icon>filter_drama</icon> First
                </collapsible-header>
                <collapsible-body>
                    <p>Lorem ipsum dolor sit amet.</p>
                </collapsible-body>
            </li>
            <li>
                <collapsible-header>
                    <icon>place</icon> Second
                </collapsible-header>
                <collapsible-body>
                    <p>Lorem ipsum dolor sit amet.</p>
                </collapsible-body>
            </li>
            <li>
                <collapsible-header>
                    <icon>whatshot</icon> Third
                </collapsible-header>
                <collapsible-body>
                    <p>Lorem ipsum dolor sit amet.</p>
                </collapsible-body>
            </li>
        </collapsible>'
        ></markup>
        <props :props="props"></props>
    </div>
</template>

<script>
    export default {
        watch: {
            type (v) {
                if (v === 'collapsible') {
                    this.collapsible = true
                    this.expandable = false
                } else {
                    this.collapsible = false
                    this.expandable = true
                }

                this.$nextTick(() => this.$refs.collapse.init())
            }
        },

        data () {
            return {
                collapsible: false,
                expandable: false,
                popout: false,
                type: 'collapsible',
                props: [
                    ['collapsible', 'boolean'],
                    ['expandable', 'boolean'],
                    ['popout', 'boolean']
                ]
            }
        }
    }
</script>