import { StyleSheet, Platform } from "react-native";
import { Dimensions } from 'react-native'
import { cores } from "../../../utils/cores";

const halfWindowsWidth = Dimensions.get('window').width / 1

export const styles = StyleSheet.create({
    body: {
        backgroundColor: cores.background,
        height: '100%',
    },
    container: {
        backgroundColor: cores.background,
        marginTop: 0,
        flex: 1,
        flexDirection: 'column',
        paddingTop: Platform.OS === 'ios' ? 64 : 50 ,
        paddingHorizontal: 0,
    },
    scrollScreen:{
        width: halfWindowsWidth,
        marginBottom: 62,
        paddingHorizontal: 16,
    },
    title: {
        marginTop: 8,
        fontSize: 38,
        fontWeight: '700'
    },
    subtitle: {
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 18,
        color: cores.textColor,
    },

})