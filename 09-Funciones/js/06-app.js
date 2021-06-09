console.log("*************How to add Functions in objects****************");

const player = {
    play: name =>  console.log(`Playing ${name}`), // <- property methods
    pause: name => console.log(`Stopping ${name}`),
}

const songs = {
    song1: "Take Me Out",
    song2: "Snow",
    song3: "Me and the moon"
}

player.play(songs.song1);
player.play(songs.song2);

player.pause(songs.song1);

player.delete = name => console.log(`Deleting ${name}`)

player.delete(songs.song1)