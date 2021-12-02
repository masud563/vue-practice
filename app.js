console.log('Bismillahhir Rahmanir Rahim');
const app = Vue.createApp({
    data() {
        return{
            showBooks: true,
            books : [
                {title: 'name of the wind', author: 'patrick rothfuss', img: './asset/name of the wind.png', isFav: true},
                {title: 'the way of kings', author: 'brandon sanderson',img: './asset/the way of kings.png', isFav: false},
                {title: 'the final empire', author: 'brandon sanderson',img: './asset/the final empire.png', isFav: true }
            ]
        }
    },
    methods: {

       toggleBooks() {
           this.showBooks = !this.showBooks
       },

       toggleFavourite(book) {
           book.isFav = !book.isFav
       }
       
    },

    computed: {
        filteredBooks() {
            return this.books.filter((book)=>book.isFav)
        }
    }
})

app.mount('#app')