import React from "react";
import { View, Text, ScrollView } from "react-native";
import { canais, canaisRecomendados } from "../../../utils/canais";
// import {canaisOff} from "../../../utils/canaisOff"
import { cores } from "../../../utils/cores";
import { CanaisAoVivo } from "../../components/CanaisAoVivo";
import { styles } from "./styles";
import { CanaisOffline } from "../../components/CanaisOffline";
import { CanaisRecomendados } from "../../components/CanaisRecomendados";
import { TopBar } from "../../components/TopBar";



export const Seguindo = () => {
    return (
        <View>
            <View style={{ backgroundColor: cores.background }}>
                <TopBar />

                <ScrollView>
                    <Text style={{ color: cores.textColor }}>
                        Seguindo
                    </Text>
                    <View>
                        <Text
                            style={styles.subtitle}
                        >Seus canais ao vivo</Text>
                        {canais.map(c => {
                            return (
                                <CanaisAoVivo key={c.id} canais={c} />
                            )
                        })}
                    </View>
                    <View>
                        <Text
                            style={styles.subtitle}
                        >Canais recomendados para você</Text>
                        {canaisRecomendados.map(c => {
                            return (
                                <CanaisRecomendados key={c.id} canais={c} />
                            )
                        })}
                    </View>
                    <View style={{ paddingTop: 20 }}>
                        <Text
                            style={styles.subtitle}
                        >Seus canais off-line</Text>

                        <CanaisOffline />

                        {canaisRecomendados.map(c => {
                            return (
                                <CanaisRecomendados key={c.id} canais={c} />
                            )
                        })}
                    </View>

                </ScrollView>
            </View>
        </View>
    )
}