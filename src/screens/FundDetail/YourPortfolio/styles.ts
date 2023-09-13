import {StyleSheet} from 'react-native';

import colors from '#/static/colors';

export default StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 50,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    marginLeft: 5,
  },
  valuesContainer: {
    marginTop: 20,
  },
  valuesTopContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  valuesBottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  buttonSell: {
    flex: 1,
  },
  buttonCredit: {
    flex: 1,
    marginLeft: 10,
  },
  warnText: {
    marginTop: 10,
  },
  bottomTextContainer: {
    marginTop: 30,
    backgroundColor: colors.gray,
    padding: 15,
  },
  buyButton: {
    marginTop: 30,
  },
});
