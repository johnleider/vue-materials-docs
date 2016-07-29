<template>
    <div class="col s12">
        <h4>Examples</h4>
        <v-collection>
            <v-collection-item>Alvin</v-collection-item>
            <v-collection-item>Alvin</v-collection-item>
            <v-collection-item>Alvin</v-collection-item>
            <v-collection-item>Alvin</v-collection-item>
        </v-collection>
        <markup html='
        <v-collection>
            <v-collection-item>Alvin</v-collection-item>
            <v-collection-item>Alvin</v-collection-item>
            <v-collection-item>Alvin</v-collection-item>
            <v-collection-item>Alvin</v-collection-item>
        </v-collection>'
        ></markup>
        <v-collection>
            <v-collection-link>Alvin</v-collection-link>
            <v-collection-link active>Alvin</v-collection-link>
            <v-collection-link>Alvin</v-collection-link>
            <v-collection-link>Alvin</v-collection-link>
        </v-collection>
        <markup html='
        <v-collection>
            <v-collection-link>Alvin</v-collection-link>
            <v-collection-link active>Alvin</v-collection-link>
            <v-collection-link>Alvin</v-collection-link>
            <v-collection-link>Alvin</v-collection-link>
        </v-collection>'
        ></markup>
        <h4>With Header</h4>
        <v-collection with-header>
            <v-collection-item header>
                <h3>First Name</h3>
            </v-collection-item>
            <v-collection-item>Alvin</v-collection-item>
            <v-collection-item>Alvin</v-collection-item>
            <v-collection-item>Alvin</v-collection-item>
        </v-collection>
        <markup html='
        <v-collection with-header>
            <v-collection-item header>
                <h3>First Name</h3>
            </v-collection-item>
            <v-collection-item>Alvin</v-collection-item>
            <v-collection-item>Alvin</v-collection-item>
            <v-collection-item>Alvin</v-collection-item>
        </v-collection>'
        ></markup>
        <h4>Secondary Content</h4>
        <v-collection>
            <v-collection-item>
                Alvin
                <span slot="secondary"><v-icon>send</v-icon></span>
            </v-collection-item>
            <v-collection-item>
                Alvin
                <span slot="secondary"><v-icon>send</v-icon></span>
            </v-collection-item>
            <v-collection-item>
                Alvin
                <span slot="secondary"><v-icon>send</v-icon></span>
            </v-collection-item>
            <v-collection-item>
                Alvin
                <span slot="secondary"><v-icon>send</v-icon></span>
            </v-collection-item>
        </v-collection>
        <markup html='
        <v-collection>
            <v-collection-item>
                Alvin
                <span slot="secondary"><v-icon>send</v-icon></span>
            </v-collection-item>
            <v-collection-item>
                Alvin
                <span slot="secondary"><v-icon>send</v-icon></span>
            </v-collection-item>
            <v-collection-item>
                Alvin
                <span slot="secondary"><v-icon>send</v-icon></span>
            </v-collection-item>
            <v-collection-item>
                Alvin
                <span slot="secondary"><v-icon>send</v-icon></span>
            </v-collection-item>
        </v-collection>'
        ></markup>
        <h4>Avatar</h4>
        <v-collection>
            <v-collection-avatar src="http://materializecss.com/images/yuna.jpg">
                <span class="title">Title</span>
                <p>First Line <br>
                    Second Line
                </p>
                <span slot="secondary"><v-icon>star</v-icon></span>
            </v-collection-avatar>
            <v-collection-avatar src="http://materializecss.com/images/yuna.jpg">
                <span class="title">Title</span>
                <p>First Line <br>
                    Second Line
                </p>
                <span slot="secondary"><v-icon>star</v-icon></span>
            </v-collection-avatar>
        </v-collection>
        <markup html='
        <v-collection>
            <v-collection-avatar src="http://materializecss.com/images/yuna.jpg">
                <span class="title">Title</span>
                <p>First Line <br>
                    Second Line
                </p>
                <span slot="secondary"><v-icon>star</v-icon></span>
            </v-collection-avatar>
            <v-collection-avatar src="http://materializecss.com/images/yuna.jpg">
                <span class="title">Title</span>
                <p>First Line <br>
                    Second Line
                </p>
                <span slot="secondary"><v-icon>star</v-icon></span>
            </v-collection-avatar>
        </v-collection>'
        ></markup>
        <props :props="props"></props>
    </div>
</template>

<script>
    export default {
        props: ['show'],

        data () {
            return {
                props: [
                    ['with-header', 'boolean']
                ]
            }
        }
    }
</script>