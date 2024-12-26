namespace SpriteKind {
    export const BlackPiece = SpriteKind.create()
    export const WhitePiece = SpriteKind.create()
}

function update_camera() {
    
    if (controller.left.isPressed()) {
        camera_x += 0 - 10
    }
    
    if (controller.right.isPressed()) {
        camera_x += 10
    }
    
    if (controller.up.isPressed()) {
        camera_y += 0 - 10
    }
    
    if (controller.down.isPressed()) {
        camera_y += 10
    }
    
    scene.centerCameraAt(camera_x, camera_y)
}

function AskColor(): string {
    
    if (game.ask("White = Y Black = N") == true) {
        wb = "W"
        return wb
    } else {
        wb = "B"
        return wb
    }
    
}

let camera_y = 0
let camera_x = 0
let wb = ""
game.splash("Chess")
scene.screenWidth()
tiles.setCurrentTilemap(tilemap`
    Chessboard
`)
tiles.setWallAt(tiles.getTileLocation(8, 0), true)
tiles.setWallAt(tiles.getTileLocation(8, 1), true)
tiles.setWallAt(tiles.getTileLocation(8, 2), true)
tiles.setWallAt(tiles.getTileLocation(8, 3), true)
tiles.setWallAt(tiles.getTileLocation(8, 4), true)
tiles.setWallAt(tiles.getTileLocation(8, 5), true)
tiles.setWallAt(tiles.getTileLocation(8, 6), true)
tiles.setWallAt(tiles.getTileLocation(8, 7), true)
wb = "N"
AskColor()
camera_x = scene.cameraProperty(CameraProperty.X)
camera_y = scene.cameraProperty(CameraProperty.Y)
let BlackRook1 = sprites.create(assets.image`
    Black Rook
`, SpriteKind.BlackPiece)
tiles.placeOnTile(BlackRook1, tiles.getTileLocation(0, 0))
let BlackBishop1 = sprites.create(assets.image`
        Black Bishop
    `, SpriteKind.BlackPiece)
tiles.placeOnTile(BlackBishop1, tiles.getTileLocation(1, 0))
let BlackKnight1 = sprites.create(assets.image`
        Black Knight
    `, SpriteKind.BlackPiece)
tiles.placeOnTile(BlackKnight1, tiles.getTileLocation(2, 0))
let BlackQueen1 = sprites.create(assets.image`
        Black Queen
    `, SpriteKind.BlackPiece)
tiles.placeOnTile(BlackQueen1, tiles.getTileLocation(3, 0))
let BlackKing1 = sprites.create(assets.image`
        Black King
    `, SpriteKind.BlackPiece)
tiles.placeOnTile(BlackKing1, tiles.getTileLocation(4, 0))
let BlackKnight2 = sprites.create(assets.image`
        Black Knight
    `, SpriteKind.BlackPiece)
tiles.placeOnTile(BlackKnight2, tiles.getTileLocation(5, 0))
let BlackBishop2 = sprites.create(assets.image`
        Black Bishop
    `, SpriteKind.BlackPiece)
tiles.placeOnTile(BlackBishop2, tiles.getTileLocation(6, 0))
let BlackRook2 = sprites.create(assets.image`
        Black Rook
    `, SpriteKind.BlackPiece)
tiles.placeOnTile(BlackRook2, tiles.getTileLocation(7, 0))
while (true) {
    update_camera()
    pause(50)
}
