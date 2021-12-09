export default function onlyTruthy(object: object | null) {
  if (object == null) {
    return {};
  }

  return Object.entries(object).reduce((acc, [key, value]) => {
    return value ? { ...acc, [key]: value } : acc;
  }, {});
}

export { onlyTruthy };
