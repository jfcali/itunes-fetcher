export const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties
  };
};

export const ellipsis = ({ text = '', tail = '...', length = 100 }) => {
  return text.length <= length
    ? text
    : [...text].splice(0, length).join('') + tail;
};
