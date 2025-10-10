// Links to form id 'searchForm' and 'clear', in HTML
const form = document.querySelector("#searchForm");
const imageRemove = document.querySelector("#clear");

// On submit button click, searchs tvmaze API for user's keywords
form.addEventListener("submit", async function (e) {
    e.preventDefault();
    const userSearch = form.elements.query.value;
    const config = { params: { q: userSearch } }
    const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
    // console.log(res.data[0].show.image.medium);      // Outputs to console the link for tv show's image
    displayImages(res.data);
    form.elements.query.value = '';     // Clears search bar after submitting
});

// Displays image of tv show, ignores shows with missing images
const displayImages = (shows) => {
    for (let show of shows) {
        if (show.show.image) {
            const img = document.createElement("IMG");
            img.src = show.show.image.medium;
            document.body.append(img);
        }
    }
};

// Clears screen of all images
imageRemove.addEventListener("click", () => {
    const images = document.getElementsByTagName("IMG");
    while (images.length > 0) {
        images[0].parentNode.removeChild(images[0])
    }
});