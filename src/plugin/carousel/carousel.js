import CarouselBox from "./CarouselBox.vue"

export default {
    install: (app, options) => {
        app.component("carousel-box", CarouselBox)
    }
}