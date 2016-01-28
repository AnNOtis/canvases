var scenes = {
  rect: function rect() {
    this.fillStyle = "rgba(99, 153, 209, 0.6)"
    this.fillRect(10, 10, 100, 100)

    this.strokeStyle = "rgba(211, 105, 76, 0.6)"
    this.lineWidth = 20
    this.strokeRect(50, 50, 100, 100)

    this.clearRect(30, 30, 60, 60)
  },
}

Object.keys(scenes).forEach(function(scene) {
  var canvas = document.getElementById(scene)
  var ctx = canvas.getContext("2d")

  scenes[scene].apply(ctx)
})
