import {Dexie} from "dexie";

const db= new Dexie("song-recommendation");
db.version(1).stores({
    files:"++id,fileName,fileContent",
})

export default db