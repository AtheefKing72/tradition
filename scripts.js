document.addEventListener("DOMContentLoaded", function () {
    let likeButton = document.getElementById("like");
    let shareButton = document.getElementById("share");
    let commentButton = document.getElementById("comment");
    let commentBox = document.getElementById("comment-text");
    let commentHistory = document.getElementById("comment-history");
    let likeCount = document.getElementById("like-count");
    let shareOptions = document.getElementById("share-options");

    // Load stored comments
    function loadComments() {
        let comments = JSON.parse(localStorage.getItem("comments")) || [];
        commentHistory.innerHTML = "";
        comments.forEach(comment => {
            let li = document.createElement("li");
            li.textContent = comment;
            commentHistory.appendChild(li);
        });
    }

    loadComments();

    // Like button functionality
    let liked = false;
    likeButton.addEventListener("click", function () {
        liked = !liked;
        let count = parseInt(likeCount.textContent);
        likeCount.textContent = liked ? count + 1 : count - 1;
        likeButton.classList.toggle("liked", liked);
    });

    // Show share options
    shareButton.addEventListener("click", function () {
        shareOptions.classList.toggle("hidden");
    });

    // Share on Facebook
    document.getElementById("share-facebook").addEventListener("click", function () {
        window.open("https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(window.location.href), "_blank");
    });

    // Share on Twitter
    document.getElementById("share-twitter").addEventListener("click", function () {
        window.open("https://twitter.com/intent/tweet?url=" + encodeURIComponent(window.location.href), "_blank");
    });

    // Share on WhatsApp
    document.getElementById("share-whatsapp").addEventListener("click", function () {
        window.open("https://api.whatsapp.com/send?text=" + encodeURIComponent(window.location.href), "_blank");
    });

    // Copy Link to clipboard
    document.getElementById("share-link").addEventListener("click", function () {
        navigator.clipboard.writeText(window.location.href).then(function () {
            alert("Link copied to clipboard!");
        }).catch(function (err) {
            alert("Failed to copy: " + err);
        });
    });

    // Comment button functionality
    commentButton.addEventListener("click", function () {
        let commentText = commentBox.value.trim();
        if (commentText !== "") {
            let comments = JSON.parse(localStorage.getItem("comments")) || [];
            comments.push(commentText);
            localStorage.setItem("comments", JSON.stringify(comments));
            loadComments();
            commentBox.value = "";
        } else {
            alert("Please write a comment before submitting.");
        }
    });
});
