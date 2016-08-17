
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
"use strict";

const settings = {
    percent: 78
  , duration: 700
  , angle: 0
};


// From here: https://gist.github.com/gre/1650294
const easing = {
  easeInOutQuad: t => t < .5 ? 2 * t * t : -1 + (4 - 2 * t) * t,
  easeInOutCubic: t => t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
};


const svg = document.querySelector(".stat")
  , path = svg.querySelector(".stat__path_back")
  , bar = svg.querySelector(".stat__path_bar")
  , dot = svg.querySelector(".stat__dot")
  , text = svg.querySelector(".stat__text")
  , circleLength = 2 * Math.PI * path.getAttribute("r")
  , factor = (360 - settings.angle * 2) / 360
  , getPercentLength = (len, percent, factor = 1) => len / 100 * percent * factor
;

let animationProgress
  , animationStart
;


// Set an initial circles settings
path.style.strokeDasharray = bar.style.strokeDasharray = circleLength;
path.style.strokeDashoffset = bar.style.strokeDashoffset = circleLength;


/**
 * Animation callback function for drawing a circle path
 *
 * @param {Element}   SVG circle element
 * @param {Number}    Completion rate [0..1]
 * @param {Number}    Filling percentage
 * @param {Function}  Easing function
 */
const draw = (e, t, p, fn) => e.style.strokeDashoffset = circleLength - getPercentLength(circleLength, p * fn(t), factor);

/**
 * Animation callback function for rotating a circle path
 *
 * @param {Element}   SVG circle element
 * @param {Number}    Completion rate [0..1]
 * @param {Number}    Angle of the rotation
 * @param {Number}    x-position of the center of rotation
 * @param {Number}    y-position of the center of rotation
 * @param {Function}  Easing function
 */
const rotate = (e, t, a, x, y, fn) => e.setAttribute("transform", `rotate(${fn(t) * a} ${x} ${y})`);


const go = () => {

  // Oops! CSS transforms on SVG elements doesn't works in IE
  /*
    path.style.transitionDuration = bar.style.transitionDuration = `${settings.duration}ms`;
    requestAnimationFrame(() => path.style.transform = bar.style.transform = `rotate(${settings.angle}deg)`);
  */

  const animate = () => {
    animationProgress = (Date.now() - animationStart) / settings.duration;

    if (animationProgress >= 1) {
      animationProgress = 1;
    }

    // dot's rotation is here
    const dotRotateAngle = 360 * easing.easeInOutCubic(animationProgress) * settings.percent / 100;
    dot.setAttribute("transform", `rotate(${dotRotateAngle} 100 100)`);

    // ok, let's draw
    draw(path, animationProgress, 100, easing.easeInOutQuad);
    draw(bar, animationProgress, settings.percent, easing.easeInOutCubic);

    if (settings.angle) {
      rotate(path, animationProgress, settings.angle, 100, 100, easing.easeInOutQuad);
      rotate(bar, animationProgress, settings.angle, 100, 100, easing.easeInOutQuad);
    }

    text.textContent = Math.floor(settings.percent * easing.easeInOutQuad(animationProgress)) + '%';


    if (animationProgress !== 1) {
      requestAnimationFrame(animate);
    }
  };

  animationStart = Date.now();
  animate();
};

go();