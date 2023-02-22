class Album {
    name: string;
    singer: string;
    year: number;
    genre: string;
    onSpotify: boolean;

    constructor(nameV: string, singerV: string, yearV: number, genreV: string, onSpotifyV: boolean = true) {
        this.name = nameV;
        this.singer = singerV;
        this.year = yearV;
        this.genre = genreV;
        this.onSpotify = onSpotifyV;   
    }

    changeSpotify(): void {
        this.onSpotify = !this.onSpotify;
        console.log("Spotify status changed.")
    }
}

class Song extends Album {
    hasVideoClip: boolean;

    constructor(nameV: string, singerV: string, yearV: number, genreV: string, onSpotifyV: boolean = true, hasVideoClipV: boolean = false) {
        super(nameV, singerV, yearV, genreV, onSpotifyV);
        this.hasVideoClip = hasVideoClipV;
    }

    changeSpotify(): void {
        if (this.hasVideoClip) {
            this.onSpotify = true;
        }
    }
}

let album: Album;
album = new Album("You Belong With Me", "Taylor Swift", 2008, "Country Pop", true);
console.log(album.changeSpotify());