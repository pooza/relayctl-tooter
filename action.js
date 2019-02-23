'strict mode';

document.addEventListener('DOMContentLoaded', () => {
  const $ = id => {
    return document.getElementById(id);
  }

  const createBody = tag => {
    return [
      $('account-menu').value,
      $('action-menu').value,
      '#' + decodeURIComponent(tag),
    ].join(' ');
  }

  const pattern = /(\/web\/timelines\/tag|\/tags)\/([^/]+)/;

  $('generate-button').addEventListener('click', () => {
    chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
      const tab = tabs.shift();
      const url = new URL(tab.url);
      const matches = url.pathname.match(pattern);
      if (matches[2]) {
        $('toot-textarea').value = createBody(matches[2]);
        $('toot-textarea').select();
        document.execCommand('copy');
      }
    });
  })
});