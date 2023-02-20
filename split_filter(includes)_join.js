function shortcut (string) {
  const letters = ['a', 'e', 'i', 'o', 'u']
  return string.split('').filter(x => !letters.includes(x)).join('');
}