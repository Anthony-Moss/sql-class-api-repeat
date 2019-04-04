const db = require('./conn');

class music {
    constructor(id, title, album, artist, genre) {
        this.id = id;
        this.title = title;
        this.album = album;
        this.artist = artist;
        this.genre = genre;
    }

    static getAll() {
        return db.any(`select * from music`)
        .then((arrayOfMuisc) => {
            return arrayOfMuisc.map((musicData) => {
                const aSong = new music(musicData.id, musicData.title, musicData.album, musicData.artist, musicData.genre);
                return aSong;
            });
        });
    };
}

module.exports = music;