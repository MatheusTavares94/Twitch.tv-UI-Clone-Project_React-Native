import { Text, View, Image, ScrollView, TouchableOpacity, } from 'react-native';
import { styles } from './styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';
import { Entypo } from '@expo/vector-icons';

export const CanaisAoVivo = ({ canais }) => {
    return (
        <View style={styles.channelBox}>
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
                
            </View>
        </View >
    )
}