let createSprite = (seletor) => {

    let $element = document.querySelector(seletor);

    let frames = ['frame1', 'frame2', 'frame3', 'frame4', 'frame5', 'frame6', 'frame7', 'frame8', 'frame9'];
    
    let current = 0;
    let last = frames.length - 1; 
    
    $element.classList.add(frames[current]);
    
    // change the classes of frames array
    let moveFrame = (from, to) => {
        $element.classList.remove([from]);
        $element.classList.add([to]);
    }
    
    let nextFrame = () => {
        if(hasNext()) {
            moveFrame(frames[current], frames[++current]);
            console.log('frame:', current);
        } 
    }

    let hasNext     = () => { return current + 1 <= last; }
    let hasFinished = () => { return current == last; }
    let reset       = () => { moveFrame(frames[current], frames[0]);
                              current = 0; }

    return {
        nextFrame   : nextFrame,
        hasFinished : hasFinished,
        reset       : reset
    };
}

