// screens/HomeScreen.tsx
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface Product {
  id: number;
  name: string;
  price: string;
  image: any;
}

const categories = ['Meals', 'Sides', 'Snacks', 'Drinks'];

const popularItems: Product[] = [
  { id: 1, name: 'Beef Salad', price: '₦1,200', image: require('../assets/beef.png') },
  { id: 2, name: 'Spicy Noodles', price: '₦1,500', image: require('../assets/noodles.png') },
  { id: 3, name: 'Vegetable Soup', price: '₦1,000', image: require('../assets/soup.png') },
];

export default function HomeScreen() {
  const [selected, setSelected] = useState<string>('Meals');

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="menu" size={28} />
        <Ionicons name="cart" size={28} color="#F97316" />
      </View>

      <Text style={styles.greeting}>Hello Chinwe,</Text>
      <Text style={styles.question}>
        What would you like to <Text style={styles.highlight}>eat?</Text>
      </Text>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#888" />
        <TextInput placeholder="Enter a dish name e.g. Egusi soup" style={styles.input} />
        <Ionicons name="options" size={20} color="#fff" style={styles.filterIcon} />
      </View>

      {/* Categories */}
      <View style={styles.categoryList}>
        {categories.map((cat) => (
          <TouchableOpacity
            key={cat}
            onPress={() => setSelected(cat)}
            style={[styles.categoryBtn, selected === cat && styles.activeCategory]}
          >
            <Text style={selected === cat ? styles.activeText : styles.categoryText}>{cat}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Special Offer */}
      <View style={styles.offerCard}>
        <Image source={require('../assets/burger.png')} style={styles.offerImage} />
        <View style={{ flex: 1, paddingLeft: 10 }}>
          <Text style={styles.offerTitle}>Yummies Special Burger</Text>
          <Text style={styles.offerPrice}>
            Now ₦1,800 <Text style={styles.discount}>(10% off)</Text>
          </Text>
          <TouchableOpacity style={styles.addBtn}>
            <Text style={styles.addText}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Popular Now */}
      <View style={styles.popularHeader}>
        <Text style={styles.sectionTitle}>Popular Now</Text>
        <Text style={styles.menuLink}>SEE FULL MENU ></Text>
      </View>

      <FlatList
        horizontal
        data={popularItems}
        keyExtractor={(item) => item.id.toString()}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 10 }}
        renderItem={({ item }) => (
          <View style={styles.popularCard}>
            <Image source={item.image} style={styles.popularImage} />
            <Text style={styles.popularName}>{item.name}</Text>
            <Text>{item.price}</Text>
          </View>
        )}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, backgroundColor: '#fff' },
  header: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16 },
  greeting: { fontSize: 16, color: '#444' },
  question: { fontSize: 24, fontWeight: 'bold' },
  highlight: { color: '#F97316' },
  searchContainer: {
    marginTop: 12,
    flexDirection: 'row',
    backgroundColor: '#F3F4F6',
    alignItems: 'center',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  input: { flex: 1, marginLeft: 10 },
  filterIcon: {
    backgroundColor: '#F97316',
    borderRadius: 8,
    padding: 4,
    marginLeft: 8,
  },
  categoryList: {
    flexDirection: 'row',
    marginVertical: 16,
  },
  categoryBtn: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#F3F4F6',
    borderRadius: 20,
    marginRight: 10,
  },
  categoryText: { color: '#444' },
  activeCategory: { backgroundColor: '#F97316' },
  activeText: { color: '#fff' },

  offerCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    elevation: 5,
    padding: 10,
    marginBottom: 20,
  },
  offerImage: { width: 100, height: 100, borderRadius: 12 },
  offerTitle: { fontWeight: 'bold', fontSize: 16 },
  offerPrice: { marginVertical: 4 },
  discount: { color: 'green' },
  addBtn: {
    backgroundColor: '#fff',
    borderColor: '#F97316',
    borderWidth: 1,
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 10,
    alignSelf: 'flex-start',
  },
  addText: { color: '#F97316' },

  popularHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionTitle: { fontSize: 18, fontWeight: 'bold' },
  menuLink: { color: '#F97316', fontSize: 12 },

  popularCard: {
    width: 140,
    backgroundColor: '#fff',
    borderRadius: 12,
    marginRight: 12,
    padding: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    elevation: 3,
  },
  popularImage: { width: 80, height: 80, borderRadius: 10 },
  popularName: { marginTop: 8, fontWeight: '500' },
});
