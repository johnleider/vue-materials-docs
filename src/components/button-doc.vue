<template>
    <div class="col s12">
        <h4>Examples</h4>
        <card panel>
            <div class="row">
                <div class="col s6 m4 l2">
                    <checkbox v-model="large" id="large" name="large">Large</checkbox>
                </div>
                <div class="col s6 m4 l2">
                    <checkbox v-model="disabled" id="disabled" name="disabled">Disabled</checkbox>
                </div>
                <div class="col s6 m4 l2">
                    <checkbox v-model="icon" id="icon" name="icon">Icon</checkbox>
                </div>
                <div class="col s6 m4 l2">
                    <checkbox v-model="waves" id="waves" name="waves">Waves</checkbox>
                </div>
                <div class="col s6 m4 l2">
                    <checkbox v-model="flat" id="flat" name="flat">Flat</checkbox>
                </div>
                <div class="col s6 m4 l2">
                    <checkbox v-model="floating" id="floating" name="floating">Floating</checkbox>
                </div>
            </div>
            <div class="center">
                <btn :large="large"
                     :disabled="disabled"
                     :waves-light="waves"
                     :flat="flat"
                     :floating="floating"
                ><span v-if="!floating">Button</span> <icon v-if="icon || floating" right>list</icon></btn>
            </div>
        </card>
        <markup html="
        <btn>Button</btn>"></markup>
        <markup html='
        <btn-link href="#!">Button</btn-link>'></markup>
        <props :props="button_props"></props>
        <h4>Fixed Action Button</h4>
        <fab icon="list" horizontal>
            <ul slot="items">
                <li>
                    <btn-link floating class="red"><icon>insert_chart</icon></btn-link>
                </li>
                <li>
                    <btn-link floating class="yellow darken-1"><icon>format_quote</icon></btn-link>
                </li>
                <li>
                    <btn-link floating class="green"><icon>publish</icon></btn-link>
                </li>
                <li>
                    <btn-link floating class="blue"><icon>attach_file</icon></btn-link>
                </li>
            </ul>
        </fab>
        <markup html='
        <fab icon="list" horizontal>
            <ul slot="items">
                <li>
                    <btn-link floating class="red"><icon>insert_chart</icon></btn-link>
                </li>
                <li>
                    <btn-link floating class="yellow darken-1"><icon>format_quote</icon></btn-link>
                </li>
                <li>
                    <btn-link floating class="green"><icon>publish</icon></btn-link>
                </li>
                <li>
                    <btn-link floating class="blue"><icon>attach_file</icon></btn-link>
                </li>
            </ul>
        </fab>'
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
                ]
            }
        }
    }
</script>

<style scoped>
    .btn {
        margin-bottom: 1rem;
    }
</style>