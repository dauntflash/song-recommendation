# Recommendation App

## Description

The **Song recommendation App** is a web-based platform that allows users to upload JSON playlists and get similar songs recommendations about their music collection.&#x20;

## Features

1. **File Upload**: Users can upload JSON files containing their music playlists.
2. **Playlist Analysis**:
   - Visualize the number of songs in each playlist using a pie chart.
   - Count the frequency of each artist in the playlists.
3. **Top Artists List**: Displays a table of the top 10 artists and the number of songs attributed to them.

## Technologies Used

- **React**: Frontend framework for building the user interface.
- **Chart.js**: Library for rendering the pie chart.
- **Dexie.js**: Lightweight wrapper for IndexedDB, used for storing and managing uploaded files.
- **CSS**: Styling the application.

## Installation

Follow these steps to set up and run the Recommendation App locally:

### Prerequisites

Make sure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (version 16 or later)
- npm or yarn (comes with Node.js)
- Git (optional, for cloning the repository)

### Steps

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/your-username/recommendation-app.git
   cd recommendation-app
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the Development Server**:

   ```bash
   npm start
   # or
   yarn start
   ```

4. Open your browser and navigate to `http://localhost:3000`.

## Usage

1. **Upload JSON Playlists**:

   - Click the "Upload File" button to select a `.json` file.
   - Ensure the JSON file is formatted as an array of objects, with each object containing the following fields:
     ```json
     [
       {
         "song": "Song Title",
         "artist": "Artist Name",
         "album_cover": "URL to Album Cover"
       }
     ]
     ```

2. **View Insights**:

   - After uploading, the app will display a pie chart showing the number of songs in each playlist.
   - Below the chart, the top 10 most frequently occurring artists will be displayed in a table.

3. **Manage Files**:

   - Uploaded files are listed under "My Database."
   - You can delete files by clicking the trash icon next to the file name.

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
