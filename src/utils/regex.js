export const regex = (string, min, max) => {
  return string.match(
    new RegExp(`^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!"#$%&'()*+,-./:;<=>?@[\\]^_\`{|}~])[0-9a-zA-Z!@#$%^&*]{${min},${max}}$`, 'g')
  );
}

export const regexChecker = (string, min, max) => (regex(string, min, max) ? 'match' : 'non-match')