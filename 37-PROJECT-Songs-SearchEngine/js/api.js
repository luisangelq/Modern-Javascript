import * as UI from './api.js';

class API {
    constructor(artist, song) {
        this.artist = artist;
        this.song = song;
    }

    consultAPI() {
        //get api fom lyrics.ovh
        let url = `https://api.lyrics.ovh/v1/${this.artist}/${this.song}`
        fetch(url)
            .then(response => response.json())
            .then(data => {
                const { lyrics } = data;

                UI.divResult.textContent = lyrics;
            }).catch(error => console.log(error));
    }
}

export default API;