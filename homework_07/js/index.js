$( document ).ready(function() {
    const tableGrid = $("<div>").addClass("table-grid"),
        invisibleTable = $("<div>").addClass("invisible-table"),
        matrix = [
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
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        ];
    let whosTurn = 1,
        rowAttr = 0,
        hoverCls,
        winner = 0;

    $("#white-current").css("background-color", "grey");

    for (let i = 0; i < 15; i++) {
        let $row = $("<div>").addClass("row"); 
        for (let j = 0; j < 15; j++) {
            let $div = $("<div>").addClass("grid-cell");

            $row.append($div);
        }
        tableGrid.append($row);
    }

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

    $("#game").append(tableGrid);
    $("#game").append(invisibleTable);

    // const horizontalCheck = (array, index, player) => {
    //     return (array[index] == player) && (array[index+1] == player) &&
    //     (array[index+2] == player) && (array[index+3] == player);
    // }

    // const verticalCheck = (array, index, currentLevel, player) => {
    //     return 
    // }

    // const check = n => {
    //     for (let i = 0; i < matrix.length; i++) {
    //         for (let j = 0; j < matrix[i].length; j++) {

    //         }
    //     }
    // }

    const findLine = (m, c, r, symbol) => {
        let col = c,
            row = r;
        for (let i = 0; i < 3; i++) {
            if (m[row][col] != symbol) {
                return false;
            }
            col += 1;
        }
        return true;
    }

    const checkMatrix = (m, r, c, s) => {
        let col = c,
            row = r,
            sym = s;

        for (let i = 0; i < (row - 3); i++) {
            for (let j = 0; j < (col - 3); j++) {
                if (findLine(m, i, j, sym)) {
                    return true;
                }
                if (findLine(m, j, i, sym)) {
                    return true;
                }
            }
        }
        return false;
    }

    $(".stone-cell").on("click", function() {
        if ($(this).hasClass("white-stone") || $(this).hasClass("black-stone")) return;
        let cellIndex = $(this).attr("data-cell"),
            rowIndex = $(this).parent().attr("data-row"),
            clss = (whosTurn == 1) ? "white-stone" : "black-stone";

        matrix[rowIndex][cellIndex] = whosTurn;
        $(this).removeClass(hoverCls);
        $(this).addClass(clss);
        whosTurn = (whosTurn == 1) ? 2 : 1;
        if (whosTurn == 1) {
            $("#white-current").css("background-color", "grey");
            $("#black-current").css("background-color", "white");
        } else {
            $("#white-current").css("background-color", "white");
            $("#black-current").css("background-color", "grey");
        }      

        if (checkMatrix(matrix, rowIndex, cellIndex, whosTurn)) {
            if (whosTurn == 1) {
                $("#white-current").css("background-color", "yellow");
                $("#black-current").css("background-color", "white");
            } else {
                $("#white-current").css("background-color", "white");
                $("#black-current").css("background-color", "yellow");
            }
        }
    })

    $(".stone-cell").hover(function(){
        hoverCls = (whosTurn == 1) ? "white-hover" : "black-hover";
        if ($(this).hasClass("white-stone") || $(this).hasClass("black-stone")) return;
        $(this).toggleClass(hoverCls);
    })
});