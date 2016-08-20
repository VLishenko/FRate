

// $(function(){
//     $('.truncate').succinct({
//         size: 205
//     });
// });


// CIRCLE BAR ANIMATION user_profile
const bar = new ProgressBar({
  percent: 85
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
bar.type  = "text/javascript";
bar.go();

$("#chart-animation-two").append( bar_second.makeChart() );
bar_second.go();

$("#chart-animation-three").append( bar_thierd.makeChart() );
bar_thierd.go();

$("#chart-animation-four").append( bar_fourth.makeChart() );
bar_fourth.go();

$("#chart-animation-five").append(bar_fifth.makeChart() );
bar_fifth.go();

// CIRCLE BAR ANIMATION user_profile_sex
const bar_sex_first = new ProgressBar({
  percent: 84
});

const bar_sex_second = new ProgressBar({
  percent: 52
});

const bar_sex_thierd = new ProgressBar({
  percent: 50
});

const bar_sex_fourth = new ProgressBar({
  percent: 26
});

const bar_sex_fifth= new ProgressBar({
  percent: 75
});

$("#chart-animation-sex-one").append(bar_sex_first.makeChart() );
bar_sex_first.go();

$("#chart-animation-sex-two").append(bar_sex_second.makeChart() );
bar_sex_second.go();

$("#chart-animation-sex-three").append(bar_sex_thierd.makeChart() );
bar_sex_thierd.go();

$("#chart-animation-sex-four").append(bar_sex_fourth.makeChart() );
bar_sex_fourth.go();

$("#chart-animation-sex-five").append(bar_sex_fifth.makeChart() );
bar_sex_fifth.go();

// CIRCLE BAR ANIMATION faq
const bar_faq_first = new ProgressBar({
  percent: 52
});

const bar_faq_second = new ProgressBar({
  percent: 86
});

$("#chart-animation-faq-one").append(bar_faq_first.makeChart() );
bar_faq_first.go();

$("#chart-animation-faq-two").append(bar_faq_second.makeChart() );
bar_faq_second.go();

// CIRCLE BAR ANIMATION static page
const bar_static_first = new ProgressBar({
  percent: 52
});
$("#chart-animation-static-one").append(bar_faq_first.makeChart() );
bar_faq_first.go();

const bar_static_second = new ProgressBar({
  percent: 86
});
$("#chart-animation-static-two").append(bar_faq_second.makeChart() );
bar_faq_second.go();

