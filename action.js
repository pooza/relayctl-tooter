'strict mode';

document.addEventListener('DOMContentLoaded', () => {
  const $ = id => {
    return document.getElementById(id);
  }

  const createBody = href => {
    return [
      'command: ' + $('service-menu').value + '_clipping',
      'url: ' + href,
    ].join("\n");
  }

  $('clip-button').addEventListener('click', () => {
    chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
      const tab = tabs.shift();
      $('command-textarea').value = createBody(tab.url);
      $('command-textarea').select();
      document.execCommand('copy');
    });
  })
});