AFRAME.registerComponent("move",{
    init:function(){
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
            cam = document.getElementById("look")
            pos = cam.getAttribute("position")
            if(e.key === "e"){
                console.log("e")
                this.el.setAttribute("position",{
                   z: pos.z -50,
                })
            }
        })
    },
    tick:function(){
        cam = document.getElementById("look")
        pos = cam.getAttribute("position")
        this.el.setAttribute("position",{
            x: pos.x,
            y: pos.y -20, 
            z: pos.z -5, 
        })
    }
}
)