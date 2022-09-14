<template>

    <!-- Menentukan background page Testimoni -->
    <div class="bg-warning">

        <!-- Heading dari page -->
        <div class="p-5">
            <h2>Kisah Peminjam Dana</h2>
            <p>Kisah-kisah sukses pengguna KlikACC yang berhasil merubah hidupnya dengan KlikACC</p>
        </div>

        <!-- Foto dan Content Testimoni -->
        <div class="row">

            <!-- For loop mengambil data -->
            <div v-for="testimoni in testimonis" :key="testimoni.id">

                <!-- Foto testimoni -->
                <img :src="testimoni.foto" tabindex="0">

                <!-- Isi testimoni -->
                <div id="content" class="bg-primary col-md-6 text-white p-5">
                    <h3><strong>"{{testimoni.testimoni}}"</strong></h3>
                    <h3 class="mt-4"><strong>{{testimoni.nama}}</strong></h3>
                    <h3>{{testimoni.usaha}}</h3>
                    <h3 class="mt-4">Dana Terkumpul</h3>
                    <h3><strong>Rp{{testimoni.dana}}</strong> dalam {{testimoni.waktu}} menit</h3>
                </div>
                
            </div>

        </div>

    </div>

</template>

<script>
// Import library Axios
import axios from 'axios'

export default {
    name: 'Testimoni',

    // Membuat array untuk store data
    data() {
        return {
            testimonis: []
        }
    },
    
    // Method untuk menstore data
    methods: {
        setTestimonis(data) {
            this.testimonis = data
        }
    },

    // Mengambil data dari JSON
    mounted() {
        axios
            .get("http://localhost:5000/testimoni")
            .then((response) => this.setTestimonis(response.data))
            .catch((error) => console.log("Error: ", error))
    }
}
</script>

<style>

/* Menyembunyikan #content ketika gambar belum diklik */
#content {
    display: none;
}

/* Mengatur style img dan membuatnya bisa diklik */
img {
    cursor: pointer;
    filter: grayscale(100%);
}

/* Ketika img diklik, #content ditampilkan */
img:focus+#content {
    display: block;
}
</style>