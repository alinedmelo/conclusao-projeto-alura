function createSprite(seletor) {

    var $element = document.querySelector(seletor);

    var frames = ['frame1', 'frame2', 'frame3', 'frame4', 'frame5', 'frame6', 'frame7', 'frame8', 'frame9'];
    
    var current = 0;
    var last = frames.length - 1; 
    
    $element.classList.add(frames[current]);
    
    function moveFrame (from, to) {
        $element.classList.remove([from]);
        $element.classList.add([to]);
    }
    function hasNext() {
        return current + 1 <= last;
    }

    console.log('start frame:', current)

    function nextFrame() {
        if(hasNext() == true) {
            moveFrame(frames[current], frames[++current]);
            console.log('frame:', current);
        }
    }
    return {
        nextFrame: nextFrame
    };
}

