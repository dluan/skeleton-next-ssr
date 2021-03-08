import {extendTheme} from "@chakra-ui/react"

const guiaTheme = extendTheme({
    fonts:{
        body: "Trebuchet MS, Arial",
        heading: "Trebuchet MS, Arial"
    },
    colors: {
        red: {
            500: "#f92a3d",
            900: "#d80526"
        }
    }
})

export default guiaTheme
