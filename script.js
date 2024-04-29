// JavaScript for interactive map
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the map
    const map = L.map('map-container').setView([51.505, -0.09], 13);

    // Add a tile layer (e.g., OpenStreetMap)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Add markers for different travel destinations
    const destinations = [
        { name: 'Destination 1', latlng: [51.5, -0.1] },
        { name: 'Destination 2', latlng: [51.51, -0.11] },
        // Add more destinations as needed
    ];

    destinations.forEach(destination => {
        const marker = L.marker(destination.latlng).addTo(map);
        marker.bindPopup(`<b>${destination.name}</b>`).openPopup();
    });
});
