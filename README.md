## 📍 Real-Time Location Tracking App

A real-time location tracking application built using Node.js, Express, Socket.io, and Leaflet.js. 
This app tracks and displays the location of connected users on a map, making it ideal for use cases such as asset tracking, fleet management, or social location sharing.

![map](https://github.com/ayushmitra06/tracking-app/assets/89930295/9f15ba5a-a55d-4eb5-b3f5-776b5524610a)

## Features

- **Real-Time Tracking:** Broadcast and display users' locations on a map in real-time.
- **Geolocation API:** Uses the browser’s Geolocation API to get precise location data.
- **Interactive Map:** Leverages Leaflet.js for an interactive and user-friendly map interface.
- **WebSockets:** Utilizes Socket.io for efficient real-time communication between the server and clients.
- **Responsive Design:** Works on both desktop and mobile devices.


## Getting Started

### Prerequisites

- **Node.js** (v14 or higher)
- **npm** (v6 or higher)

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/real-time-tracking-app.git
    cd real-time-tracking-app
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Run the application locally:**

    ```bash
    npm start
    ```

4. **Access the application:**

    Open your browser and navigate to `http://localhost:3000`.

## Project Structure

- **`public/`**: Static assets (CSS, JS, etc.)
- **`views/`**: EJS templates for rendering HTML.
- **`server.js`**: Main server file.
- **`.gitignore`**: Lists files and directories to ignore in the repository.

## Contributing

Contributions are welcome! Please fork the repository, create a new branch, and submit a pull request.


## Acknowledgments

- **Leaflet.js** for the interactive map.
- **Socket.io** for real-time communication.
- **OpenStreetMap** for map data.
