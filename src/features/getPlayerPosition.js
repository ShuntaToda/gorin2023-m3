import { block } from "./defineBlocks";

export const getPlayerPosition = (field) => {
    let col;
    const row = field.findIndex(row => {
        col = row.findIndex(item => item === block.player)
        if(col >= 1 )return true
        return false
    })

    return {row: row, col: col}
}