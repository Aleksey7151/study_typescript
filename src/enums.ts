enum Direction
{
    Left = 'Left',
    Up = 'Up',
    Right = 'Right',
    Down = 'Down'
}

function move(direction: Direction) {
    switch (direction)
    {
        case Direction.Down:
            console.log("moving down");
            break;
        case Direction.Left:
            console.log("moving left");
            break;
        case Direction.Up:
            console.log("moving up");
            break;
        case Direction.Right:
            console.log("moving right");
            break;
    }
    console.log("Moving -> " + direction.toString());
}

move(Direction.Down);