import { block } from "./defineBlocks"
import { getPlayerPosition } from "./getPlayerPosition"

export const moveUp = (field, setField, handleGoal) => {
    const playerPosition = getPlayerPosition(field)
    if(field[playerPosition.row - 1][playerPosition.col] === block.flag) return handleGoal()
    if (field[playerPosition.row - 1][playerPosition.col] === block.space) {
        setField(prevField => {
            prevField[playerPosition.row - 1][playerPosition.col] = block.player
            prevField[playerPosition.row][playerPosition.col] = block.space
            return [...prevField]
        })
    } else if (
        field[playerPosition.row - 1][playerPosition.col] === block.block &&
        field[playerPosition.row - 2][playerPosition.col] === block.space
    ) {
        setField(prevField => {
            prevField[playerPosition.row - 2][playerPosition.col] = block.block
            prevField[playerPosition.row - 1][playerPosition.col] = block.space
            prevField[playerPosition.row][playerPosition.col] = block.player
            return [...prevField]
        })
    }
}
export const moveDown = (field, setField, handleGoal) => {
    const playerPosition = getPlayerPosition(field)
    if(field[playerPosition.row + 1][playerPosition.col] === block.flag) return handleGoal()
    if (field[playerPosition.row + 1][playerPosition.col] === block.space) {
        setField(prevField => {
            prevField[playerPosition.row + 1][playerPosition.col] = block.player
            prevField[playerPosition.row][playerPosition.col] = block.space
            return [...prevField]
        })
    } else if (
        field[playerPosition.row + 1][playerPosition.col] === block.block &&
        field[playerPosition.row + 2][playerPosition.col] === block.space
    ) {
        setField(prevField => {
            prevField[playerPosition.row + 2][playerPosition.col] = block.block
            prevField[playerPosition.row + 1][playerPosition.col] = block.space
            prevField[playerPosition.row][playerPosition.col] = block.player
            return [...prevField]
        })
    }
}
export const moveLeft = (field, setField, handleGoal) => {
    const playerPosition = getPlayerPosition(field)
    if(field[playerPosition.row][playerPosition.col - 1] === block.flag) return handleGoal()
    if (field[playerPosition.row][playerPosition.col - 1] === block.space) {
        setField(prevField => {
            prevField[playerPosition.row][playerPosition.col - 1] = block.player
            prevField[playerPosition.row][playerPosition.col] = block.space
            return [...prevField]
        })
    } else if (
        field[playerPosition.row][playerPosition.col - 1] === block.block &&
        field[playerPosition.row][playerPosition.col - 2] === block.space
    ) {
        setField(prevField => {
            prevField[playerPosition.row][playerPosition.col - 2] = block.block
            prevField[playerPosition.row][playerPosition.col - 1] = block.space
            prevField[playerPosition.row][playerPosition.col] = block.player
            return [...prevField]
        })
    }
}
export const moveRight = (field, setField, handleGoal) => {
    const playerPosition = getPlayerPosition(field)
    if(field[playerPosition.row][playerPosition.col + 1] === block.flag) return handleGoal()
    if (field[playerPosition.row][playerPosition.col + 1] === block.space) {
        setField(prevField => {
            prevField[playerPosition.row][playerPosition.col + 1] = block.player
            prevField[playerPosition.row][playerPosition.col] = block.space
            return [...prevField]
        })
    } else if (
        field[playerPosition.row][playerPosition.col + 1] === block.block &&
        field[playerPosition.row][playerPosition.col + 2] === block.space
    ) {
        setField(prevField => {
            prevField[playerPosition.row][playerPosition.col + 2] = block.block
            prevField[playerPosition.row][playerPosition.col + 1] = block.space
            prevField[playerPosition.row][playerPosition.col] = block.player
            return [...prevField]
        })
    }
}