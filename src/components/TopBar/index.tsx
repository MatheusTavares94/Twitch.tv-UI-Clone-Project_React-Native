import { View, Text, StyleSheet, Platform, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { cores } from '../../../utils/cores';

export const TopBar = () => {
    return (
        <View style={styles.container}>
            <View style={styles.profileIcon}>
                <MaterialCommunityIcons
                    name={'account-outline'}
                    color={cores.textColor}
                    size={22}
                />
            </View>
            <View style={styles.rowContainer}>
                <TouchableOpacity style={styles.navIcons}>
                    <MaterialCommunityIcons
                        name={'inbox'}
                        color={cores.textColor}
                        size={22}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.navIcons}>
                    <MaterialCommunityIcons
                        name={'comment'}
                        color={cores.textColor}
                        size={22}
                    // style={{ marginLeft: 8 }}
                    />
                </TouchableOpacity>
                <View style={styles.iconContainer}>
                    <MaterialCommunityIcons
                        name={'radio-tower'}
                        size={20}
                        color={cores.textColor}
                    />
                    <Text style={styles.text}>Criar</Text>
                </View>
            </View>
        </View>
    );
};

//Verificar erro Property 'create' does not exist on type '{ new (): StyleSheet; prototype: StyleSheet; }'.ts(2339)
const statusBarHeight =
    Platform.OS === 'android' ? Constants.statusBarHeight : 0;

const styles = StyleSheet.create({
 

    container: {
        width: '100%',
        paddingVertical: 8,
        paddingHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: cores.background,
        alignItems: 'center',
        // marginTop:25,
        paddingTop: statusBarHeight,
        
    },
    rowContainer: {
        
        flexDirection: 'row',
        alignItems: 'center'
    },
    iconContainer: {
        
        backgroundColor: cores.cardBackground,        
        flexDirection: 'row',
        paddingHorizontal: 12,
        paddingVertical: 10,
        alignItems: 'center',
        borderRadius: 20,
        marginLeft: 8
    },
    text: {
        marginLeft: 8,
        color: cores.textColor,
        fontWeight: 'bold',
    },
    profileIcon: {
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: cores.brandLight,
        justifyContent: 'center',
        alignItems: 'center',
    },
    navIcons: {
        width: 20,
        height: 20,
        marginRight: 24,
        opacity: 1,
        marginLeft: 6
    },
});
