enum Direction
{
    Left,
    Up,
    Right,
    Down
}

function move(direction: Direction) {
    console.log("Moving -> " + direction.toString());
}

move(Direction.Down);