module.exports = (content, maxLength) => {
  if(typeof content !== 'string') return 'Error';
  if(content.length < 1) return 'Error';
  if(content.length <= maxLength) return content;
  if(maxLength !== typeof number) return 'Error';
  return content.substr(0, content.lastIndexOf(' ', maxLength)) + '...';
};
