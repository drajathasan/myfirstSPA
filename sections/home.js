const newLocal = `<div class="jumbotron jumbotron-fluid"><h1 class="display-4 text-center">{{ judul }}</h1>
    <hr class="my-4"/>
  <p class="lead text-center">{{ konten }}</p> <router-link class="nav-link" to="/berita">Hai</router-link>`;

export default {
    template: newLocal,
    data: function() {
    return {
        judul: 'Selamat datang di Single Page Application',
        konten: 'Vue.js memungkinkan developer web membangun aplikasi web yang dinamis, ringan dan cepat.'
    }
    },
    methods : {
        setAlert(){
            alert('Hai');
        }
    } 
}