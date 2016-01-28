var scenes = {
  rect: function rect() {
    this.fillStyle = "rgba(99, 153, 209, 0.6)"
    this.fillRect(10, 10, 100, 100)

    this.strokeStyle = "rgba(211, 105, 76, 0.6)"
    this.lineWidth = 20
    this.strokeRect(50, 50, 100, 100)

    this.clearRect(30, 30, 60, 60)
  },
  path: function path() {
    this.lineWidth = 3

    this.beginPath() // 開始 Path 模式
    this.strokeStyle = 'rgba(174, 191, 52, 1)'
    this.moveTo(10, 10) // 移動畫筆
    this.lineTo(90, 10) // 畫線
    this.lineTo(90, 180)
    this.lineTo(180, 90)
    this.closePath() // 從起點到終點連一條線
    this.stroke() // 將路徑繪製出來
  },
  triangle: function triangle() {
    this.strokeStyle = 'rgba(231, 112, 215, 1)'
    this.fillStyle = 'rgba(245, 168, 49, 1)'
    this.beginPath() // 重新開始新的路徑
    this.moveTo(100, 20)
    this.lineTo(180, 180)
    this.lineTo(20, 180)
    this.closePath()
    this.fill() // 填滿路徑圈選範圍內
  }
}

Object.keys(scenes).forEach(function(scene) {
  var canvas = document.getElementById(scene)
  var ctx = canvas.getContext("2d")

  scenes[scene].apply(ctx)
})
