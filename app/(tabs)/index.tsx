// app/(tabs)/index.tsx
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { FlatList, Image, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const categories = ['Meals', 'Sides', 'Snacks', 'Drinks'];

const allPopularItems = [
  { id: 1, name: 'Patacon', price: '5$', image: { uri: 'https://t3.ftcdn.net/jpg/03/33/54/70/360_F_333547004_FNDwFdz8E6elOaJ4pNllaRcTFLReA5XF.jpg' }, category: 'Meals' },
  { id: 2, name: 'Spicy Noodles', price: '6.99$', image: { uri: 'https://static.vecteezy.com/system/resources/previews/056/253/370/non_2x/spicy-noodles-in-a-bowl-on-transparent-background-free-png.png' }, category: 'Meals' },
  { id: 3, name: 'Vegetable Soup', price: '3.99$', image: { uri: 'https://img.freepik.com/free-photo/top-view-delicious-soup-assortment_23-2148634458.jpg?t=st=1751999234~exp=1752002834~hmac=a43bda56dabc70ea4c598f3617258efdadd59c591e1ff2b05e6649310d244cbd&w=1380' }, category: 'Meals' },
  { id: 4, name: 'French Fries', price: '3.99$', image: { uri: 'https://img.freepik.com/free-photo/crispy-french-fries-with-ketchup-mayonnaise_1150-26588.jpg?t=st=1751999345~exp=1752002945~hmac=77266a2bec5f5a5b66a745f8123b18b027a9ee016b3bebe9b8092b1a19dae973&w=1380' }, category: 'Sides' },
  { id: 5, name: 'Spring Rolls', price: '3.99$', image: { uri: 'https://img.freepik.com/free-photo/plate-food-with-side-sauce_188544-8402.jpg?t=st=1751999412~exp=1752003012~hmac=5a692e350d513e5318ebadde5ab5dca3149887f4b2d3639cace968908c917fb0&w=1380' }, category: 'Snacks' },
  { id: 6, name: 'Coke', price: '0.99$', image: { uri: 'https://t4.ftcdn.net/jpg/05/82/97/27/360_F_582972760_T0T4qTwlZDolGql8CJaD1kMIPrG4vIew.jpg' }, category: 'Drinks' },
];

export default function HomeScreen() {
  const [selected, setSelected] = useState('Meals');

  const filteredItems = allPopularItems.filter(item => item.category === selected);

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 80 }}>
        <View style={styles.header}>
          <Ionicons name="menu" size={28} />
          <Ionicons name="cart" size={28} color="#F97316" />
        </View>

        <Text style={styles.greeting}>Hello César,</Text>
        <Text style={styles.question}>What would you like to <Text style={styles.highlight}>eat?</Text></Text>

        <View style={styles.searchRow}>
          <View style={styles.searchContainer}>
            <Ionicons name="search" size={20} color="#888" />
            <TextInput placeholder="Enter a dish name e.g. Soup" style={styles.input} />
          </View>
          <TouchableOpacity style={styles.filterBtn}>
            <Ionicons name="options" size={20} color="#fff" />
          </TouchableOpacity>
        </View>

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

        <View style={styles.offerCard}>
          <Image source={{ uri: 'https://www.shutterstock.com/image-photo/smash-burger-irresistible-delicacy-600nw-2555291033.jpg' }} style={styles.offerImage} />
          <View style={{ flex: 1, paddingLeft: 10, justifyContent: 'center' }}>
            <Text style={styles.offerTitle}>Yummies Special Burger</Text>
            <Text style={styles.offerPrice}>Now <Text style={styles.offerPriceValue}>7$</Text> <Text style={styles.discount}>(10% off)</Text></Text>
            <TouchableOpacity style={styles.addBtn}>
              <Text style={styles.addText}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.popularHeader}>
          <Text style={styles.sectionTitle}>Popular Now</Text>
          <Text style={styles.menuLink}>SEE FULL MENU {'>'}</Text>
        </View>
        <View style={{ marginBottom: 18 }} />
        <FlatList
          horizontal
          data={filteredItems}
          keyExtractor={(item) => item.id.toString()}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 10, paddingBottom: 10 }}
          style={{ paddingBottom: Platform.OS === 'ios' ? 20 : 10, minHeight: 170 }}
          renderItem={({ item }) => (
            <View style={styles.popularCard}>
              <View style={styles.popularImageWrapper}>
                <Image source={item.image} style={styles.popularImage} />
                <TouchableOpacity style={styles.heartIcon}>
                  <Ionicons name="heart-outline" size={18} color="#F97316" />
                </TouchableOpacity>
              </View>
              <Text style={styles.popularName}>{item.name}</Text>
              <Text style={styles.popularPrice}>{item.price}</Text>
            </View>
          )}
          snapToAlignment="start"
          decelerationRate={0.95}
          snapToInterval={160}
        />
      </ScrollView>
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="chatbubble-ellipses-outline" size={22} color="#888" />
          <Text style={styles.navLabel}>Live Chat</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="person-outline" size={22} color="#888" />
          <Text style={styles.navLabel}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.navItem, styles.navItemActive]}>
          <Ionicons name="home" size={26} color="#F97316" />
          <Text style={[styles.navLabel, styles.navLabelActive]}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="restaurant-outline" size={22} color="#888" />
          <Text style={styles.navLabel}>Menu</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="heart-outline" size={22} color="#888" />
          <Text style={styles.navLabel}>Favorites</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, backgroundColor: '#fff' },
  header: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16 },
  greeting: { fontSize: 16, color: '#444' },
  question: { fontSize: 24, fontWeight: 'bold' },
  highlight: { color: '#F97316' },
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
    marginBottom: 0,
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 8,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  input: { flex: 1, marginLeft: 10 },
  filterBtn: {
    backgroundColor: '#F97316',
    borderRadius: 10,
    marginLeft: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#F97316',
    shadowOpacity: 0.12,
    elevation: 2,
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
    borderRadius: 20,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    elevation: 3,
    padding: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#eee',
    alignItems: 'center',
  },
  offerImage: { width: 110, height: 110, borderRadius: 16 },
  offerTitle: { fontWeight: 'bold', fontSize: 16 },
  offerPrice: { marginVertical: 4, fontSize: 13 },
  offerPriceValue: { color: '#F97316', fontWeight: 'bold', fontSize: 18 },
  discount: { color: 'green', fontWeight: 'bold', fontSize: 12 },
  addBtn: {
    backgroundColor: '#fff',
    borderColor: '#F97316',
    borderWidth: 1,
    paddingVertical: 6,
    paddingHorizontal: 18,
    borderRadius: 10,
    alignSelf: 'flex-start',
    marginTop: 6,
  },
  addText: { color: '#F97316', fontWeight: 'bold' },

  popularHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 18,
    marginTop: 18,
  },
  sectionTitle: { fontSize: 18, fontWeight: 'bold' },
  menuLink: { color: '#F97316', fontSize: 13, fontWeight: 'bold', alignSelf: 'flex-end' },

  carouselRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    minHeight: 170,
  },
  carouselBtn: {
    padding: 8,
    borderRadius: 20,
    backgroundColor: '#fff',
    elevation: 2,
    marginHorizontal: 2,
  },

  popularCard: {
    width: 140,
    backgroundColor: '#fff',
    borderRadius: 18,
    marginRight: 16,
    padding: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    elevation: 2,
    position: 'relative',
    borderWidth: 1,
    borderColor: '#eee',
    marginBottom: 10,
  },
  popularImageWrapper: {
    width: 80,
    height: 80,
    borderRadius: 40,
    overflow: 'hidden',
    marginBottom: 8,
    position: 'relative',
    backgroundColor: '#f3f4f6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  popularImage: { width: 80, height: 80, borderRadius: 40 },
  heartIcon: {
    position: 'absolute',
    top: 6,
    right: 6,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 2,
    elevation: 2,
    zIndex: 2,
  },
  popularName: { marginTop: 2, fontWeight: '600', fontSize: 15, color: '#222', textAlign: 'center' },
  popularPrice: { fontWeight: 'bold', fontSize: 16, color: '#F97316', marginTop: 2 },

  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderColor: '#eee',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    elevation: 10,
    zIndex: 10,
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 2,
  },
  navItemActive: {
    // highlight active tab
  },
  navLabel: {
    fontSize: 11,
    color: '#888',
    marginTop: 2,
  },
  navLabelActive: {
    color: '#F97316',
    fontWeight: 'bold',
  },
});
