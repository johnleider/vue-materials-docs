function parse (component) {
    return this.$http.get(`${component}.vue`)
        .then(response => {
            const template = response.data.match(/<template>(.|\n|\r)*?<\/template>/)
            const script = response.data.match(/<script[^>](.|\n|\r)*?<\/script>/)
            const style = response.data.match(/<style[^>](.|\n|\r)*?<\/style>/)

            return {
                template: template ? template[0] : '',
                script: script ? script[0].replace(/\stype="text\/babel"/, '') : '',
                style: style ? style[0] : ''
            }
        })
}

export default parse