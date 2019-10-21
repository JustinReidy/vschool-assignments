const axios = require("axios")

axios.get("https://api.vschool.io/betsy/todo").then((response) => {
    console.log(response.data)
})