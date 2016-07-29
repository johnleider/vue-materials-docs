<template>
    <div class="col s12">
        <h4>Example</h4>
        <v-card panel class="center">
            <v-row>
                <v-grid s12 m4 l4>
                    <v-radio with-gap name="type" id="collapsible" v-model="type" val="collapsible">Collapsible</v-radio>
                </v-grid>
                <v-grid s12 m4 l4>
                    <v-radio with-gap name="type" id="expandable" v-model="type" val="expandable">Expandable</v-radio>
                </v-grid>
                <v-grid s12 m4 l4>
                    <v-checkbox name="popout" id="popout" v-model="popout">Popout</v-checkbox>
                </v-grid>
            </v-row>
        </v-card>
        <v-collapsible :collapse="collapsible" 
                     :expand="expandable"
                     :popout="popout"
                     ref="collapse"
        >
            <li>
                <v-collapsible-header>
                    <v-icon>filter_drama</v-icon> First
                </v-collapsible-header>
                <v-collapsible-body>
                    <p>Lorem ipsum dolor sit amet.</p>
                </v-collapsible-body>
            </li>
            <li>
                <v-collapsible-header>
                    <v-icon>place</v-icon> Second
                </v-collapsible-header>
                <v-collapsible-body>
                    <p>Lorem ipsum dolor sit amet.</p>
                </v-collapsible-body>
            </li>
            <li>
                <v-collapsible-header>
                    <v-icon>whatshot</v-icon> Third
                </v-collapsible-header>
                <v-collapsible-body>
                    <p>Lorem ipsum dolor sit amet.</p>
                </v-collapsible-body>
            </li>
        </v-collapsible>
        <markup html='
        <v-collapsible collapse>
            <li>
                <v-collapsible-header>
                    <v-icon>filter_drama</v-icon> First
                </v-collapsible-header>
                <v-collapsible-body>
                    <p>Lorem ipsum dolor sit amet.</p>
                </v-collapsible-body>
            </li>
            <li>
                <v-collapsible-header>
                    <v-icon>place</v-icon> Second
                </v-collapsible-header>
                <v-collapsible-body>
                    <p>Lorem ipsum dolor sit amet.</p>
                </v-collapsible-body>
            </li>
            <li>
                <v-collapsible-header>
                    <v-icon>whatshot</v-icon> Third
                </v-collapsible-header>
                <v-collapsible-body>
                    <p>Lorem ipsum dolor sit amet.</p>
                </v-collapsible-body>
            </li>
        </v-collapsible>'
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
                    ['collapse', 'boolean'],
                    ['expand', 'boolean'],
                    ['popout', 'boolean']
                ]
            }
        }
    }
</script>