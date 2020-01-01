/*
DraggableManager - Makes dragging UI elements inside the UILayer possible.
*/

import DraggableManager from './../src/UI/DraggableManager';
import FakeDOMMouseEvent from './fakes/FakeDOMMouseEvent';

const checkSetCurrentTarget = () => {
    const draggableManager = new DraggableManager(),
        fakeDomEvent = new FakeDOMMouseEvent();

    draggableManager._setCurrentTarget(fakeDomEvent);

    expect(draggableManager.currentTarget).toEqual(fakeDomEvent.delegateTarget);
}

const checkSetCurrentCursorPosition = () => {
    const draggableManager = new DraggableManager(),
        fakeDomEvent = new FakeDOMMouseEvent();

    draggableManager._setCurrentCursorPosition(fakeDomEvent);
    
    expect(draggableManager.currentCursorPosition).toEqual({
        x: 724,
        y: 411
    })
}

const checkCalculateDraggableElementPosition = () => {
    const draggableManager = new DraggableManager(),
        fakeDomEvent = new FakeDOMMouseEvent();

    draggableManager._setCurrentTarget(fakeDomEvent);
    draggableManager._setCurrentCursorPosition(fakeDomEvent);
    const position = draggableManager._calculateDraggableElementPosition(fakeDomEvent);

    expect(position).toEqual({
        draggableElementLeftOffset: 627,
        draggableElementTopOffset: 380
    });
}

test('Check if the element that is being dragged is set correctly.', checkSetCurrentTarget);
test('Check current cursor position is set properly.', checkSetCurrentCursorPosition);
test('Check the position values that will be set on the draggable element.', checkCalculateDraggableElementPosition)