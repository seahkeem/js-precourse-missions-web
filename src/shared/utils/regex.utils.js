export const escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
export const createDelimiterRegex = (delimiters) =>
  new RegExp(`[${delimiters.map(escapeRegex).join('')}]`);
