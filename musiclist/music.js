// Define the Song object
function Song(title, artist, album, genre, year) 
{
  this.title = title;
  this.artist = artist;
  this.album = album;
  this.genre = genre;
  this.year = year;

  // Display method
  this.display = function() 
  {
    return `
      <div class="song-card">
        <h2>${this.title}</h2>
        <p><strong>Artist:</strong> ${this.artist}</p>
        <p><strong>Album:</strong> ${this.album}</p>
        <p><strong>Genre:</strong> ${this.genre}</p>
        <p><strong>Year:</strong> ${this.year}</p>
      </div>
    `;
  };
}

// Create an array of 5 Song objects
const songs = [
  new Song("Blinding Lights", "The Weeknd", "After Hours", "Pop", 2020),
  new Song("Bad Guy", "Billie Eilish", "When We All Fall Asleep, Where Do We Go?", "Alternative", 2019),
  new Song("Uptown Funk", "Mark Ronson ft. Bruno Mars", "Uptown Special", "Funk", 2015),
  new Song("Shape of You", "Ed Sheeran", "Divide", "Pop", 2017),
  new Song("Levitating", "Dua Lipa", "Future Nostalgia", "Disco-Pop", 2021)
];

// Display all songs in the HTML
const musicList = document.getElementById("musicList");
songs.forEach(song => {
  musicList.innerHTML += song.display();
});
