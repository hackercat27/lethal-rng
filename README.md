# lethal-rng
JavaScript implementation of Lethal Company (Microsoft DotNet)'s Random class to predict bee values (to use in a spreadsheet).

Based on the implementations in [this repository](https://github.com/dotnet/runtime/).

# Usage
This is set up to be a drop in use with Google Apps Script. If you're not using Google Sheets, you're on your own.  

If you are, then go to Extensions>Apps Script and paste the contents of 
[script.js](https://github.com/hackercat27/lethal-rng/blob/main/script.js). 
This will provide you with the spreadsheet function GETBEEVALUE which takes 2 
parameters, the level seed and the number of hives that spawned that day.
