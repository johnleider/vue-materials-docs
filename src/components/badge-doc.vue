<template>
    <div class="col s12">
        <h4>In Collections</h4>
        <v-collection>
            <v-collection-item>
                Alan
                <v-badge new slot="secondary"></badge>
            </v-collection-item>
            <v-collection-item>
                Alan
                <v-badge new class="blue" slot="secondary"></badge>
            </v-collection-item>
            <v-collection-item>
                Alan
                <v-badge new class="red" slot="secondary"></badge>
            </v-collection-item>
            <v-collection-item>
                Alan
                <v-badge new class="purple" slot="secondary"></badge>
            </v-collection-item>
        </v-collection>
        <markup html='
        <v-collection-item>
            Alan
            <v-badge new slot="secondary"></badge>
        </v-collection-item>'
        ></markup>
        <h4>In Dropdowns</h4>
        <v-btn v-dropdown:dropdown>Dropdown</v-btn>
        <v-dropdown id="dropdown">
            <li>
                <a href="#">Click me <v-badge new></v-badge></a>
            </li>
            <li>
                <a href="#">Click me</a>
            </li>
            <li>
                <a href="#">Click me</a>
            </li>
        </v-dropdown>
        <markup html='
        <v-btn v-dropdown:v-dropdown>Dropdown</btn>
        <v-dropdown id="dropdown">
            <li>
                <a href="#">Click me <v-badge new></v-badge></a>
            </li>
            <li>
                <a href="#">Click me</a>
            </li>
            <li>
                <a href="#">Click me</a>
            </li>
        </v-dropdown>'
        ></markup>
        <h4>In Navbars</h4>
        <v-nav>
            <a href="#!" slot="logo" class="brand-logo hide-on-med-and-down">Logo</a>
            <ul class="right">
                <li>
                    <a href="#!">sass <v-badge new></v-badge></a>
                </li>
                <li>
                    <a href="#!">sass</a>
                </li>
                <li>
                    <a href="#!">sass</a>
                </li>
            </ul>
        </v-nav>
        <markup html='
        <v-nav>
            <a href="#!" slot="logo" class="brand-logo">Logo</a>
            <ul class="right">
                <li>
                    <a href="#!">sass <v-badge new></v-badge></a>
                </li>
                <li>
                    <a href="#!">sass</a>
                </li>
                <li>
                    <a href="#!">sass</a>
                </li>
            </ul>
        </v-nav>'
        ></markup>
        <props :props="props"></props>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                props: [
                    ['new', 'boolean']
                ]
            }
        }
    }
</script>
