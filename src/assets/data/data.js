export const data = {
    bride: {
        L: {
            id: 1,
            name: 'M Ryan Bagus Valentin, S.Kom',
            child: 'Putra Kedua',
            father: 'Ahmad Dedy Surya I, Alm',
            mother: 'Dadah Siti Saadah',
            image: './src/assets/images/cowo.png'
        },
        P: {
            id: 2,
            name: 'Lila Pratama Putri, S.Keb',
            child: 'Putri Pertama',
            father: 'Ermanto',
            mother: 'Susilawati',
            image: './src/assets/images/cewe.jpg'
        },

        couple: './src/assets/images/duo.jpg'

    },

    time: {
        marriage: {
            year: '2025',
            month: 'September',
            date: '06',
            day: 'Sabtu',
            hours: {
                start: '08.00',
                finish: 'Selesai'
            }
        },
        reception: {
            year: '2025',
            month: 'September',
            date: '06',
            day: 'Sabtu',
            hours: {
                start: '11.00',
                finish: 'Selesai'
            }
        },
        address: 'Kp. Lamping, RT 03/ RW 05, Margalaksana, Kecamatan Cilawu, Kabupaten Garut'
    },

    link: {
        calendar: 'https://calendar.app.google/oSVLRMYC79GzuA4f9',
        map: 'https://maps.app.goo.gl/p1QXR5gmwV2ausfeA',
    },

    galeri: [
        {
            id: 1,
            image: './src/assets/images/1.jpg'
        },
        {
            id: 2,
            image: './src/assets/images/2.jpg'
        },
        {
            id: 3,
            image: './src/assets/images/3.jpg'
        },
        {
            id: 4,
            image: './src/assets/images/4.png'
        },
        {
            id: 5,
            image: './src/assets/images/5.png'
        }
    ],

    bank: [
        {
            id: 1,
            name: 'M Ryan Bagus Valentin',
            icon: './src/assets/images/bca.png',
            rekening: '6085030772'
        },
        {
            id: 2,
            name: 'Lila Pratama Putri',
            icon: './src/assets/images/bca.png',
            rekening: '4280383941'
        },
    ],

    audio: './src/assets/audio/pure-love-304010.mp3',

    api: 'https://script.google.com/macros/s/AKfycbzT2IFHDdRSLPhHE2ZHWF3Ah0VqZfaOdYudk7KzMWqDB5W0ImsSefJR8kbN9JaHcD24/exec',

    navbar: [
        {
            id: 1,
            teks: 'Home',
            icon: 'bx bxs-home-heart',
            path: '#home',
        },
        {
            id: 2,
            teks: 'Mempelai',
            icon: 'bx bxs-group',
            path: '#bride',
        },
        {
            id: 3,
            teks: 'Tanggal',
            icon: 'bx bxs-calendar-check',
            path: '#time',
        },
        {
            id: 4,
            teks: 'Galeri',
            icon: 'bx bxs-photo-album',
            path: '#galeri',
        },
        {
            id: 5,
            teks: 'Ucapan',
            icon: 'bx bxs-message-rounded-dots',
            path: '#wishas',
        },
    ],
}
