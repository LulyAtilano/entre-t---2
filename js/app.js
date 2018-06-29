function music(clave){
    var apiKeySong = "BQBZPxL0o_gkFa7mtbPp-odOPeDUwmXUTRxxxLxHrqFsLOHK935dKmq9caXgW885lzEskloCBbnp1PDsA9vGnYPOcYhLBOQb0GJ_NvJrNnwEnftgPSMhHC5tEfZs-Nca5y6tNZ7MHMY2rRLOugAZsOO4pebsPWXYa-OrBHCsCXHRWtCFw0n5pyPCF_vEH_A_2W7T2CErA2WpcilHTzXAXT4iIBlMxdLYT6tIiNlyco960jX_yazijRIMUcXY8WCKFEIqr_g";

    function fillTemplateSong(template, data) {
        var finalTemplate = "";
        console.log(template); 
        $("#song").html("");
        // var finalTemplate ="";
        for(var index in data){
            console.log(template); 
            console.log("lala");
            var value = data[index];
            console.log(value)
            // template = template.replace(new RegExp('{{'+index+'}}', 'g'), escapeHtml(value) );
            finalTemplate = template.replace('{{id}}', value);
            console.log(finalTemplate);

            $("#song").append(finalTemplate);
        };
        
        return template;
    };

    $.ajax({
        url: `https://api.spotify.com/v1/search?q=${clave}%20music%20&type=track&market=mx&limit=3`,

        headers: {
            'Authorization': 'Bearer ' + apiKeySong
        },
        success: function(response){
            console.log(response);
            var data = [];
            var template = '<iframe src="https://open.spotify.com/embed/track/{{id}}" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>';
            var $containerSongs = $("#music-area");
            $containerSongs.html("");
            console.log(template);

            response.tracks.items.forEach( function(song){
                data.push(song.id);
                
                console.log(data);
            });

            var filledTemplate = fillTemplateSong(template, data);
            // $containerSongs.append(filledTemplate);




        },
        error: function (xhr, ajaxOptions, thrownError) {
            if(xhr.status == 401){
                console.log("token expirado");
            } else {
                alert(xhr.status);
                alert(thrownError);
            }  
        }
    });

}

