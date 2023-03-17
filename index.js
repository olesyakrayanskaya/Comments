function sendComment() {

    let sendBtn = document.querySelector('.form__btn');

    let commentList = document.querySelector('.comments');

    sendBtn.onclick = function () {
        let currentCommentName = document.getElementById('name').value;
        let currentCommentText = document.getElementById('comment').value;
        let currentCommentDate = new Date(document.getElementById('date').value) || new Date();

        let comment = document.createElement('li');
        comment.className = 'comments__item';
        commentList.append(comment);

        let commentHeader = document.createElement('div');
        commentHeader.className = 'comments__header';
        comment.append(commentHeader);

        let commentName = document.createElement('span');
        commentName.className = 'comments__name';
        commentName.innerHTML = currentCommentName;
        commentHeader.append(commentName);

        function validName () {
            if (currentCommentName.length < 2) {
             sendBtn.disabled;
             document.getElementById('name').style.border = '1px solid #971515';
             document.getElementById('name').placeholder = 'заполните поле Имя';
            }
        }

        validName();

        let commentDay = document.createElement('span');
        commentDay.className = 'comments__day';
        commentDay.innerHTML = formatDay(currentCommentDate);
        commentHeader.append(commentDay);

        function formatDay(date) {
            let today = new Date();
            let diff = new Date() - date;
            let hourDiff = diff / 3600000;
            console.log(date.getDate + ' ' +date.getMonth)
            if (date == today) {
                return 'сегодня';
            } 
            let yesterday = new Date()
            yesterday.setTime(yesterday.getTime - (24*60*60*1000))
            if (date == yesterday) {
                return 'вчера';
            } else return '';
        }

        let commentDate = document.createElement('time');
        commentDate.innerHTML = formatDate(currentCommentDate);
        commentHeader.append(commentDate);

        function formatDate(date) {

            let dd = date.getDate();
            if (dd < 10) dd = '0' + dd;

            let mm = date.getMonth() + 1;
            if (mm < 10) mm = '0' + mm;

            let yy = date.getFullYear() % 100;
            if (yy < 10) yy = '0' + yy;

            return dd + '.' + mm + '.' + yy;
        }

        let commentTime = document.createElement('span');
        commentTime.className = 'comments__time';
        commentTime.innerHTML = formatTime();
        commentHeader.append(commentTime);

        function formatTime() {

            let newDate = new Date();
            let publicHours = newDate.getHours();
            let publicMinutes = newDate.getMinutes();

            if (publicHours < 10) {
                publicHours = '0' + publicHours;
            }

            if (publicMinutes < 10) {
                publicMinutes = '0' + publicMinutes;
            }
            return publicHours + ':' + publicMinutes;

        }

        let commetText = document.createElement('p');
        commetText.className = 'comments__text';
        commetText.innerHTML = currentCommentText;
        comment.append(commetText);

        let commentFooter = document.createElement('div');
        commentFooter.className = 'comments__footer';
        comment.append(commentFooter);

        let commentIconDel = document.createElement('img');
        commentIconDel.className = 'comments__icon comments__icon_del';
        commentIconDel.src = './icons-trash.svg';
        commentIconDel.alt = 'del';
        commentFooter.append(commentIconDel);

        commentIconDel.onclick = () => comment.remove();

        let likesWrapper = document.createElement('div');
        likesWrapper.className = 'likes__wrapper';
        commentFooter.append(likesWrapper);

        let noLikedIcon = document.createElement('img');
        noLikedIcon.className = 'comments__icon comments__icon_noliked';
        noLikedIcon.src = './icons-favorite-white.svg';
        noLikedIcon.alt = 'like';
        likesWrapper.append(noLikedIcon);

        let likedIcon = document.createElement('img');
        likedIcon.className = 'comments__icon comments__icon_liked hide';
        likedIcon.src = './icons-favorite-black.svg';
        likedIcon.alt = 'like';
        likesWrapper.append(likedIcon);

        let likeCounter = document.createElement('span');
        likeCounter.className = 'comments__like-count';
        likeCounter.innerHTML = Number(0);
        commentFooter.append(likeCounter);

        noLikedIcon.addEventListener('click', function () {
            noLikedIcon.classList.add('hide');
            likedIcon.classList.remove('hide');
            let count = Number(likeCounter.innerHTML) + 1;
            likeCounter.innerHTML = count;
        });

        likedIcon.addEventListener('click', function () {
            noLikedIcon.classList.remove('hide');
            likedIcon.classList.add('hide');
            let count = Number(likeCounter.innerHTML) - 1;
            likeCounter.innerHTML = count;
        });

        document.getElementById('name').value = '';
        document.getElementById('comment').value = '';
        document.getElementById('date').value = '';

    }
   
};

sendComment();