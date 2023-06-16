const isEmpty = value => {
  return value.trim() === '';
}

const isSixChars = value => value.trim().length === 6;

export {isEmpty, isSixChars};