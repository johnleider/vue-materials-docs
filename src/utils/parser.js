function parse (component) {
    return this.$http.get(`${component}.vue`)
        .then(response => {
            return {
                template: response.data.match(/<template>(.|\n|\r)*?<\/template>/)[0],
                script: response.data.match(/<script[^>](.|\n|\r)*?<\/script>/)[0].replace(/\stype="text\/babel"/, '')
            }
        })
}

export default parse