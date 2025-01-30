document.addEventListener("DOMContentLoaded", function() {
    let likeButton = document.getElementById("like");
    let shareButton = document.getElementById("share");
    let commentButton = document.getElementById("comment");
    let commentBox = document.querySelector("textarea");
    let shareOptions = document.getElementById("share-options");
    let commentHistory = document.getElementById("comment-history");

    // Like button toggle functionality
    likeButton.addEventListener("click", function() {
        if (likeButton.innerText === "Like") {
            likeButton.innerText = "Liked";
            likeButton.style.backgroundColor = "#4CAF50";  // Green color for liked state
        } else {
            likeButton.innerText = "Like";
            likeButton.style.backgroundColor = "";  // Default button color
        }
    });

    // Show share options when share button is clicked
    shareButton.addEventListener("click", function() {
        shareOptions.style.display = 'block';  // Show share options
    });

    // Hide share options when clicked outside
    document.addEventListener("click", function(event) {
        if (!shareButton.contains(event.target) && !shareOptions.contains(event.target)) {
            shareOptions.style.display = 'none';  // Hide share options if clicked outside
        }
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
            // Create a new comment list item
            let newComment = document.createElement("li");
            newComment.textContent = commentBox.value;
            commentHistory.appendChild(newComment);
            
            // Clear the comment box
            commentBox.value = "";

            // Scroll to the latest comment
            commentHistory.scrollTop = commentHistory.scrollHeight;
        } else {
            alert("Please write a comment before submitting.");
        }
    });
});
