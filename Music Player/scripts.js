document.addEventListener("DOMContentLoaded", function() {
    const audioPlayer = document.getElementById("audioPlayer");
    const playlist = document.getElementById("playlist");

    const songs = [
        { name: "Saathiya - Singham", src: "Saathiyaa.mp3" },
        { name: "Aashiqui Aa Gayi - Radhe Shyam", src: "Aashiqui Aa Gayi.mp3" },
        { name: "O Maahi - Dunki", src: "O Mahi.mp3" }
    ];

    // Populate playlist
    songs.forEach((song, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = song.name;
        listItem.addEventListener("click", function() {
            audioPlayer.src = song.src;
            audioPlayer.play();
        });
        playlist.appendChild(listItem);
    });
});
