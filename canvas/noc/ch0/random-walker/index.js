var canvas = document.getElementById('canvas')
var width = canvas.width
var height = canvas.height
var ctx = canvas.getContext('2d')

var Walker = function () {
  this.x = width / 2
  this.y = height / 2
}

Walker.prototype.init = function () {
  ctx.strokeStyle = 'rgba(0,0,0,0.05)'
  ctx.lineWidth = 20
}

Walker.prototype.step = function () {
  var nx = this.x + Math.random() * 10 - 5,
      ny = this.y + Math.random() * 10 - 5
  ctx.strokeStyle = 'rgba(0,0,0,0.05)'
  ctx.beginPath()
  ctx.translate(0.5,0.5);
  ctx.moveTo(this.x, this.y)
  this.x = nx
  this.y = ny
  ctx.lineTo(this.x, this.y)
  ctx.closePath()
  ctx.stroke()
}

Walker.prototype.display = function() {
  this.step()
  setTimeout(function() {
    requestAnimationFrame(this.display.bind(this))
  }.bind(this), 40)
}

var w = new Walker()
w.init()
w.display()
