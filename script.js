AFRAME.registerComponent("move",{
    init:function(){
        let velocity= { x: 0, y:0, z: -0.1};
        let spin = 0;
        let rad = (30 * 3.14/180)
        window.addEventListener("keydown",(e) => {
            if(e.key === "w"){
                this.el.setAttribute("rotation",{
                    y:180
                })
            }
            if(e.key === "a"){
                this.el.setAttribute("rotation",{
                    y:270
                })
            }
            if(e.key === "s"){
                this.el.setAttribute("rotation",{
                    y:0
                })
            }
            if(e.key === "d"){
                this.el.setAttribute("rotation",{
                    y:90
                })
            }
            if(e.key === "e"){
                el = this.el
                pos = el.getAttribute("position")
                 el.setAttribute("animation",{
                property: "position",
                to:`400 ${pos.y} ${pos.z}` , dur: "1000"
                })
                velocity.z = -Math.cos(rad) * 0.5;
                velocity.y = Math.sin(rad) * 0.3;
                spin = 0.01
            }
        })
        this.el.sceneEL.addEventListener("tick",()=>{
            if (Maths.abs(velocity.z)>0.01){
            this.el.object3D.position.y += velocity.y
            this.el.object3D.position.z += velocity.z
            velocity.z*=0.99
            velocity.y += spin
            }
            //spin = 0
            //velocity.z = -0.1
        })
    },
   // tick:function(){
      //  cam = document.getElementById("look")
       // pos = cam.getAttribute("position")
       // this.el.setAttribute("position",{
        //    x: pos.x,
         //   y: pos.y -20, 
         //   z: pos.z -5, 
      //  })
   // }
})
