$( document ).ready(function() {
    console.log( 'script.js ready!' );

    //to get the access token from url
    var accessToken = sessionStorage.getItem("accessToken");
    console.log(accessToken);

    //api call to get artists
    fetch('https://api.spotify.com/v1/me/top/artists?time_range=short_term&limit=3&offset=0', {
            method: 'GET',
            headers: { 'Authorization' : 'Bearer ' + accessToken}
        })
        .then(function(res){
            return res.json();
        })
        .then(function(data){
            console.log(data);
            var aImage1 = data.items[0].images[1].url;
            var aImage2 = data.items[1].images[1].url;
            var aImage3 = data.items[2].images[1].url;
            document.getElementById("artist.image1").src = aImage1;
            document.getElementById("artist.image2").src = aImage2;
            document.getElementById("artist.image3").src = aImage3;
            var aName1= data.items[0].name;
            var aName2= data.items[1].name;
            var aName3= data.items[2].name;
            document.getElementById("artist.name1").innerHTML = aName1;
            document.getElementById("artist.name2").innerHTML = aName2;
            document.getElementById("artist.name3").innerHTML = aName3;
        });

    //api call to get songs
    fetch('https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=3&offset=0', {
            method: 'GET',
            headers: { 'Authorization' : 'Bearer ' + accessToken}
        })
        .then(function(res){
            return res.json();
        })
        .then(function(data){
            console.log(data);
            var sName1= data.items[0].name;
            var sName2= data.items[1].name;
            var sName3= data.items[2].name;
            document.getElementById("song.name1").innerHTML = sName1;
            document.getElementById("song.name2").innerHTML = sName2;
            document.getElementById("song.name3").innerHTML = sName3;
            document.getElementById("song.name4").innerHTML = sName1;
            var sImage1 = data.items[0].album.images[1].url;
            var sImage2 = data.items[1].album.images[1].url;
            var sImage3 = data.items[2].album.images[1].url;
            document.getElementById("song.image1").src = sImage1;
            document.getElementById("song.image2").src = sImage2;
            document.getElementById("song.image3").src = sImage3;
            document.getElementById("song.image4").src = sImage1;
            var sArtist = data.items[0].album.artists[0].name;
            var aName = data.items[0].album.name;
            var popularity = data.items[0].popularity;
            console.log(popularity);
            document.getElementById("artist.name4").innerHTML = sArtist;
            document.getElementById("album.name").innerHTML = aName;
            document.getElementById("popularity").value = popularity;
        });
        sessionStorage.setItem("accessToken", accessToken);
});