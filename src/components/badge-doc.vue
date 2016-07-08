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
        <btn v-dropdown:dropdown2>Dropdown</btn>
        <dropdown id="dropdown2">
            <li>
                <a href="#">Click me <badge new class="red"></badge></a>
            </li>
            <li>
                <a href="#">Click me</a>
            </li>
            <li>
                <a href="#">Click me</a>
            </li>
        </dropdown>
        <btn v-dropdown:dropdown3>Dropdown</btn>
        <dropdown id="dropdown3">
            <li>
                <a href="#">Click me <badge new class="blue"></badge></a>
            </li>
            <li>
                <a href="#">Click me</a>
            </li>
            <li>
                <a href="#">Click me</a>
            </li>
        </dropdown>
        <h4>In Navbars</h4>
        <app-nav>
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
        </app-nav>
        <main-source :show="show"></main-source>
    </div>
</template>

<script>
    export default {
        props: ['show']
    }
</script>