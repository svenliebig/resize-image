import { resolve } from 'path';
import { resize } from './src/service/resize.mjs';
import { __dirname } from './src/utils/dirname.mjs';

import glob from "glob"

const path = resolve(__dirname, "16-05-2019", "**/*.jpg");
console.log(path)
glob("./17-05-2019/**/*.+(JPG|jpg)", {}, async (err, files) => {
    for (const file of files) {
        await resize(file)
    }
})