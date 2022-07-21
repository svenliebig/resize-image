import { resolve } from "path";
import { InputFile } from "../models/InputFile.mjs";
import { Size } from "../models/Size.mjs";
import { __dirname } from "../utils/dirname.mjs";

const outputDir = "output";

export async function resize(path) {
    const inputFile = new InputFile(path) 
    
    try {
        console.log(`\nResizing: ${inputFile.getName()}`)
        const outputSharp = await inputFile.getSharp().resize({ width: 1000 }).toFile(resolve(__dirname, outputDir, inputFile.getName()))
        console.log(`Size changed from: ${await inputFile.getSize()} to ${new Size(outputSharp.size).toString()}`)
        const inputMeta = await inputFile.getMeta();
        console.log(`Resolution changed from: ${inputMeta.width}x${inputMeta.height} to ${outputSharp.width}x${outputSharp.height}`)
        
        // newFileInfo holds the output file properties
        console.log("Success\n")
    } catch(err)  {
        console.log("Error occured", err);
    }
};