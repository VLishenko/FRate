
// Extend the prototype
// (function() {

// var proto = $.circleProgress.defaults,
//     superInitWidget = proto.initWidget,
//     superDrawFrame = proto.drawFrame;

// $.extend(proto, {
//   dotRadius: 10,

//   initWidget: function() {
//     superInitWidget.call(this);
//     this.dotOffset = this.dotRadius - this.getThickness() / 2;
//     this.radius -= this.dotOffset;
//   },

//   drawFrame: function(v) {
//     this.ctx.save();
//     this.ctx.clearRect(0, 0, this.size, this.size);
//     this.ctx.translate(this.dotOffset, this.dotOffset);
//     superDrawFrame.call(this, v);
//     this.drawDot(v);
//     this.ctx.restore();
//   },

//   drawDot: function(v) {
//     var ctx = this.ctx,
//         sa = this.startAngle + 2 * Math.PI * (v || 0),
//         r = this.radius,
//         rd = r - this.getThickness() / 2,
//         x = r + rd * Math.cos(sa),
//         y = r + rd * Math.sin(sa);

//     ctx.save();
//     ctx.fillStyle = this.arcFill;
//     ctx.beginPath();
//     ctx.arc(x, y, this.dotRadius, 0, 2 * Math.PI);
//     ctx.fill();
//     ctx.restore();
//   }
// });
// var circle = $('.circle'),
//     value = circle.children('.value');

// circle.circleProgress().on('circle-animation-progress', function (e, p, v) {
//   value.text((v * 100).toFixed());
// });

// })();

// $('.circle').circleProgress({
//   dotRadius: 8,
//   size: 232,
//   thickness: 1,
//   startAngle: Math.PI / 2,
//   fill: {
//     color: "#303946"
//   }
// });

$(function(){
    $('.truncate').succinct({
        size: 205
    });
});

// CIRCLE BAR ANIMATION
const bar = new ProgressBar({
  percent: 84
});
const bar_second = new ProgressBar({
  percent: 51
});
const bar_thierd = new ProgressBar({
  percent: 75
});
const bar_fourth = new ProgressBar({
  percent: 26
});
const bar_fifth = new ProgressBar({
  percent: 52
});

$("#chart-animation-one").append( bar.makeChart() );
bar.go();

$("#chart-animation-two").append( bar_second.makeChart() );
bar_second.go();

$("#chart-animation-three").append( bar_thierd.makeChart() );
bar_thierd.go();

$("#chart-animation-four").append( bar_fourth.makeChart() );
bar_fourth.go();

$("#chart-animation-five").append(bar_fifth.makeChart() );
bar_fifth.go();

