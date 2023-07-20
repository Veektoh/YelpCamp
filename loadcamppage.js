// Retrieve the selected campground details from localStorage
const selectedCamp = JSON.parse(localStorage.getItem('selectedCamp'));

if (selectedCamp) {
    // Render the camp details using the selectedCamp object
    const campDetailsWrapper = document.querySelector('#camp-details-wrapper');
    const reviewWrapper = document.querySelector('#reviews-wrapper');
    campDetailsWrapper.innerHTML = `
        <div class="camp-details-card">
            <div class="camp-img-div">
                <img src="${selectedCamp.imgUrl}">
            </div>
            <div class="camp-name-price-div">
                <h2>${selectedCamp.campName}</h2>
                <span>$${selectedCamp.pricePerNight}/night</span>
            </div>
            <div class="camp-description-div">
                <p>${selectedCamp.description}</p>
            </div>
            <div class="camp-author">
                <span><i>Submitted by ${selectedCamp.postedBy}</i></span>
            </div>
        </div>
    `;
   selectedCamp.comments.forEach (eachComment => {
    reviewWrapper.innerHTML += `
        <div class="review-div">
            <div class="author-time-div">
                <h3>${eachComment.commenter}</h3>
                <span>${eachComment.commentTime}</span>
            </div>
            <div class="review-text">
                <span>${eachComment.comment}</span>
                </div>
        </div>
    `
   })
   reviewWrapper.innerHTML += `
        <button id="comment-open-btn" class="primary-btn"><i class="fa-regular fa-comment-dots"></i>Leave a Review</button>
    `;
} else {
    // Handle the case when no campground is selected
    const campDetailsWrapper = document.querySelector('#camp-details-wrapper');
    campDetailsWrapper.innerHTML = '<p>No campground selected.</p>';
}

// toggle comment box
const commentOpenBtn = document.querySelector('#comment-open-btn');
const commentCloseBtn = document.querySelector('#comment-close-btn');
const body = document.querySelector('body');
const commentDiv = document.querySelector('#comment-div');
function openComment (){
    commentDiv.classList.remove('hide');
    body.style.overflow = 'hidden';
}
function closeComment (){
    commentDiv.classList.add('hide');
    body.style.overflow = 'auto';
}
commentOpenBtn.addEventListener('click', openComment);
commentCloseBtn.addEventListener('click', closeComment);
