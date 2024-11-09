import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

export default function Dashboard() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.userInfo}>
          <Image source={{ uri: 'https://tse1.mm.bing.net/th?id=OIP.a_yEDIj2otCWETGoHxL6DgAAAA&pid=Api&P=0&h=180' }} style={styles.logo} />
          <View>
            <Text style={styles.userName}>Leo Nando Reza Alwita Rama</Text>
            <Text style={styles.userStatus}>Regular • 1.000 Poin</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="notifications-outline" size={28} color="#fff" style={{ marginLeft: 20 }} />
        </TouchableOpacity>
      </View>
      <View style={styles.card}>
        <LinearGradient colors={['#D75B35', '#B71C1C']} style={styles.gradientBackground}>
          <Text style={styles.cardLabel}>PraBayar</Text>
          <Text style={styles.cardNumber}>2210010691</Text>
          <View style={styles.cardInfo}>
            <View style={styles.cardDetailLeft}>
              <Text style={styles.cardInfoLabel}>Sisa Pulsa</Text>
              <Text style={styles.cardInfoValue}>Rp100.000</Text>
            </View>
            <View style={styles.cardDetailRight}>
              <Text style={styles.cardInfoLabel}>Kuota Internet</Text>
              <Text style={styles.cardInfoValue}>100,00 GB</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.addButton} activeOpacity={0.7}>
            <Text style={styles.addButtonText}>Tambah Akun</Text>
          </TouchableOpacity>
          <Text style={styles.additionalInfo}>Dapatkan bonus jika Anda menambah akun baru!</Text>
        </LinearGradient>
      </View>

      <View style={styles.menuContainer}>
        {[
          { label: 'Beli Paket', icon: 'https://png.pngtree.com/png-clipart/20220919/original/pngtree-pesan-sekarang-pop-up-png-image_8623414.png' },
          { label: 'Super Seru', icon: 'https://www.tri60.it/wp-content/uploads/2019/10/promo.jpg' },
          { label: 'Paket Darurat', icon: 'https://www.pngmart.com/files/7/Emergency-PNG-File.png' },
          { label: 'Paket Spesial', icon: 'https://png.pngtree.com/png-vector/20230106/ourmid/pngtree-special-price-with-red-color-in-rounded-rectangle-shape-for-business-png-image_6539315.png' },
          { label: 'Kuota Game', icon: 'https://i.pinimg.com/736x/25/c1/d6/25c1d6ea4475df282295589582d9634d.jpg' },
          { label: 'Super Promo', icon: 'https://cdn3d.iconscout.com/3d/premium/thumb/super-promo-6901239-5651105.png' },
          { label: 'Kontak Kami', icon: 'https://static.vecteezy.com/system/resources/previews/009/344/680/non_2x/telephone-transparent-free-png.png' },
          { label: 'Lihat Semua', icon: 'https://cdn.linkaja.com/website/component_items/February2022/1645502172-ic_webicon_lihat_semua.png' },
        ].map((menu, index) => (
          <TouchableOpacity key={index} style={styles.menuItem}>
            <Image source={{ uri: menu.icon }} style={styles.menuIcon} />
            <Text style={styles.menuText}>{menu.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Promo Section */}
      <View style={styles.promoSection}>
        <Text style={styles.promoTitle}>For You</Text>
        {[
          { data: '18 GB', price: 'Rp50.000', label: 'Internet Basic' },
          { data: '20 GB', price: 'Rp60.000', label: 'Internet Super' },
          { data: '50 GB', price: 'Rp100.000', label: 'Internet Spesial' },
          { data: '100 GB', price: 'Rp200.000', label: 'Internet Super Combo' },
        ].map((promo, index) => (
          <View key={index} style={styles.promoCard}>
            <Text style={styles.promoData}>{promo.data}</Text>
            <Text style={styles.promoDetails}>{promo.label}</Text>
            <Text style={styles.promoPrice}>{promo.price}</Text>
            <TouchableOpacity style={styles.buyButton}>
              <Text style={styles.buyButtonText}>Beli</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7B1616',
  },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: '#fff',
  },
  header: {
    backgroundColor: '#EC2025',
    paddingHorizontal: 16,
    paddingVertical: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 70,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userName: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginLeft: 10,
  },
  userStatus: {
    color: '#FFFFFF',
    fontStyle: 'italic',
    marginLeft: 10,
  },
  iconButton: {
    marginLeft: 10,
  },
  iconText: {
    color: '#FFFFFF',
    fontSize: 20,
  },
  card: {
    margin: 16,
    alignItems: 'center',
    borderRadius: 16,
    overflow: 'hidden',
    borderWidth: 1,
  },
  cardInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 16,
  },
  cardDetailLeft: {
    flex: 1,
    alignItems: 'flex-start',
  },
  cardDetailRight: {
    flex: 1,
    alignItems: 'flex-end',
  },

  gradientBackground: {
    borderRadius: 16,
    padding: 16,
    width: '100%',
  },
  cardLabel: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 15,
    marginLeft: 150,
  },
  cardNumber: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 16,
    marginLeft: 125,
  },
  cardDetail: {
    flex: 1,
    alignItems: 'center',
  },
  cardInfoLabel: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  cardInfoValue: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 16,
    alignItems: 'center',
    marginTop: 10,
  },
  addButtonText: {
    color: '#EC2025',
    fontWeight: 'bold',
  },
  additionalInfo: {
    color: '#FFFFFF',
    fontStyle: 'italic',
    textAlign: 'center',
    marginTop: 10,
  },
  menuContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    backgroundColor: '#FFFFFF',
    paddingVertical: 16,
    marginHorizontal: 16,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  menuItem: {
    width: '22%',
    alignItems: 'center',
    marginBottom: 16,
  },
  menuIcon: {
    width: 50,
    height: 40,
    marginBottom: 8,
  },
  menuText: {
    textAlign: 'center',
    color: '#333333',
  },
  promoSection: {
    padding: 16,
  },
  promoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 16,
  },
  promoCard: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 16,
    marginBottom: 16,
    borderColor: '#060606',
    borderWidth: 1,
  },
  promoData: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#EC2025',
  },
  promoDetails: {
    color: '#333333',
    marginVertical: 8,
    fontWeight: 'bold',
  },
  promoPrice: {
    color: '#333333',
    marginBottom: 8,
    fontWeight: 'bold',
  },
  buyButton: {
    backgroundColor: '#EC2025',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  buyButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});
