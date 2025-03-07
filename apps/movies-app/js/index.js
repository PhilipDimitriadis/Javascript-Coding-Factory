$(function () {

  let debounceTimeOut = null
  $('#searchInput').on('input', function () {
    clearTimeout(debounceTimeOut)
    debounceTimeOut = setTimeout(() => getMovie(this.value.trim()), 1500)
  })

  $('#showMore').on('click', function (e) {
    e.preventDefault();
    onShowMoreClicked();
  })


})