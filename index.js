const express = require('express');

const app = express();

var date = new Date();

const day = date.getDay();
const hours = date.getHours();

if(day < 6 && day > 0 && hours > 9 && hours < 17){
app.use(express.static("Public"))
} else {
    app.use(express.static("Notwork"))
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server is runnig on ${PORT}`));