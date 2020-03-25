// 1. Definisikan komponen Vue
// Komponen "Home" akan menampilkan halaman depan aplikasi
const Home = Vue.extend({ 
    template: '#home',
    data: function() {
      return {
        judul: 'Selamat datang di Single Page Application',
        konten: 'Vue.js memungkinkan developer web membangun aplikasi web yang dinamis, ringan dan cepat.'
      }
    }
  });
  // Komponen "Berita" akan menampilkan daftar berita
  var data_berita = {
    keywords: '',
    berita: [
      {judul: 'Lorem Ipsum', konten: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur feugiat, eros quis semper dignissim, libero erat semper ante, non porttitor sem metus a neque.'},
      {judul: 'In Vehicula Vulputate', konten: 'In vehicula vulputate eros vitae porttitor. Praesent commodo accumsan semper. Proin eu tellus purus, eu malesuada sapien.'},
      {judul: 'Aliquam Laoreet Gravida Erat', konten: 'Aliquam laoreet gravida erat, in hendrerit arcu lobortis id. Cras libero augue, aliquam nec sollicitudin id, molestie eu ante.'},
      {judul: 'Donec Adipiscing', konten: 'Donec adipiscing, diam eget tempor volutpat, odio justo molestie dolor, vitae sodales felis risus a mi.'},
      {judul: 'Praesent Mollis', konten: 'Praesent mollis placerat mi ut accumsan. Vivamus ultricies lobortis risus, quis venenatis ligula elementum id.'},
    ],
    berita_filtered: []
  };
  const Berita = Vue.extend({
    template: '#berita',
    data: function() {
      return data_berita;
    },
    methods: {
      search: function() {
        var katakunci = new RegExp(this.keywords, 'ig');
        if (this.keywords.length > 2) {
          this.berita_filtered = this.berita.filter(el => el.judul.search(katakunci)>-1);
        } else {
          this.berita_filtered = [];
        }
      }
    }
  });
  
  // 2. Definisikan routing menuju komponen
  const routes = [
    { path: '/', component: Home},
    { path: '/berita', component: Berita }
  ]
  
  // 3. Buat instance Router Vue
  const router = new VueRouter({ routes })
  
  // 4. Tempelkan instance "router" ke App Vue
  const spa = new Vue({ router }).$mount('#spa');