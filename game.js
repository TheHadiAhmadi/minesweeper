export function Game (options = {}) {
    const size = options.size ?? 10;
    const mineCount = options.mineCount ?? 10
    const table = initTable()

    function newTile(value) {
        return {
            value,
            revealed: Math.random() > 0.5 ? true :  false
        }
    }

    function initTable() {
        let table = []
        for(let i=0; i< size; i++) {
            table[i] = []
            for(let j=0; j<size; j++) {
                table[i][j] = newTile(0);
            }
        }
            console.log(table)
        return table
    }

    return {
        reset() {
            
        },
        getData() {
            return table
        }
    }

}