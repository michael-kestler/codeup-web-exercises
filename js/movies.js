"use strict";

const URL = "https://beryl-chalk-crown.glitch.me/movies";

// *** RENDER MOVIES ***
let html = '';
const displayMovies = () => {
    fetch(`${URL}/`)
        .then(res => res.json())
        .then(movies => {
            // console.log(movies);
            $('#page-loading').replaceWith('');
            movies.forEach(movie => {
                html += `<div class="movies-list">
                        <img class="poster" src="${movie.poster}" alt="a movie poster">
                        <h5 contenteditable="true" id="edit-title">${movie.title}</h5>
                        <h6 contenteditable="true" id="edit-rating">Rating: ${movie.rating}</h6>
                        <button type="button" class="delete" id="${movie.id}">Delete</button>
                        <button type="button" class="edit" id="${movie.id}">Edit</button>
                    </div>
                    <br>`
            });
            $('.movie').replaceWith(html)
        })
        .catch(error => {
            console.log(error);
        });
}
displayMovies();

// *** POST FUNCTION ***
$('#add-new-movie').click(function(e) {
    e.preventDefault();
    const moviePost = {id: '', title: $('#title').val(), rating: $('#rating').val()};
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(moviePost),
    };
    fetch(URL, options)
        .then(res => res.json())
        .then(newMovie => {
            console.log(newMovie);
            html = `<div class="movie">
                        <h5 contenteditable="true" id="edit-title">${newMovie.title}</h5>
                        <h6 contenteditable="true" id="edit-rating">Rating: ${newMovie.rating}</h6>
                    </div>
                    <br>`
            $('#movie').append(html);
        });
    setTimeout(function (){
        location.reload();
    },1000);

});

// *** DELETE FUNCTIONALITY ***
function deleteMovie(id) {
    fetch(`${URL}/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(() => {
            console.log(`Deleted: ${id}`)
        })
        .catch(console.error)
}
// *** DELETE BUTTON FUNCTIONALITY ***
let timeoutForDelete = setTimeout(function() {
    $('.delete').click(function(e) {
        e.preventDefault();
        var id = $(e.target).attr('id');
        console.log(id)
        deleteMovie(id);
        setTimeout(function (){
            location.reload();
        },1000);
    });
}, 1000);