import colors from '#/static/colors';

export const getValueColor = (value: number) => {
  if (value > 0) {
    return colors.green;
  }
  if (value < 0) {
    return colors.red;
  }

  return colors.green;
};
