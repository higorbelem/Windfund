import {Dimensions, StyleSheet} from 'react-native';

const {width} = Dimensions.get('window');

export default (topSpace: number, bottomSpace: number) =>
  StyleSheet.create({
    scroll: {
      width: '100%',
      height: '100%',
    },
    scrollContent: {
      paddingTop: topSpace,
      paddingBottom: bottomSpace,
      paddingHorizontal: 20,
      alignItems: 'center',
    },
    balanceContainer: {
      width: '100%',
    },
    balanceValuesContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    chartScroll: {
      width,
      flexGrow: 0,
    },
    statsWrapper: {
      width: '100%',
    },
    statsContainer: {},
    statsContainerRow: {
      flexDirection: 'row',
      marginTop: 15,
    },
    breakdownWrapper: {
      width: '100%',
      marginTop: 50,
    },
  });
