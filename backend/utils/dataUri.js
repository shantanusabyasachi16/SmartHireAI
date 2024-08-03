import DatauriParser from "DatauriParser"

import path from "path";

const getDataUri = (file) => {  //Takes a file object as input.
    const parser = new DatauriParser (); //create anew instance
    const extName = path.extname(file.originalname).toString();  //Extracts the file extension using 
    return parser.format(extName, file.buffer); //Uses the parser to format the file buffer as a Data URI.
}

export default getDataUri;

{/*multer is used to handle file uploads.
The uploaded file is converted to a Data URI using getDataUri.
The Data URI is sent back to the client as a JSON response.*/}