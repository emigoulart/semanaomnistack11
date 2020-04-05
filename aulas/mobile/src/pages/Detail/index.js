import React from 'react';
import { Feather } from '@expo/vector-icons';
import styles from '../Detail/styles';
import { View, Image, Text, TouchableOpacity, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';


import * as MailComposer from 'expo-mail-composer'

import logoImg from  '../../assets/logo.png';

export default function Detail() {
const navigation = useNavigation();
const message = 'Olá APAD, estou entrando em contato, pois gostaria de ajudar no caso da cadelinha atropelada';

function navigateBack(){
    navigation.goBack()
}

function sendEmail(){
    MailComposer.composeAsync(
        {
            subject: 'Herói do cso: Cadelinha atropelada',
            recipients:['emigoulart@gmail.com'],
            body :message
        }
    )

}

function sendWhatsApp(){
   Linking.openURL(`whatsapp://send?phone=5551999671293&text=${message}`);
}

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />

                <TouchableOpacity
                    onPress={navigateBack}>
                    <Feather name="arrow-left" size={28} color="#E02041" />
                </TouchableOpacity>

            </View>
            <View style={styles.incident}>
                <Text style={styles.incidentProperty}>ONG:</Text>
                <Text style={styles.incidentValue}>APAD</Text>

                <Text style={styles.incidentProperty}>CASO:</Text>
                <Text style={styles.incidentValue}>Cadelinha atropelada</Text>

                <Text style={styles.incidentProperty}>Valor:</Text>
                <Text style={styles.incidentValue}>R$:120,00</Text>
            </View>

            <View style={styles.contactBox}>
                <Text style={styles.heroTitle}>Salve o dia!</Text>
                <Text style={styles.heroTitle}>Seja o herói desse caso!</Text>
                <Text style={styles.heroDescription}>Entre em contato:</Text>
                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPress={sendWhatsApp}>
                        <Text style={styles.actionText}>WhatsApp</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.action} onPress={sendEmail}>
                        <Text style={styles.actionText}>E-mail</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </View>
    );
}