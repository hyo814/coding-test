var dx = [0, 1, 0, -1];
var dy = [1, 0, -1, 0];
var tmp = [];
var map = [];
var len = 0;

function turnRight(arr) {
    var height = arr.length;
    var width = arr[0].length;
    var tmp_ = [];
    for (var i = 0; i < width; i++) {
        var row = [];
        for (var j = height - 1; j >= 0; j--) {
            row.push(arr[j][i]);
        }
        tmp_.push(row.slice());
    }
    return tmp_.slice();
}

function comparePiece(A, B) {
    if (A.length != B.length || A[0].length != B[0].length) return false;
    var height = A.length;
    var width = A[0].length;
    for (var i = 0; i < height; i++) {
        for (var j = 0; j < width; j++) {
            if (A[i][j] != B[i][j]) return false;
        }
    }
    return true;
}

function compare(A,B) {
    for(var i = 0; i < 4; i++) {
        if(comparePiece(A, B)) return true;
        B = turnRight(B);
    }
    return false;
}

function makePiece(arr) {
    var min_x = arr[0].x;
    var max_x = arr[0].x;
    var min_y = arr[0].y;
    var max_y = arr[0].y;
    for (var i of arr) {
        if (min_x > i.x) min_x = i.x;
        if (max_x < i.x) max_x = i.x;
        if (min_y > i.y) min_y = i.y;
        if (max_y < i.y) max_y = i.y;
    }

    var start = [min_x, min_y];
    var end = [max_x, max_y];
    var width = end[0] - start[0] + 1;
    var height = end[1] - start[1] + 1;
    var piece = Array.from({length:height}, ()=>Array.from({length:width}, () => 0));
    for (var i of arr) {
        piece[i.y - min_y][i.x - min_x] = 1;
    }
    return piece;
}

function addPiece(x, y, std) {
    map[y][x]= std ? 0 : 1;
    tmp.push({x, y});
    var size = 1;
    for (var i = 0; i < 4; i++) {
        if(y+dy[i] < 0 || x+dx[i] < 0 || y+dy[i] >= len || x+dx[i] >= len) continue;
        if(map[y+dy[i]][x+dx[i]] == std) {
            size += addPiece(x+dx[i], y+dy[i], std);
        }
    } 
    return size;
}

function findPieces(map_, std) {
    var pieces = [];
    map = map_.slice();
    for (var i = 0; i < len; i++) {
        for (var j = 0; j < len; j++) {
            if(map[i][j] == std) {
                var size = addPiece(j, i, std);
                var piece = makePiece(tmp.slice());
                tmp = [];
                pieces.push({size, piece});
            }
        }
    }
    return pieces;
}


function solution(game_board, table) {
    var answer = 0;
    len = table.length;
    var board = findPieces(game_board.slice(), 0).sort((a,b) => b.size - a.size);
    var table_ = findPieces(table.slice(), 1).sort((a,b) => b.size - a.size);
    var cnt = 0;
    var used = Array.from({length:table_.length}, () => 0);
    for (var blank of board) {
        for (var i = 0; i < table_.length; i++) {
            if (blank.size > table_[i].size) break;
            if (blank.size == table_[i].size && used[i]==0 && compare(blank.piece, table_[i].piece)) {
                answer += blank.size;
                used[i] = 1;
                break;
            }
        }
    }
    return answer;
}