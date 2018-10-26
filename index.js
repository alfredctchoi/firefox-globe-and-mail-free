function blockScript(requestDetails) {
  return {
    cancel: requestDetails.url.indexOf('foot-common-js') > -1
  };
}


browser.webRequest.onBeforeRequest.addListener(
  blockScript,
  { urls: ["<all_urls>"] },
  ["blocking"]
);
