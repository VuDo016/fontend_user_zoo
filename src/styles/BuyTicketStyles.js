import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

import colors from "../../assets/colors/colors";
const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.text,
    padding: '2%'
  },
  item1: {
    flex: 2.7
  },
  item1: {
    flex: 2.7
  },
  item2: {
    flex: 6
  },
  item2s2: {
    flex: 6,
    alignItems: 'center',
    marginBottom: '7%'
  },
  item3: {
    flex: 1.3
  },
  calendar: {
    height: '50%',
    width: '100%'
  },
  iconX: {
    position: 'absolute',
    right: 0
  },
  viewText: {
    marginTop: '20%',
    marginLeft: '5%'
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    color: colors.black
  },
  button: {
    height: '60%',
    width: '40%',
    backgroundColor: colors.mainHome,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    position: 'absolute',
    bottom: '10%',
    right: '5%'
  },
  button2: {
    height: '60%',
    width: '40%',
    backgroundColor: colors.mainHome,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    position: 'absolute',
    bottom: '10%',
    left: '5%'
  },
  textBtn: {
    fontSize: 20,
    color: colors.text,
    fontWeight: 'bold'
  },
  image: {
    height: '80%',
    width: '80%'
  },
  image1: {
    height: '50%',
    width: '80%'
  },
  image2: {
    height: '80%',
    width: '50%'
  },
  viewItemChoice: {
    flexDirection: 'row',
    width: '90%',
    height: '31%',
    backgroundColor: colors.greenLight,
    justifyContent: 'space-between',
    paddingHorizontal: '10%',
    alignItems: 'center',
    borderRadius: 20,
    marginVertical: '2%'
  },
  viewServiceChoice: {
    width: '95%',
    height: '100%',
    backgroundColor: colors.greenLight,
    paddingVertical: '17%',
    justifyContent: 'center',
    paddingHorizontal: '10%',
    alignItems: 'center',
    borderRadius: 20
  },
  viewVehicleChoice: {
    flexDirection: 'row',
    width: '95%',
    height: '100%',
    backgroundColor: colors.greenLight,
    justifyContent: 'space-between',
    paddingHorizontal: '10%',
    alignItems: 'center',
    borderRadius: 20,
    marginVertical: '2%'
  },
  textType: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.black
  },
  textPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: '5%',
    color: colors.mainHome
  },
  viewFoot: {
    width: '100%',
    alignItems: 'center'
  },
  textFoot: {
    color: colors.orange,
    fontWeight: '600'
  },
  viewTT: {
    height: '90%',
    paddingVertical: '1%',
    justifyContent: 'space-between'
  },
  checkBox: {
    position: 'absolute',
    top: '5%',
    left: '2%',
    zIndex: 1
  },
  checkBox1: {
    position: 'absolute',
    top: '45%',
    left: '2%',
    zIndex: 1
  },
  viewTag: {
    height: 120,
    width: '90%',
    marginVertical: '2%'
  },
  viewTag1: {
    height: 175,
    width: '50%',
    marginVertical: '2%'
  },
  /////////////////BILL INFO/////////////////
  container1: {
    flex: 1,
    width: screenWidth / 1.1,
    paddingVertical: 20,
    paddingHorizontal: '5%',
    backgroundColor: colors.greenLight
  },
  section: {
    marginBottom: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
  },
  value: {
    fontSize: 16,
    color: colors.black,
  },
  ticketList: {
    marginTop: 10,
  },
  ticket: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: colors.text,
    borderRadius: 5,
    marginBottom: 5,
  },
  ticketName: {
    fontWeight: 'bold',
    fontSize: 16,
    color: colors.greenDark,
  },
  ticketPrice: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.dark2
  },
  ticketQuantity: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.dark2
  },
  serviceList: {
    marginTop: 10,
  },
  service: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginBottom: 5,
  },
  serviceName: {
    fontWeight: 'bold',
    fontSize: 16,
    color: colors.greenDark,
  },
  servicePrice: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.dark2
  },
  serviceQuantity: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.dark2
  },
  // containerVNpay: {
  //   justifyContent: 'center',
  //   alignItems: 'center'
  // }
});

export default styles;