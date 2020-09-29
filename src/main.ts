import validate from "./schema.validator";
import infoJson from "./assets/info.json";

function main () {
    const result = validate(infoJson);
    console.log(result)
}

main()