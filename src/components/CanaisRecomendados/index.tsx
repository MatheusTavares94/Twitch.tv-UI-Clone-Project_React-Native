import { Text, View, Image, ScrollView, TouchableOpacity, } from 'react-native';
import { styles } from './styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';
import { Entypo } from '@expo/vector-icons';
import { cores } from '../../../utils/cores';

export const CanaisRecomendados = ({ canais }) => {
    return (
        <View style={styles.channelBox}>
            <TouchableOpacity>
            <View style={styles.channelCard}>
                <View>
                    <Image
                        style={styles.thumbnail}
                        source={{ uri: canais.thumbnail }}
                    />
                    <View style={styles.viewBox}>
                        <MaterialCommunityIcons
                            name='circle'
                            color={'red'}
                        />
                        <Text style={styles.viewCount}>{canais.views}</Text>
                    </View>
                </View>
                <View style={styles.streamData}>
                    <View style={styles.streamChannel}>
                        <Image
                            style={styles.channelIcon}
                            source={{ uri: canais.fotoPerfilCanal }}
                        />
                        <Text
                            numberOfLines={1}
                            style={styles.channelName}
                        >
                            {canais.nomeCanal}
                        </Text>
                    </View>
                    <Text
                        numberOfLines={1}
                        style={styles.streamTitle}
                    >
                        {canais.titulo}
                    </Text>
                    <Text
                        numberOfLines={1}
                        style={styles.gameTitle}
                    >
                        {canais.game}
                    </Text>
                    <Text
                        numberOfLines={1}
                        style={styles.category}
                    >
                        {canais.categorias}
                    </Text>
                </View>
                <Entypo 
                name="dots-three-vertical" 
                size={18} 
                color={cores.secondaryTextColor} 
                style={styles.verticalDots}
                />
                
            </View>
            </TouchableOpacity>
        </View >
    )
}