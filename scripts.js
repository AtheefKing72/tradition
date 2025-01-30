document.addEventListener("DOMContentLoaded", function() {
    let likeButton = document.getElementById("like");
    let shareButton = document.getElementById("share");
    let commentButton = document.getElementById("comment");
    let commentBox = document.querySelector("textarea");
    let shareOptions = document.getElementById("share-options");

    // Show share options when share button is clicked
    shareButton.addEventListener("click", function() {
        shareOptions.style.display = 'block';  // Show share options
    });

    // Share on Facebook
    document.getElementById("share-facebook").addEventListener("click", function() {
        window.open("https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(window.location.href), "_blank");
    });

    // Share on Twitter
    document.getElementById("share-twitter").addEventListener("click", function() {
        window.open("https://twitter.com/intent/tweet?url=" + encodeURIComponent(window.location.href), "_blank");
    });

    // Share on WhatsApp
    document.getElementById("share-whatsapp").addEventListener("click", function() {
        window.open("https://api.whatsapp.com/send?text=" + encodeURIComponent(window.location.href), "_blank");
    });

    // Copy Link to clipboard
    document.getElementById("share-link").addEventListener("click", function() {
        navigator.clipboard.writeText(window.location.href).then(function() {
            alert("Link copied to clipboard!");
        }).catch(function(err) {
            alert("Failed to copy: " + err);
        });
    });

    // Comment button functionality
    commentButton.addEventListener("click", function() {
        if (commentBox.value.trim() !== "") {
            alert("Comment submitted: " + commentBox.value);
            commentBox.value = "";
        } else {
            alert("Please write a comment before submitting.");
        }
    });
});
