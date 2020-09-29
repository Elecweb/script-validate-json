import validate from "./schema.validator";
import infoJson from "./assets/info.json";

const result = validate(infoJson)

if (result) {
    console.log("success")
}