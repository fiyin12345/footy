AFRAME.registerComponent("move", {
  init: function () {
    let velocity = { x: 0, y: 0, z: -0.1 };
    let spin = 0;
    let rad = 30 * Math.PI / 180;
    let curlFactor = 0; // Curl strength

    window.addEventListener("keydown", (e) => {
      const el = this.el;

      switch (e.key) {
        case "w":
          el.setAttribute("rotation", { y: 180 });
          break;
        case "a":
          el.setAttribute("rotation", { y: 270 });
          break;
        case "s":
          el.setAttribute("rotation", { y: 0 });
          break;
        case "d":
          el.setAttribute("rotation", { y: 90 });
          break;
        case "e":
          let pos = el.getAttribute("position");

          // Apply forward movement
          el.setAttribute("animation", {
            property: "position",
            to: `400 ${pos.y} ${pos.z}`,
            dur: 1000
          });

          // Calculate initial velocity
          velocity.z = -Math.cos(rad) * 0.5;
          velocity.y = Math.sin(rad) * 0.3;

          // Apply a slight side spin for curl
          curlFactor = Math.random() > 0.5 ? 0.02 : -0.02; // Random left or right curl
          spin = 0.01;
          break;
      }
    });

    this.el.sceneEl.addEventListener("tick", () => {
      if (Math.abs(velocity.z) > 0.01) {
        // Apply movement
        this.el.object3D.position.y += velocity.y;
        this.el.object3D.position.z += velocity.z;
        this.el.object3D.position.x += curlFactor;

        // Apply damping for a natural slowdown
        velocity.z *= 0.99;
        velocity.y += spin;
        curlFactor *= 0.98; // Reduce curl over time

        // Stop spin after a while
        if (Math.abs(curlFactor) < 0.001) {
          curlFactor = 0;
        }
      }
    });
  }
});
