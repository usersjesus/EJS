import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

let app = express();
let port = 3000;

app.get("/", (req, res) => {
    const today = new Date("July 27, 1983 01:15:00");
    const day = today.getDay();

    let type = "a weekday";
    let adv = "it's time to work hard";

    if (day === 0 || day === 6) {
        type = "the weekend";
        adv = "it's time to have fun";
    }

    res.render("index.ejs", { 
        dayType: type,
        advice: adv,
    });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}.`);
});