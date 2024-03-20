export const gtmEvent = (category: string, action: string, label: string) => {
  window.dataLayer?.push({
    event: 'customEvent',
    category: category,
    action: action,
    label: label,
  })
}

export const gtmVirtualPageView = (pageName: string) => {
  window.dataLayer?.push({
    event: 'virtualPageView',
    pageName: pageName,
    pageURL: window.location.href,
  })
}
