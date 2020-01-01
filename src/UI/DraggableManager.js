import delegate from 'delegate';

class DraggableManager {

    constructor() {
        this.currentCursorPosition = {
          x: 0,
          y: 0
        }

        this.currentTarget = null;
    }

    _setCurrentCursorPosition(ev) {
      this.currentCursorPosition.x = ev.clientX;
      this.currentCursorPosition.y = ev.clientY;
    }

    _unsetDraggingEvents() {
      document.onmousemove = null;
      document.onmouseup = null;
    }

    _setDraggingEvents() {
      document.onmousemove = ev => this._dragElement(ev);
      document.onmouseup = () => this._unsetDraggingEvents();
    }

    _setCurrentTarget(ev) {
      this.currentTarget = ev.delegateTarget;
    }

    _startDragging(ev) {
      this._setCurrentTarget(ev);
      this._setCurrentCursorPosition(ev);
      this._setDraggingEvents();
    }

    _calculateDraggableElementPosition(ev) {
      const cursorDifferenceX = this.currentCursorPosition.x - ev.clientX,
        cursorDifferenceY = this.currentCursorPosition.y - ev.clientY,
        position = {
          draggableElementLeftOffset: this.currentTarget.offsetLeft - cursorDifferenceX,
          draggableElementTopOffset: this.currentTarget.offsetTop - cursorDifferenceY
        }

      return position;
    }

    _setDraggableElementPosition(position) {
      const draggableElementTopOffsetPx = `${position.draggableElementTopOffset}px`,
        draggableElementLeftOffsetPx = `${position.draggableElementLeftOffset}px`;

      this.currentTarget.style.setProperty('--draggable-element-top-px', draggableElementTopOffsetPx);
      this.currentTarget.style.setProperty('--draggable-element-left-px', draggableElementLeftOffsetPx);
    }

    _dragElement(ev) {
      const position = this._calculateDraggableElementPosition(ev);
      this._setDraggableElementPosition(position);
      this._setCurrentCursorPosition(ev);
    }

    _setEvents() {
        delegate(
          '.draggable', 'mousedown', ev => this._startDragging(ev)
        );
    }

    create() {
      this._setEvents();
    }

}

export default DraggableManager;