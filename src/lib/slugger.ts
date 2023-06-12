export const slugger = (text: string) =>
  text.toLowerCase().trim().replace(' ', '-') + '-' + (Math.random() * 100).toFixed()
