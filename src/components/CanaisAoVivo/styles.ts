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
    channelBox:{
        marginTop: 0,
        marginBottom: 0,
        paddingLeft:5,       
    },

    channelCard:{
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        height: 120,
    },

    thumbnail:{
        width: 120,
        height: 64,
        marginRight: 15
    },

   
    countBox: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    countText: {
        fontSize: 14,
        fontWeight: '500',
        opacity: 0.7,
        marginLeft: 4,
        color: cores.textColor,

    },

    viewBox: {
        flexDirection: 'row',
        alignItems: 'center',
        left:0,
        top: -18,
       
    },
    viewCount: {
        fontSize: 12,
        fontWeight: '700',
        color: cores.textColor,
        marginLeft: 4
    },

    streamData:{
        position:'relative',
        left: 0,
        height: 100,
        flexDirection: 'column',
        width: 200,        
    },

    streamChannel:{
        flexDirection: 'row',
        alignItems: 'center'
    },    
    
    channelIcon:{
        height: 18,
        width: 18,
        borderRadius: 100,
        marginRight: 6
    },
    channelName: {
        fontWeight: '600',
        fontSize: 16,
        color: cores.textColor,
    },
    streamTitle: {
        maxWidth: '80%',
        marginTop: 4,
        fontWeight: '500',
        fontSize: 14,
        color: cores.textColor,
    },
    gameTitle: {
        maxWidth: '80%',
        marginTop: 4 ,
        fontWeight: '500',
        fontSize: 14,
        color: cores.secondaryTextColor,
    },
    category: {
        fontSize: 12,       
        maxWidth: 125,       
        marginTop: 8,
        alignSelf: 'flex-start',
        color: cores.textColor,
        backgroundColor: cores.cardBackground,
        paddingVertical: 2,
        paddingHorizontal: 8,
        borderRadius: 8,
    },
    liveOptions: {
        maxHeight: 50,
        width: 4,
        fontWeight: '900',   
    },
    verticalDots:{
        marginTop: 0,
        marginLeft:-25,
    },

    
    
     scrollFollowed:{
        maxHeight: 188,
    },
    followedCard:{
        maxWidth: 104,
        marginRight: 8,
        marginBottom: 17
    },
    followedImage: {
        width: 94,
        height: 130
    },
    followedText:{
        fontSize: 14,
        fontWeight: '700',
        maxWidth:100,
        marginTop: 6,
    },
   
})