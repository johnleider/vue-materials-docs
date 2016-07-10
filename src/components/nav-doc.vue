<template>
    <div class="col s12">
        <h4>Examples</h4>
        <app-nav>
            <a href="#!" class="brand-logo" slot="logo">Logo</a>
            <ul slot="items" class="right">
                <li v-for="n in 3">
                    <a href="#!">Item</a>
                </li>
            </ul>
            <app-side-nav slot="side-nav"></app-side-nav>
        </app-nav>
        <markup html='
        <app-nav>
            <a href="#!" class="brand-logo" slot="logo">Logo</a>
            <ul slot="items" class="right">
                <li v-for="n in 3">
                    <a href="#!">Item</a>
                </li>
            </ul>
            <app-side-nav slot="side-nav"></app-side-nav>
        </app-nav>'
        ></markup>
    </div>
</template>
