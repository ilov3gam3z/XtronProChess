@namespace
class SpriteKind:
    BlackPiece = SpriteKind.create()
    WhitePiece = SpriteKind.create()
def update_camera():
    global camera_x, camera_y
    if controller.left.is_pressed():
        camera_x += 0 - 10
    if controller.right.is_pressed():
        camera_x += 10
    if controller.up.is_pressed():
        camera_y += 0 - 10
    if controller.down.is_pressed():
        camera_y += 10
    scene.center_camera_at(camera_x, camera_y)
def AskColor():
    global wb
    if game.ask("White = Y Black = N") == True:
        wb = "W"
        return wb
    else:
        wb = "B"
        return wb
camera_y = 0
camera_x = 0
wb = ""
game.splash("Chess")
scene.screen_width()
tiles.set_current_tilemap(tilemap("""
    Chessboard
"""))
tiles.set_wall_at(tiles.get_tile_location(8, 0), True)
tiles.set_wall_at(tiles.get_tile_location(8, 1), True)
tiles.set_wall_at(tiles.get_tile_location(8, 2), True)
tiles.set_wall_at(tiles.get_tile_location(8, 3), True)
tiles.set_wall_at(tiles.get_tile_location(8, 4), True)
tiles.set_wall_at(tiles.get_tile_location(8, 5), True)
tiles.set_wall_at(tiles.get_tile_location(8, 6), True)
tiles.set_wall_at(tiles.get_tile_location(8, 7), True)
wb = "N"
AskColor()
camera_x = scene.camera_property(CameraProperty.X)
camera_y = scene.camera_property(CameraProperty.Y)
BlackRook1 = sprites.create(assets.image("""
    Black Rook
"""), SpriteKind.BlackPiece)
tiles.place_on_tile(BlackRook1, tiles.get_tile_location(0, 0))
BlackBishop1 = sprites.create(assets.image("""
        Black Bishop
    """),
    SpriteKind.BlackPiece)
tiles.place_on_tile(BlackBishop1, tiles.get_tile_location(1, 0))
BlackKnight1 = sprites.create(assets.image("""
        Black Knight
    """),
    SpriteKind.BlackPiece)
tiles.place_on_tile(BlackKnight1, tiles.get_tile_location(2, 0))
BlackQueen1 = sprites.create(assets.image("""
        Black Queen
    """),
    SpriteKind.BlackPiece)
tiles.place_on_tile(BlackQueen1, tiles.get_tile_location(3, 0))
BlackKing1 = sprites.create(assets.image("""
        Black King
    """),
    SpriteKind.BlackPiece)
tiles.place_on_tile(BlackKing1, tiles.get_tile_location(4, 0))
BlackKnight2 = sprites.create(assets.image("""
        Black Knight
    """),
    SpriteKind.BlackPiece)
tiles.place_on_tile(BlackKnight2, tiles.get_tile_location(5, 0))
BlackBishop2 = sprites.create(assets.image("""
        Black Bishop
    """),
    SpriteKind.BlackPiece)
tiles.place_on_tile(BlackBishop2, tiles.get_tile_location(6, 0))
BlackRook2 = sprites.create(assets.image("""
        Black Rook
    """),
    SpriteKind.BlackPiece)
tiles.place_on_tile(BlackRook2, tiles.get_tile_location(7, 0))
while True:
    update_camera()
    pause(50)