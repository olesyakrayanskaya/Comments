document.addEventListener('DOMContentLoaded', function () {

    let comments = [];

});

function isLiked() {
    let noLiked = document.querySelector('.comments__icon_noliked');
    let liked = document.querySelector('.comments__icon_liked');
    let likesCounter = document.querySelector('.comments__like-count');

    noLiked.addEventListener('click', function () {
        noLiked.classList.add('hide');
        liked.classList.remove('hide');
        let count = Number(likesCounter.innerHTML) + 1;
        likesCounter.innerHTML = count;
    });

    liked.addEventListener('click', function () {
        noLiked.classList.remove('hide');
        liked.classList.add('hide');
        let count = Number(likesCounter.innerHTML) - 1;
        likesCounter.innerHTML = count;
    });
};

isLiked();

function deleteComment () {
    let deletBtn = document.querySelector('.comments__icon_del');
    let comment = document.querySelector('.comments__item');
};