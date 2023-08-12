export const regexChecker = (string, maximumStringLength) => {
  return string.match(
    new RegExp(`^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!"#$%&'()*+,-./:;<=>?@[\\]^_\`{|}~])[0-9a-zA-Z!@#$%^&*]{1,${maximumStringLength}}$`, 'g')
  );
}