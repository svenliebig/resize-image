import { readFileSync } from "fs";
import { parse } from "path";
import sharp from "sharp";
import { Size } from "./Size.mjs";

export class InputFile {
    /** @type {Size} */
    #size
    #image
    #name

    /** @type {sharp.Metadata} */
    #metadata

    constructor(path) {
        this.#name = parse(path).base        
        const file = readFileSync(path);
        this.#image = sharp(file);        
    }

    async getSize() {
        if (this.#size) {
            return this.#size.toString()
        }

        this.#size = new Size((await this.getMeta()).size)
        return this.getSize()
    }

    getSharp() {
        return this.#image
    }

    getName() {
        return this.#name
    }

    /**
     * @returns {Promise<sharp.Metadata>}
     */
    async getMeta() {
        if (this.#metadata) {
            return this.#metadata
        } else {
            this.#metadata = await this.#image.metadata()
            return this.getMeta()
        }
    }
}