<template>
    <card panel>
        <div class="row">
            <div class="col s12">
                <tabs>
                    <tab target="#template" 
                         selected
                    >
                        Template  
                    </tab>
                    <tab target="#script">
                        Script  
                    </tab>
                    <tab target="#style"
                         v-if="style"
                    >
                        Style
                    </tab>
                </tabs>
            </div>
            <div class="col s12"
                 id="template"
            >
                <pre>
                    <code class="html" 
                          ref="template"
                    >{{ template }}</code>
                </pre>
            </div>
            <div class="col s12"
                 id="script"
            >
                <pre>
                    <code class="javascript"
                          ref="script"
                    >{{ script }}</code>
                </pre>
            </div>
            <div class="col s12"
                 id="style"
                 v-if="style"
            >
                <pre>
                    <code class="css"
                          ref="style"
                    >{{ styled }}</code>
                </pre>
            </div>
        </div>
    </card>
</template>

<script>
    import parser from '../utils/parser'

    export default {
        data () {
            return {
                template: '',
                script: '',
                style: ''
            }
        },

        props: ['show'],

        watch: {
            show () {
                this.get()
            }
        },

        mounted () {
            this.get()
        },

        methods: {
            get () {
                parser.call(this, this.show).then(({ template, script, style }) => {
                    this.template = template
                    this.script = script
                    this.style = style
                    this.$nextTick(() => this.highlight())
                })
            },

            highlight () {
                hljs.highlightBlock(this.$refs.template)
                
                if (this.script) {
                    hljs.highlightBlock(this.$refs.script)
                }
                
                if (this.style) {
                    hljs.highlightBlock(this.$refs.style)
                }
            }
        }
    }
</script>

<style scoped>
    .card-panel {
        margin-top: 5rem;
        margin-bottom: 0;
    }

    .row {
        margin-bottom: 0 !important;
    }
</style>