document.addEventListener("DOMContentLoaded", () => {
  const redBox = document.getElementById("redBox");
  const greenBox = document.getElementById("greenBox");

  // Initial positions
  let redBoxPosition = { x: 100, y: 100 };
  let greenBoxPosition = { x: 200, y: 100 };

  // Update the position of the boxes on the screen
  function updateBoxPosition(box, position) {
    box.style.left = position.x + "px";
    box.style.top = position.y + "px";
  }

  // Move the red box with W, A, S, D
  document.addEventListener("keydown", (event) => {
    switch (event.key) {
      case "w":
        redBoxPosition.y -= 10; // move up
        break;
      case "s":
        redBoxPosition.y += 10; // move down
        break;
      case "a":
        redBoxPosition.x -= 10; // move left
        break;
      case "d":
        redBoxPosition.x += 10; // move right
        break;
      case "ArrowUp":
        greenBoxPosition.y -= 10; // move green box up
        break;
      case "ArrowDown":
        greenBoxPosition.y += 10; // move green box down
        break;
      case "ArrowLeft":
        greenBoxPosition.x -= 10; // move green box left
        break;
      case "ArrowRight":
        greenBoxPosition.x += 10; // move green box right
        break;
    }
    updateBoxPosition(redBox, redBoxPosition);
    updateBoxPosition(greenBox, greenBoxPosition);
  });

  // Initial position rendering
  updateBoxPosition(redBox, redBoxPosition);
  updateBoxPosition(greenBox, greenBoxPosition);
});