$(document).ready(function(){
    //INICIALIZACION CARRUSEL
    $('.carousel').carousel({
        interval: 2000
    })

    //INICIO CÓDIGO VIDEO
    var apiKey = 'AIzaSyDEVJfSyHmltO9EDu1Q1MEFqGDl6xEuNLM';

    $('#angry-button').click(function(){
    //MUESTRA DOCUMENTALES (ENOJO)
        $('#characters-container').html('');
        $.ajax({
            url: 'https://www.googleapis.com/youtube/v3/search?type=video&q=documentales&maxResults=3&part=snippet&key=' + apiKey,
            success: function(response){

            var template = $('#template-character').html();
            var $characters = $('#characters-container');

            response.items.forEach(function(character){

                    var data = {
                        video: 'https://www.youtube.com/embed/'+character.id.videoId,
                        title: character.snippet.title
                    };
                    
                    var filledTemplate = fillTemplate(template, data);
                    $characters.append(filledTemplate);
            });
            }
        });

        music("angry");

        $('#books-angry').show();
        $('#books-sad').hide();
        $('#books-romance').hide();
        $('#books-motivational').hide();
    
        $('.title-info').show();

    });

    $('#sad-button').click(function(){
        //MUESTRA PELICULAS TRISTES (TRISTEZA)
        $('#characters-container').html('');
        $.ajax({
            url: 'https://www.googleapis.com/youtube/v3/search?type=video&q=peliculatristecompleta&maxResults=3&part=snippet&key=' + apiKey,
            success: function(response){
    
            var template = $('#template-character').html();
            var $characters = $('#characters-container');
    
            response.items.forEach(function(character){
    
                    var data = {
                        video: 'https://www.youtube.com/embed/'+character.id.videoId,
                        title: character.snippet.title
                    };
                    
                    var filledTemplate = fillTemplate(template, data);
                    $characters.append(filledTemplate);
            });
            }
        });
        music("sad");

        $('#books-angry').hide();
        $('#books-sad').show();
        $('#books-romance').hide();
        $('#books-motivational').hide();

        $('.title-info').show();
    });

    $('#romance-button').click(function(){
        //MUESTRA PELICULAS ROMANTICAS (ROMANCE)
        $('#characters-container').html('');
        $.ajax({
            url: 'https://www.googleapis.com/youtube/v3/search?type=video&q=pelicularomanticacompleta&maxResults=3&part=snippet&key=' + apiKey,
            success: function(response){
    
            var template = $('#template-character').html();
            var $characters = $('#characters-container');
    
            response.items.forEach(function(character){
    
                    var data = {
                        video: 'https://www.youtube.com/embed/'+character.id.videoId,
                        title: character.snippet.title
                    };
                    
                    var filledTemplate = fillTemplate(template, data);
                    $characters.append(filledTemplate);
            });
            }
        });  
        music("love");

        $('#books-angry').hide();
        $('#books-sad').hide();
        $('#books-romance').show();
        $('#books-motivational').hide();

        $('.title-info').show();
    });

    $('#motivational-button').click(function(){
        //MUESTRA PELICULAS MOTIVACIONALES (MOTIVADO)
        $('#characters-container').html('');
        $.ajax({
            url: 'https://www.googleapis.com/youtube/v3/search?type=video&q=peliculamotivadoracompleta&maxResults=3&part=snippet&key=' + apiKey,
            success: function(response){
    
            var template = $('#template-character').html();
            var $characters = $('#characters-container');
    
            response.items.forEach(function(character){
    
                    var data = {
                        video: 'https://www.youtube.com/embed/'+character.id.videoId,
                        title: character.snippet.title
                    };
                    
                    var filledTemplate = fillTemplate(template, data);
                    $characters.append(filledTemplate);
            });
            }
        });

        music("motivational");

        $('#books-angry').hide();
        $('#books-sad').hide();
        $('#books-romance').hide();
        $('#books-motivational').show();

        $('.title-info').show();
        
    });

    function fillTemplate(template, data) {
        for(var index in data){
            //console.log(index);
            //console.log(data);
            var value = data[index];
            template = template.replace(new RegExp('{{'+index+'}}', 'g'), escapeHtml(value) );
        };
        return template;
    }
    
    function escapeHtml(str) {
        var div = document.createElement('div');
        div.appendChild(document.createTextNode(str));
        return div.innerHTML;
    }
    //TERMINO CÓDIGO VIDEO******

    //**************************CÓDIGO AMBAR**********************************************
    //COMIENZA CÓDIGO SPOTIFY

    // var apiKey = "BQBe1GwJebNeGhezXbytKxGTiy-DJcWqiO15nJ1UeSmWtlOP62guGdV12UvwBBugDFvRTjXb5BU8iYqlh5inPfhv2QYKB5vy8z-kifL_6IUHZH8xGIug3PkogcGa8D368SKzdsb3lFwlKg2bHvjDDohjE5OarqPbSuEZDwhyrLOB2ZUUUxYCdmgQ7ilGlwSGR3AgtBLrD3YbDJHO_zHdugyF9tbEkHO6unjmOMAQ_-xKq0hNHmhk6WvP0kxWwgSr1gQRATc";


    // $.ajax({
    //     url: 'https://api.spotify.com/v1/search?q=sad%20music%20&type=track&market=mx&limit=3',

    //     headers: {
    //         'Authorization': 'Bearer ' + apiKey
    //     },
    //     success: function(response){
    //         console.log(response);
    //         var data = [];
    //         var template = '<iframe src="https://open.spotify.com/embed/track/{{id}}" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>';
    //         var $containerSongs = $("#music-area");
    //         console.log(template);

    //         response.tracks.items.forEach( function(song){
    //             data.push(song.id);
                
    //             console.log(data);
    //         });

    //         var filledTemplate = fillTemplateSong(template, data);
    //         // $containerSongs.append(filledTemplate);




    //     },
    //     error: function (xhr, ajaxOptions, thrownError) {
    //         if(xhr.status == 401){
    //             console.log("token expirado");
    //         } else {
    //             alert(xhr.status);
    //             alert(thrownError);
    //         }  
    //     }
    // });

    
    function escapeHtml(str) {
        var div = document.createElement('div');
        div.appendChild(document.createTextNode(str));
        return div.innerHTML;
    };



    //TERMINA CÓDIGO SPOTIFY
    //**************************SE CIERRA CÓDIGO AMBAR*****************************************


    // document.getElementById("logout").addEventListener('click',function (){
    // //console.log('click');
    // firebase.auth().signOut();
    // });

});

/*
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      //console.log(user);
       //console.log(user.displayName);
      //console.log(user.photoURL);
       //console.log(user.uid)
       4('#profile-user').removeClass(hidden);
     } else {
       console.log('desloggeado');
       window.location="index.html";
     }
});*/


function fillTemplate(template, data) {
    for(var index in data){
        //console.log(index);
        //console.log(data);
        var value = data[index];
        template = template.replace(new RegExp('{{'+index+'}}', 'g'), escapeHtml(value) );
    };
    return template;
}

function escapeHtml(str) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
}