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

const temp = `<div>
<p class="p-1"><input type="text" class="form-control" v-model="keywords" 
  v-on:keyup="search"
  placeholder="Masukkan kata kunci pencarian"></p>
<div v-if="berita_filtered.length>0">
  <div class="berita p-2" v-for="b in berita_filtered">
    <p class="h4">{{ b.judul }}</p>
    <p class="lead">{{ b.konten }}</p>
    <hr/>
  </div>
</div>
<div v-else>
  <div class="berita p-2" v-for="b in berita">
    <p class="h4">{{ b.judul }}</p>
    <p class="lead">{{ b.konten }}</p>
    <hr/>
  </div>
</div>`;

export default {
    template: temp,
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
};