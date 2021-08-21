console.log("****** Self *********");

/*
    Self and window are the same object.
    but self is more use for Progresive Web Apps
*/

// window.onload = () => {
//     console.log("window Ready");
// }

self.onload = () => {
    console.log("self Ready");
}