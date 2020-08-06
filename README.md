# README

**Directions:**

1. Run 'npm install'
2. Create a .env file in the root directory to set up a Google Geocoding API key
   - In the .env file, add API_KEY=\<your-api-key\>
3. run 'node ./find_store.js'
4. Follow usage guidelines

**Summary:**

The app is broken into distinct parts, where each part is represented by a function. The general flow of the app is as follows:

1. _processArgs_ - handles command line input and provides usage guidelines
2. _readCSV_ - import the given csv file
3. _geoCodingApi_ - use Google Geocoding API to find the latitutde/longitude of the address/zip provided in the command line arguments
4. _sortByDistanceFromInputLatLog_ - sorts the distance between the store locations in ascending order in the csv file and the address/zip entered in the command line (i.e., the closest location will be in the 0 index)
5. _haversine_ - calculates the distance between the closest store and the address/zip entered in the command line
6. _displayResults_ - diplays the name of the closest store and distance from the address/zip entered in the command line
