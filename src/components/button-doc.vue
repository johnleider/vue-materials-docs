<template>
    <div class="col s12">
        <h4>Examples</h4>
        <v-card panel>
            <div class="row">
                <div class="col s6 m4 l2">
                    <v-checkbox v-model="large" id="large" name="large">Large</v-checkbox>
                </div>
                <div class="col s6 m4 l2">
                    <v-checkbox v-model="disabled" id="disabled" name="disabled">Disabled</v-checkbox>
                </div>
                <div class="col s6 m4 l2">
                    <v-checkbox v-model="icon" id="v-icon" name="v-icon">icon</v-checkbox>
                </div>
                <div class="col s6 m4 l2">
                    <v-checkbox v-model="waves" id="waves" name="waves">Waves</v-checkbox>
                </div>
                <div class="col s6 m4 l2">
                    <v-checkbox v-model="flat" id="flat" name="flat">Flat</v-checkbox>
                </div>
                <div class="col s6 m4 l2">
                    <v-checkbox v-model="floating" id="floating" name="floating">Floating</v-checkbox>
                </div>
            </div>
            <div class="center">
                <v-btn :large="large"
                     :disabled="disabled"
                     :waves-light="waves"
                     :flat="flat"
                     :floating="floating"
                ><span v-if="!floating">Button</span> <v-icon v-if="icon || floating" right>list</v-icon></v-btn>
            </div>
        </v-card>
        <markup html="
        <v-btn>Button</v-btn>"></markup>
        <markup html='
        <v-btn-link href="#!">Button</v-btn-link>'></markup>
        <props :props="button_props"></props>
        <waves :waves="button_waves"></waves>
        <h4>Fixed Action Button</h4>
        <v-fab icon="list" horizontal>
            <ul slot="items">
                <li>
                    <v-btn-link floating class="red"><v-icon>insert_chart</v-icon></v-btn-link>
                </li>
                <li>
                    <v-btn-link floating class="yellow darken-1"><v-icon>format_quote</v-icon></v-btn-link>
                </li>
                <li>
                    <v-btn-link floating class="green"><v-icon>publish</v-icon></v-btn-link>
                </li>
                <li>
                    <v-btn-link floating class="blue"><v-icon>attach_file</v-icon></v-btn-link>
                </li>
            </ul>
        </v-fab>
        <markup html='
        <v-fab icon="list" horizontal>
            <ul slot="items">
                <li>
                    <v-btn-link floating class="red"><v-icon>insert_chart</v-icon></v-btn-link>
                </li>
                <li>
                    <v-btn-link floating class="yellow darken-1"><v-icon>format_quote</v-icon></v-btn-link>
                </li>
                <li>
                    <v-btn-link floating class="green"><v-icon>publish</v-icon></v-btn-link>
                </li>
                <li>
                    <v-btn-link floating class="blue"><v-icon>attach_file</v-icon></v-btn-link>
                </li>
            </ul>
        </v-fab>'
        ></markup>
        <props :props="fab_props"></props>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                large: false,
                disabled: false,
                icon: false,
                waves: false,
                flat: false,
                floating: false,
                button_props: [
                    ['disabled', 'boolean'],
                    ['flat', 'boolean'],
                    ['modal', 'boolean'],
                    ['floating', 'boolean'],
                    ['large', 'boolean'],
                    ['type (<btn> only)', 'string']
                ],
                fab_props: [
                    ['horizontal', 'boolean'],
                    ['clickable', 'boolean']
                ],
                button_waves: [
                    ['wavesCircle', 'boolean'],
                    ['wavesLight', 'boolean'],
                    ['wavesOrange', 'boolean'],
                    ['wavesPurple', 'boolean'],
                    ['wavesGreen', 'boolean'],
                    ['wavesTeal', 'boolean'],
                    ['wavesRed', 'boolean'],
                    ['wavesYellow', 'boolean'],
                ]
            }
        }
    }
</script>

<style scoped>
    .v-btn {
        margin-bottom: 1rem;
    }
</style>