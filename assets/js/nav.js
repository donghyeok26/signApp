function toggleSideBar() {
  let chk = $('body').hasClass('sidebar-collapse')

  if (chk) {
    $('body').removeClass('sidebar-closed')
    $('body').removeClass('sidebar-collapse')
    $('body').addClass('sidebar-open')
    $('#sidebar-overlay').show()
    // $(window).trigger('resize')
  } else {
    $('body').removeClass('sidebar-open')
    $('body').addClass('sidebar-closed')
    $('body').addClass('sidebar-collapse')
    $('#sidebar-overlay').hide()
    // $(window).trigger('resize')
  }
}

function XStoggleSideBar() {
  let chk = $('body').hasClass('sidebar-collapse')

  if (chk) {
    $('body').removeClass('sidebar-collapse')
  } else {
    $('body').addClass('sidebar-collapse')
  }
}

function initToggleBySize(width) {
  // console.log('initToggleBySize', width)
  $('body').removeClass('sidebar-closed')
  $('body').removeClass('sidebar-collapse')
  $('body').removeClass('sidebar-open')
  $('#sidebar-overlay').hide()

  if (width >= 768) {
  } else {
    $('body').addClass('sidebar-closed')
    $('body').addClass('sidebar-collapse')
  }
}
$(document).ready(function () {
  let documentWidth = $('body').width()

  $(window).resize(function () {
    documentWidth = $('body').width()
    initToggleBySize(documentWidth)
  })

  $('#push-menu, #sidebar-overlay').on('click', function (e) {
    e.preventDefault()
    if (documentWidth >= 768) {
      XStoggleSideBar()
    } else {
      toggleSideBar()
    }
  })

  initToggleBySize(documentWidth)
})
