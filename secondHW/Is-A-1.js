var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Album = /** @class */ (function () {
    function Album(nameV, singerV, yearV, genreV, onSpotifyV) {
        if (onSpotifyV === void 0) { onSpotifyV = true; }
        this.name = nameV;
        this.singer = singerV;
        this.year = yearV;
        this.genre = genreV;
        this.onSpotify = onSpotifyV;
    }
    Album.prototype.changeSpotify = function () {
        this.onSpotify = !this.onSpotify;
        console.log("Spotify status changed.");
    };
    return Album;
}());
var Song = /** @class */ (function (_super) {
    __extends(Song, _super);
    function Song(nameV, singerV, yearV, genreV, onSpotifyV, hasVideoClipV) {
        if (onSpotifyV === void 0) { onSpotifyV = true; }
        if (hasVideoClipV === void 0) { hasVideoClipV = false; }
        var _this = _super.call(this, nameV, singerV, yearV, genreV, onSpotifyV) || this;
        _this.hasVideoClip = hasVideoClipV;
        return _this;
    }
    Song.prototype.changeSpotify = function () {
        if (this.hasVideoClip) {
            this.onSpotify = true;
        }
    };
    return Song;
}(Album));
var album;
album = new Album("You Belong With Me", "Taylor Swift", 2008, "Country Pop", true);
console.log(album.changeSpotify());
