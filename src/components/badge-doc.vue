<template>
    <div class="col s12">
        <h4>In Collections</h4>
        <collection>
            <collection-item>
                Alan
                <badge new slot="secondary"></badge>
            </collection-item>
            <collection-item>
                Alan
                <badge new class="blue" slot="secondary"></badge>
            </collection-item>
            <collection-item>
                Alan
                <badge new class="red" slot="secondary"></badge>
            </collection-item>
            <collection-item>
                Alan
                <badge new class="purple" slot="secondary"></badge>
            </collection-item>
        </collection>
        <markup html='
        <collection-item>
            Alan
            <badge new slot="secondary"></badge>
        </collection-item>'
        ></markup>
        <h4>In Dropdowns</h4>
        <btn v-dropdown:dropdown>Dropdown</btn>
        <dropdown id="dropdown">
            <li>
                <a href="#">Click me <badge new></badge></a>
            </li>
            <li>
                <a href="#">Click me</a>
            </li>
            <li>
                <a href="#">Click me</a>
            </li>
        </dropdown>
        <markup html='
        <btn v-dropdown:dropdown>Dropdown</btn>
        <dropdown id="dropdown">
            <li>
                <a href="#">Click me <badge new></badge></a>
            </li>
            <li>
                <a href="#">Click me</a>
            </li>
            <li>
                <a href="#">Click me</a>
            </li>
        </dropdown>'
        ></markup>
        <h4>In Navbars</h4>
        <m-nav>
            <a href="#!" slot="logo" class="brand-logo">Logo</a>
            <ul class="right">
                <li>
                    <a href="#!">sass <badge new></badge></a>
                </li>
                <li>
                    <a href="#!">sass</a>
                </li>
                <li>
                    <a href="#!">sass</a>
                </li>
            </ul>
        </m-nav>
        <markup html='
        <m-nav>
            <a href="#!" slot="logo" class="brand-logo">Logo</a>
            <ul slot="items" class="right">
                <li>
                    <a href="#!">sass <badge new></badge></a>
                </li>
                <li>
                    <a href="#!">sass</a>
                </li>
                <li>
                    <a href="#!">sass</a>
                </li>
            </ul>
        </m-nav>'
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
