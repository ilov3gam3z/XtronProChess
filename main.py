game.splash("Chess")
scene.screen_width()
tiles.set_current_tilemap(tilemap("""Chessboard"""))

camera_x = scene.camera_property(CameraProperty.X)
camera_y = scene.camera_property(CameraProperty.Y)

def update_camera():
    global camera_x, camera_y
    if controller.left.is_pressed():
        camera_x -= 10
    if controller.right.is_pressed():
        camera_x += 10
    if controller.up.is_pressed():
        camera_y -= 10
    if controller.down.is_pressed():
        camera_y += 10
    scene.center_camera_at(camera_x, camera_y)

while True:
    update_camera()
    pause(100)