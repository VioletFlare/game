const COLOR_LIGHT = 0x7b5e57;
const COLOR_DARK = 0x260e04;

const Random = Phaser.Math.Between;

class HotkeyBar {

    _getLabelConfig(cell) {
        const background = cell.scene.rexUI.add.roundRectangle(0, 0, 20, 20, 0).setStrokeStyle(2, COLOR_DARK),
            icon = cell.scene.rexUI.add.roundRectangle(0, 0, 20, 20, 10, 0x0),
            text = cell.scene.add.text(0, 0, '');

        return {
            width: cell.width,
            height: cell.height,
            background: background,
            icon: icon,
            text: text,
            space: {
                icon: 10,
                left: 10
            }
        }
    }

    _initCellContainer(cell, cellContainer) {
        const labelConfig = this._getLabelConfig(cell);

        cellContainer = cell.scene.rexUI.add.label(labelConfig);

        return cellContainer;
    }

    _setupCellContainer(cell, cellContainer) {
        cellContainer.getElement('text').setText(cell.item.id); // Set text of text object
        cellContainer.getElement('icon').setFillStyle(cell.item.color); // Set fill color of round rectangle object
    }

    _createCellContainerCallback(cell, cellContainer) {
        const isCellContainerNull = cellContainer == null;

        if (isCellContainerNull) cellContainer = this._initCellContainer(cell, cellContainer);

        this._setupCellContainer(cell, cellContainer);

        return cellContainer;
    }

    _getItems(count) {
        const data = [];

        for (let i = 0; i < count; i++) {
            data.push({
                id: i,
                color: Random(0, 0xffffff)
            });
        }

        return data;
    }

    _getGridTableConfig() {
        const cellContainerCallback = (cell, cellContainer) => this._createCellContainerCallback(cell, cellContainer),
            items = this._getItems(10);

        return {
            x: this.clientWidthCenter,
            y: this.clientHeightBottom,
            width: this.tableWidth,
            height: this.tableHeight,
            table: {
                columns: 10,
                reuseCellContainer: true,
            },
            slider: false,
            createCellContainerCallback: cellContainerCallback,
            items: items
        }
    }

    _setEvents() {
        this.gridTable
            .on(
                'cell.over', 
                (cellContainer, cellIndex) => this._handleCellOver(cellContainer, cellIndex) 
            )
            .on(
                'cell.out', 
                (cellContainer, cellIndex) => this._handleCellOut(cellContainer, cellIndex) 
            )
            .on(
                'cell.click', 
                (cellContainer, cellIndex) => this._handleCellClick(cellContainer, cellIndex) 
            )

        this.scene.scale.on(
            'resize', 
            () => this._updateGridTablePosition()
        )
    }

    _handleCellOver(cellContainer, cellIndex) {
        cellContainer
        .getElement('background')
        .setStrokeStyle(2, COLOR_LIGHT)
        .setDepth(1);
    }

    _handleCellOut(cellContainer, cellIndex) {
        cellContainer
        .getElement('background')
        .setStrokeStyle(2, COLOR_DARK)
        .setDepth(0);
    }

    _handleCellClick(cellContainer, cellIndex) {
        this.print.text += 'click ' + cellIndex + ': ' + cellContainer.text + '\n';
    }

    _updateGridTablePosition() {
        this._calculateClientDimensions();

        this.gridTable.x = this.clientWidthCenter; 
        this.gridTable.y = this.clientHeightBottom;
    }

    _calculateClientDimensions() {
        this.clientWidth = this.scene.sys.game.canvas.clientWidth;
        this.clientHeight = this.scene.sys.game.canvas.clientHeight;
        this.clientWidthCenter = this.clientWidth / 2;
        this.clientHeightBottom = this.clientHeight - this.tableHeight;
    }

    _setGirdTableDimensions() {
        this.tableWidth = 600;
        this.tableHeight = 32;
    }

    _createGirdTable() {
        const gridTableConfig = this._getGridTableConfig();
        this.gridTable = this.scene.rexUI.add.gridTable(gridTableConfig).layout()
    }

    _createPrint() {
        this.print = this.scene.add.text(0, 0, '');
    }

    create(scene) {
        this.scene = scene;
        this._setGirdTableDimensions();
        this._calculateClientDimensions();
        this._createGirdTable();
        this._createPrint();
        this._setEvents();
    }

}

export default new HotkeyBar();