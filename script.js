    const imageContainer = document.getElementById('image-container');
    const loader = document.getElementById('loader');

    let photosArray = [];

    // Unsplash API
    const count = 10;
    const apiKey = 'Nahg-A0ufXY5pGYABXCPZ8eZIdvkMSBqCSor0VYoNuA';
    const apiUrl  = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&
    count=${count}`;
        // Create Elements for links & photos , add to DOM
        function displayPhotos()  {
            // Run function for each object in photosArray
            photosArray.forEach((photo) =>{

            });
        }



    // Get photos from Unspash API
    async function getPhotos() {
        try {
            const response = await fetch(apiUrl);
            photosArray = await response.json();
            displayPhotos();
        } catch (error) {
            // catch Error here
        }
    }

    //On load
    getPhotos()