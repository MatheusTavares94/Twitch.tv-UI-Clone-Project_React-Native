import { StyleSheet, Platform } from "react-native";
import { Dimensions } from 'react-native'
import { cores } from "../../../utils/cores";



export const styles = StyleSheet.create({
    
    
    title: {
        marginTop: 8,
        fontSize: 38,
        fontWeight: '700',
        color: cores.textColor,
        paddingLeft:10,
    },
    subtitle: {
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 18,
        color: cores.textColor,
        paddingLeft:10,


    },

})