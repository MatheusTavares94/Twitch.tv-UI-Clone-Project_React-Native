import { StyleSheet, Platform } from "react-native";
import { Dimensions } from 'react-native'
import { cores } from "../../../utils/cores";

const halfWindowsWidth = Dimensions.get('window').width / 1

export const styles = StyleSheet.create({
    boxContent:{
        marginTop: 0,
        marginBottom: 0,        
        width:'95%'
        
    },
 favoriteBox:{
    maxWidth: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 42,
    marginBottom: 20,
    paddingLeft: 10,
},
favoriteInfo:{
    flexDirection: 'row',
    alignItems: 'center',
    color: cores.textColor,
},
favoriteIcon: {
    height: 45,
    width: 45,
    borderRadius: 50,
    marginRight: 8,
},
favoriteName:{
    fontWeight: '700',
    fontSize: 16,
    color: cores.textColor,
},
favoriteQuantity:{
    opacity: 0.8,
    fontWeight: '400',
    fontSize: 12,
    color: cores.secondaryTextColor,
},
})