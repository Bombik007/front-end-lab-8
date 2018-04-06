$( document ).ready(function() {
    let $tableGrid = $("<div>").addClass("table-grid");
    let whosTurn = 1;

    for (let i = 0; i < 15; i++) {
        let $row = $("<div>").addClass("row");
        for (let j = 0; j < 15; j++) {
            let $div = $("<div>").addClass("grid-cell");

            $row.append($div);
        }
        $tableGrid.append($row);
    }

    $("#game").append($tableGrid);

    let invisibleTable = $("<div>").addClass("invisible-table");

    let rowAttr = 0;
    for (let i = 0; i < 16; i++) {
        let cellAttr = 0;
        let $row = $("<div>").addClass("row")
                                .attr("data-row", String(rowAttr));

        for (let j = 0; j < 16; j++) {
            let $cell = $("<div>").addClass("stone-cell")
                                    .attr("data-cell", String(cellAttr));

            cellAttr++;
            $row.append($cell);

        }
        rowAttr++;

        if (rowAttr >= 15) {
            rowAttr = 0;
        }

        invisibleTable.append($row);
    }

    $("#game").append(invisibleTable);

    let matrix = [
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    ];

    $(".stone-cell").array.forEach(element => {
        element.on("click", () => {
            let cellIndex = element.attr("data-cell"),
                rowIndex = element.parent().attr("data-row"),
                clss = (whosTurn == 1) ? "white-stone" : "black-stone";

            matrix[rowIndex][cellIndex] = whosTurn;
            element.addClass(clss);
            whosTurn = (whosTurn == 1) ? 2 : 1;
        })
    });
});