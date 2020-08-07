import React from 'react';
import { View, Image, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteOutlineIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

import styles from './styles';


function TeacherItem() {
    return (

        <View style={styles.container}>
            <View style={styles.profile}>

                <Image
                    style={styles.avatar}
                    source={{ uri: 'https://github.com/marcosjuniorclimaco.png' }}
                />

                <View style={styles.profileInfo}>
                    <Text style={styles.name}>Marcos J Climaco</Text>
                    <Text style={styles.subject}>Física</Text>
                </ View>
            </ View>

            <Text style={styles.bio}>
                Enthusiastic for design and technology
                {'\n'} {'\n'}
                Undergraduate student in Geography at the Federal University of Santa Catarina
                (Universidade Federal de Santa Catarina) and future full stack developer by Trybe 💚
            </Text>

            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço/hora {' '}
                    <Text style={styles.priceValue}>R$ 20,00</Text>
                </Text>

                <View style={styles.buttonContainer}>
                    <RectButton style={[styles.favoriteButton, styles.favorited ]}>
                        {/* <Image source={heartOutlineIcon} /> */}
                        <Image source={unfavoriteOutlineIcon} />
                    </RectButton>

                    <RectButton style={styles.contactButton}>
                        <Image source={whatsappIcon} />
                        <Text style={styles.contactButtonText}>Entrar em contato</Text>
                    </RectButton>

                </View>
            </View>
        </ View >
    )


}

export default TeacherItem;