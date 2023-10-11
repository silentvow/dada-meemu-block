const GA_TRACKING_ID = 'G-YNQ2XENHRF'

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const sendPageView = url => {
  window?.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  })
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const sendEvent = (event, params = {}) => {
  window?.gtag('event', event, params)
}
