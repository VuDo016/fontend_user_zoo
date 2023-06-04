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
  /////////////////TICKET/////////////
  containerTK: {
    height: screenHeight,
    width: screenWidth,
    backgroundColor: colors.mainHome,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnIconXTK: {
    position: 'absolute',
    left: '2%',
    top: '2%'
  },
  iconXTK: {
    height: screenWidth / 7,
    width: screenWidth / 7,
    tintColor: colors.text
  },
  circeTK: {
    height: screenWidth / 10,
    width: screenWidth / 10,
    top: '41%',
    borderRadius: 100,
    position: 'absolute',
    zIndex: 5,
    backgroundColor: colors.mainHome
  },
  itemTK: {
    width: '90%',
    height: '80%',
    borderRadius: 20,
    padding: '7%',
    backgroundColor: colors.text,
    borderWidth: 5,
    borderColor: colors.phaneon
  },
  item1TK: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderStyle: 'dashed',
    borderColor: colors.mainHome,
    paddingVertical: '5%'
  },
  item2TK: {
    flex: 5.3,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: '5%'
  },
  item21TK: {
    height: '60%',
    width: '100%',
    justifyContent: 'space-between'
  },
  itemInfoTK: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: colors.mainLight3
  },
  textNoteTK: {
    color: 'red',
    fontSize: 15
  },
  textBtnTK: {
    color: colors.black,
    fontSize: 17,
    fontWeight: '500'
  },
  textBigTK: {
    color: colors.black,
    fontSize: 25,
    fontWeight: 'bold'
  },
  viewRowinfoTK: {
    flexDirection: 'row',
    height: '100%',
    width: '47%',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  textinfoTK: {
    fontWeight: '500',
    fontSize: 17,
    color: colors.dark2
  },
  iconMoreTK: {
    height: 22,
    width: 22
  },
  item3TK: {
    flex: 0.7,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.mainDark,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageLogoTK: {
    height: screenWidth / 2,
    width: screenWidth / 2
  },
  viewListServiceTK: {
    flex: 1,
    alignItems: 'flex-end'
  },
  ////////////////////
  flastHis: {
    backgroundColor: colors.text
  },
  itemHis: {
    height: screenHeight / 7,
    width: screenWidth / 1.1,
    margin: '5%',
    borderRadius: 10,
    borderColor: colors.dark,
    borderWidth: 2,
    backgroundColor: colors.mainLight3
  },
  itemHis1: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: '7%'
  },
  viewheadHis: {
    alignItems: 'flex-end'
  },
  statusHis1: {
    height: '60%',
    width: '25%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  },
  textBigHis: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.black
  },
  textTitleHis: {
    fontSize: 17,
    color: colors.black,
    fontWeight: '400'
  },
  textTitleHis1: {
    fontSize: 13,
    color: colors.dark2
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalCloseButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    zIndex: 2,
  },
  modalCloseIcon: {
    width: screenWidth / 5,
    height: screenWidth / 5,
  },
  qrCodeContainerFullScreen: {
    height: screenHeight,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: '10%'
  },
  qrCodeFullScreen: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  qrCodeDateFullScreen: {
    marginTop: 10,
    fontSize: 20,
    textAlign: 'center',
  },
  
});

export default styles;