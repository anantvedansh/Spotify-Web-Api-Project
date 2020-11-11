$(document).ready(function () {
    console.log('script.js ready!');

    //to get the access token homepage.js
    var accessToken = sessionStorage.getItem("accessToken");
    console.log(accessToken);

    //declaring variables
    var artist1;
    var artist2;
    var genre;
    var song1;
    var song2;

    //api call to get artists
    fetch('https://api.spotify.com/v1/me/top/artists?time_range=short_term&limit=2&offset=0', {
        method: 'GET',
        headers: { 'Authorization': 'Bearer ' + accessToken }
    })
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            artist1 = data.items[0].id;
            artist2 = data.items[1].id;
            genre = data.items[1].genres[0];

        });

    //api call to get songs
    fetch('https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=3&offset=0', {
        method: 'GET',
        headers: { 'Authorization': 'Bearer ' + accessToken }
    })
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            song1 = data.items[0].id;
            song2 = data.items[1].id;

            console.log('song1 from fn' + data.items[0].id + '|| artist id from var: ' + artist1);
            console.log('genre: ' + genre);

            //api call to get recommendations
            fetch(`https://api.spotify.com/v1/recommendations?limit=5&seed_artists=${artist1}%2C${artist2}&seed_genres=${genre}&seed_tracks=${song1}%2C${song2}&min_popularity=50`, {
                method: 'GET',
                headers: { 'Authorization': 'Bearer ' + accessToken }
            })
                .then(function (res) {
                    return res.json();
                })
                .then(function (data) {
                    console.log(data);
                    var track1 = data.tracks[0].name;
                    var track2 = data.tracks[1].name;
                    var track3 = data.tracks[2].name;
                    var track4 = data.tracks[3].name;
                    var track5 = data.tracks[4].name;
                    document.getElementById("track1").innerHTML = track1;
                    document.getElementById("track2").innerHTML = track2;
                    document.getElementById("track3").innerHTML = track3;
                    document.getElementById("track4").innerHTML = track4;
                    document.getElementById("track5").innerHTML = track5;
                    document.getElementById("track1").onclick = function () { loadSong1() };
                    document.getElementById("track2").onclick = function () { loadSong2() };
                    document.getElementById("track3").onclick = function () { loadSong3() };
                    document.getElementById("track4").onclick = function () { loadSong4() };
                    document.getElementById("track5").onclick = function () { loadSong5() };
                    function loadSong1() {
                        var songImage = data.tracks[0].album.images[0].url;
                        document.getElementById("song.image").style.visibility = 'visible';
                        document.getElementById("likebtn").style.visibility = 'visible';
                        document.getElementById("song.image").src = songImage;
                        var songName = data.tracks[0].name;
                        document.getElementById("song.name").innerHTML = songName;
                        var artist = data.tracks[0].artists[0].name;
                        document.getElementById("artist.name").innerHTML = artist;
                        var albumName = data.tracks[0].album.name;
                        document.getElementById("album.name").innerHTML = albumName;
                        var songId = data.tracks[0].id;
                        console.log(`https://open.spotify.com/embed/album/${songId}`);
                        document.getElementById("player").src = `https://open.spotify.com/embed/track/${songId}`;
                        document.getElementById("likebtn").onclick = function () { addSong(songId) };
                    }
                    function loadSong2() {
                        var songImage = data.tracks[1].album.images[0].url;
                        document.getElementById("song.image").style.visibility = 'visible';
                        document.getElementById("likebtn").style.visibility = 'visible';
                        document.getElementById("song.image").src = songImage;
                        var songName = data.tracks[1].name;
                        document.getElementById("song.name").innerHTML = songName;
                        var artist = data.tracks[1].artists[0].name;
                        document.getElementById("artist.name").innerHTML = artist;
                        var albumName = data.tracks[1].album.name;
                        document.getElementById("album.name").innerHTML = albumName;
                        var songId = data.tracks[1].id;
                        console.log(`https://open.spotify.com/embed/album/${songId}`);
                        document.getElementById("player").src = `https://open.spotify.com/embed/track/${songId}`;
                        document.getElementById("likebtn").onclick = function () { addSong(songId) };
                    }
                    function loadSong3() {
                        var songImage = data.tracks[2].album.images[0].url;
                        document.getElementById("song.image").style.visibility = 'visible';
                        document.getElementById("likebtn").style.visibility = 'visible';
                        document.getElementById("song.image").src = songImage;
                        var songName = data.tracks[2].name;
                        document.getElementById("song.name").innerHTML = songName;
                        var artist = data.tracks[2].artists[0].name;
                        document.getElementById("artist.name").innerHTML = artist;
                        var albumName = data.tracks[2].album.name;
                        document.getElementById("album.name").innerHTML = albumName;
                        var songId = data.tracks[2].id;
                        console.log(`https://open.spotify.com/embed/album/${songId}`);
                        document.getElementById("player").src = `https://open.spotify.com/embed/track/${songId}`;
                        document.getElementById("likebtn").onclick = function () { addSong(songId) };
                    }
                    function loadSong4() {
                        var songImage = data.tracks[3].album.images[0].url;
                        document.getElementById("song.image").style.visibility = 'visible';
                        document.getElementById("likebtn").style.visibility = 'visible';
                        document.getElementById("song.image").src = songImage;
                        var songName = data.tracks[3].name;
                        document.getElementById("song.name").innerHTML = songName;
                        var artist = data.tracks[3].artists[0].name;
                        document.getElementById("artist.name").innerHTML = artist;
                        var albumName = data.tracks[3].album.name;
                        document.getElementById("album.name").innerHTML = albumName;
                        var songId = data.tracks[3].id;
                        console.log(`https://open.spotify.com/embed/album/${songId}`);
                        document.getElementById("player").src = `https://open.spotify.com/embed/track/${songId}`;
                        document.getElementById("likebtn").onclick = function () { addSong(songId) };
                    }
                    function loadSong5() {
                        var songImage = data.tracks[4].album.images[0].url;
                        document.getElementById("song.image").style.visibility = 'visible';
                        document.getElementById("likebtn").style.visibility = 'visible';
                        document.getElementById("song.image").src = songImage;
                        var songName = data.tracks[4].name;
                        document.getElementById("song.name").innerHTML = songName;
                        var artist = data.tracks[4].artists[0].name;
                        document.getElementById("artist.name").innerHTML = artist;
                        var albumName = data.tracks[4].album.name;
                        document.getElementById("album.name").innerHTML = albumName;
                        var songId = data.tracks[4].id;
                        console.log(`https://open.spotify.com/embed/album/${songId}`);
                        document.getElementById("player").src = `https://open.spotify.com/embed/track/${songId}`;
                        document.getElementById("likebtn").onclick = function () {addSong(songId)};
                    }
                    function addSong(id) {
                        fetch(`https://api.spotify.com/v1/me/tracks?ids=${id}`, {
                            method: 'PUT',
                            headers: { 'Authorization': 'Bearer ' + accessToken }
                        })
                    }
                });
        });

});