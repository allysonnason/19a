var app = new Vue ({
    el: '#app',
    data: {
        songs: [
            {title: 'Leroy', artist: 'Jim'},
            {title: 'knocking boots', artist: 'Luke Bryan'}
        ],
        newSong: {
            title: '',
            artist: ''
        }
    },

    methods:
    {
        addSong() {
            this.songs.splice(0,0,{ title: this.newSong.title, artist: this.newSong.artist })
            this.newSong.title= '';
            this.newSong.artist= '';

        },

        deleteSong(target) {
            this.songs.splice(target, 1)
        }
    }
});
