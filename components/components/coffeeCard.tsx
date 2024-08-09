import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

interface coffeeItems {
    item: {
        id: number;
        name: string;
        price: string;
        volume: string;
        stars: string;
        Image: any;
        desc: string;
    };
}

const CoffeeCard: React.FC<coffeeItems> = ({ item }) => {
    return (
        <View style={styles.card}>
            <Image source={item.Image} style={styles.image} />
            <View style={styles.textContainer}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.price}>{item.price}</Text>
                <Text style={styles.volume}>{item.volume}</Text>
                <Text style={styles.stars}>{item.stars} ⭐</Text>
                <Text style={styles.desc}>{item.desc}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        overflow: 'hidden',
        marginBottom: 16,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
    },
    image: {
        width: '100%',
        height: 150,
    },
    textContainer: {
        padding: 16,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    price: {
        fontSize: 16,
        color: '#333',
    },
    volume: {
        fontSize: 14,
        color: '#666',
    },
    stars: {
        fontSize: 14,
        color: '#ffcc00',
    },
    desc: {
        fontSize: 14,
        color: '#666',
        marginTop: 8,
    },
});

export default CoffeeCard;