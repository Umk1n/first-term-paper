var button = $('#open-button').click(function() {
  modal.plainModal('open');
}),
modal = $('#modal').plainModal({overlay: {fillColor: '#261B00', opacity: 0.8},
offset: function(center) {
    // sizing by view port, step by 100px
    var jqHtml = $('html'),
      width = jqHtml.prop('clientWidth'),
      height = jqHtml.prop('clientHeight');
    width = width * 0.3;
    height = height * 0.4;
    width = Math.round(width / 100) * 100;
    height = Math.round(height / 100) * 100;
    if (width < 100) { width = 100; }
    if (height < 100) { height = 100; }
    this.width(width).height(height);
    center(); // position to center.
  }});