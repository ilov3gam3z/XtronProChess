game.splash("Chess")
scene.screenWidth()
tiles.setCurrentTilemap(tilemap`Chessboard`)
let camera_x = scene.cameraProperty(CameraProperty.X)
let camera_y = scene.cameraProperty(CameraProperty.Y)
function update_camera() {
    
    if (controller.left.isPressed()) {
        camera_x -= 10
    }
    
    if (controller.right.isPressed()) {
        camera_x += 10
    }
    
    if (controller.up.isPressed()) {
        camera_y -= 10
    }
    
    if (controller.down.isPressed()) {
        camera_y += 10
    }
    
    scene.centerCameraAt(camera_x, camera_y)
}

while (true) {
    update_camera()
    pause(100)
}
