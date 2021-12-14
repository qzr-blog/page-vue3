export default function () {
  window.WIDGET = {
    'CONFIG': {
      'modules': '01234',
      'background': '5',
      'tmpColor': 'FFFFFF',
      'tmpSize': '16',
      'cityColor': 'FFFFFF',
      'citySize': '16',
      'aqiColor': 'FFFFFF',
      'aqiSize': '16',
      'weatherIconSize': '24',
      'alertIconSize': '18',
      'padding': '3px 0px 0px 20px',
      'shadow': '0',
      'language': 'auto',
      'fixed': 'false',
      'vertical': 'top',
      'horizontal': 'left',
      'key': '3da60dd22bf04a97b135280a4952ca91'
    }
  }

  let script = document.createElement('script')
  script.type = 'text/javascript'
  script.src = 'https://widget.qweather.net/simple/static/js/he-simple-common.js?v=2.0'
  document.getElementsByTagName('head')[0].appendChild(script)
}
