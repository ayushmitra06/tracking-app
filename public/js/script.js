const socket = io();

if (navigator.geolocation) {
    navigator.geolocation.watchPosition((position) => {
        const { latitude, longitude } = position.coords;
        console.log('Sending location:', { latitude, longitude });
        socket.emit("send-location", { latitude, longitude });
    }, (error) => {
        console.log('Geolocation error:', error);
    }, {
        enableHighAccuracy: true,
        maximumAge: 0,
        timeout: 5000,
    });
} else {
    console.log("Geolocation is not supported by this browser.");
}

const map = L.map("map").setView([0, 0], 18);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© Ayush Mitra"
}).addTo(map);

const markers = {};

socket.on("receive-location", (data) => {
    // console.log('Location received:', data);
    const { id, latitude, longitude } = data;
    map.setView([latitude, longitude]);

    if (markers[id]) {
        markers[id].setLatLng([latitude, longitude]);
    } else {
        markers[id] = L.marker([latitude, longitude]).addTo(map);
    }
});

socket.on("user-disconnected", (id) => {
    // console.log('User disconnected:', id);
    if (markers[id]) {
        map.removeLayer(markers[id]);
        delete markers[id];
    }
});
