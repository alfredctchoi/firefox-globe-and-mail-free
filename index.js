function blockScript(requestDetails) {
  console.log("Redirecting: " + requestDetails.url);
  return {
    cancel: requestDetails.url.includes('foot-common-js')
  };
}

browser.webRequest.onBeforeRequest.addListener(
  blockScript,
  { urls: ['<all_urls>'] },
  ["blocking"]
);