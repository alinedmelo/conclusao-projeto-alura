function createSprite(seletor) {

    var $element = document.querySelector(seletor);

    var frames = ['frame1', 'frame2', 'frame3', 'frame4', 'frame5', 'frame6', 'frame7', 'frame8', 'frame9'];
    
    var current = 0;
    var last = frames.length - 1; 
    
    $element.classList.add(frames[current]);
    
    // change the classes of frames array
    function moveFrame (from, to) {
        $element.classList.remove([from]);
        $element.classList.add([to]);
    }
    
    function nextFrame() {
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

