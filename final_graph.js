
const [S, F] = ['S', 'F'];

const graph = [
  [ S, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [ 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [ 0, 1, 1, 0, 0, 0, 1, 1, 0, 0],
  [ 0, 0, 1, 1, 0, 0, 1, 0, 0, 0],
  [ 0, 0, 0, 1, 1, 1, 1, 1, 1, 0],
  [ 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  [ 0, 0, 1, 1, 1, 1, 0, 0, 1, 1],
  [ 1, 1, 1, 0, 0, 1, 0, 0, 0, 1],
  [ 0, 0, 1, 0, 0, 1, 1, 1, 1, 1],
  [ 0, 0, 1, 1, 1, 0, 0 ,0, 0, 0],
  [ 0, 0, 0, 0, 1, 1, 1, 1, 1, F]
];

followTheWay(graph);

function followTheWay(map){
    const path = [];
    const beenThere = {};

    function follow(location){
        if(map[location.row][location.col] === 'F') {
            path.push(location.row, location.col)
        }

        if(map[location.row + 1 && follow )
    }
}