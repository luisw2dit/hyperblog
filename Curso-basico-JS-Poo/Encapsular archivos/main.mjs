

function videoPlay (id){
    const urSecreta = https://www.youtube.com/watch?v=w_Ma8oQLmSM +id;
}


function videoStop (id){
    const urSecreta = https://www.youtube.com/watch?v=w_Ma8oQLmSM +id;
}


export class PlatziClass {
    constructor({
        name,
        videoID,
    }) {
        this.name = name;
        this.videoID = videoID;
    }
    
reproducir (){
    videoPlay(this.videoID);

}

pausar (){
    videoStop(this.videoID);

}


    
}