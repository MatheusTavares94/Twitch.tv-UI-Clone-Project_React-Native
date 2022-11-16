import { StyleSheet, Platform } from "react-native";
import { cores } from "../../../utils/cores";

export const styles = StyleSheet.create({
    container: {
        backgroundColor:cores.background,
        flex: 1,
        flexDirection: 'column',
        paddingTop: Platform.OS === 'ios' ? 64 : 50 ,
        paddingHorizontal: 20,
        //backgroundColor: 'red'
    },
    goBack: {
        width: '100%',
        maxHeight: 30,
        marginBottom: 90,
        flex: 1,
        flexDirection: 'row',
        color: cores.textColor,
    },
    title: {
        fontSize: 20,
        fontWeight: "700",
        marginLeft: 30,
        color: cores.textColor,
    },
    formView:{
        paddingHorizontal: 18,
        marginBottom: 14,
        width: '100%'
    },
    formSubtitle: {
        //backgroundColor: 'red',
        fontSize: 16,
        fontWeight: '700',
        marginBottom: 8,
        color: cores.textColor,
    },
    formInput: {
        
        backgroundColor: '#383737',
        //backgroundColor:'#fff',
        padding: 12,
        borderRadius: 6,
        borderWidth: 0,       
        width: '100%'
    },
    formInputFocused: {
        backgroundColor: cores.background,
        //backgroundColor:'#fff',
        padding: 12,
        borderRadius: 6,
        borderWidth: 2,
        borderColor: '#9147ff',
        width: '100%'
    },
    passwordInput: {
        flexDirection:'row',
        alignItems:'center'
    },
    eyeIcon: {
        tintColor: 'black',
        opacity: 0.7,
        marginLeft: -46 ,
        height: 24,
        width: 24
    },
    troubleBtn: {
        marginVertical: 14
    },
    troubleTxt:{
        color: '#9147ff'
    },
    loginBtn: {
       //backgroundColor:'#e5e5e5',   -- Quando o form não estiver preenchido
       backgroundColor:'#9147ff',
       padding: 8,
       borderRadius: 6,
       alignItems:'center'
    },
    loginTxt:{
        //color: '#636363',  -- Quando o form não estiver preenchido
        color: cores.secondaryTextColor,
        fontWeight: '600',
        //opacity: 0.7      -- Quando o form não estiver preenchido
    }
})