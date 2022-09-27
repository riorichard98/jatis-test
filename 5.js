function boxWithSteps(boxes, steps, direction) {
    for (let i = 0; i < steps.length; i++) {
        for (let j = 0; j < boxes.length - 1; j++) {
            if (direction === 'left') {
                if (boxes[i] === 0) {
                    boxes[boxes.length - 1] = boxes[i]
                }
                boxes[i] = boxes[i + 1]
            } else {

            }
        }
    }
}