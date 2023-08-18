import { LinearGradient } from 'expo-linear-gradient';
import { CaretDown, MapPin, BellRinging } from "phosphor-react-native";
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Sun from '../../assets/01n.svg';
import Sun02d from '../../assets/02d.svg';

export function Home() {
  return (
    <LinearGradient 
      colors={["#292A4E", "#715C77", "#C75C2E"]} 
      style={styles.container}
    >
      <View style={styles.content}>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <MapPin color='#fff' size={25}/>
            <Text style={styles.headerLeftText}>Joinville - SC</Text>
            <CaretDown color='#fff' size={25} />
          </View>
          <BellRinging color='#fff' size={25} />
        </View>

        <View style={styles.info}>
          <Text style={styles.infoTextUser} >Boa noite, Eduardo</Text>
          <Sun width={200} height={200} />
          <Text style={styles.infoTextClima}>21ºC</Text>
          <Text style={styles.infoTextMaxMin}>Max.: 26º Min.: 18º</Text>

        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Previsão para os próximos 7 dias</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.footerCard}>
            <Text style={styles.footerCardTitle}>Sex</Text>
            <Sun02d width={40} height={40} />
            <Text style={styles.footerCardPreview}>31ºC</Text>
          </View>

          <View style={styles.footerCard}>
            <Text style={styles.footerCardTitle}>Sab</Text>
            <Sun02d width={40} height={40} />
            <Text style={styles.footerCardPreview}>22ºC</Text>
          </View>

          <View style={styles.footerCard}>
            <Text style={styles.footerCardTitle}>Dom</Text>
            <Sun02d width={40} height={40} />
            <Text style={styles.footerCardPreview}>23ºC</Text>
          </View>

          <View style={styles.footerCard}>
            <Text style={styles.footerCardTitle}>Seg</Text>
            <Sun02d width={40} height={40} />
            <Text style={styles.footerCardPreview}>26ºC</Text>
          </View>

          <View style={styles.footerCard}>
            <Text style={styles.footerCardTitle}>Ter</Text>
            <Sun02d width={40} height={40} />
            <Text style={styles.footerCardPreview}>29ºC</Text>
          </View>

          <View style={styles.footerCard}>
            <Text style={styles.footerCardTitle}>Qua</Text>
            <Sun02d width={40} height={40} />
            <Text style={styles.footerCardPreview}>24ºC</Text>
          </View>
        </ScrollView>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingTop: 40,
    paddingHorizontal: 35,
    alignItems: 'center'
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10
  },
  headerLeftText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600'
  },
  info: {
    paddingVertical: 100,
    alignItems: 'center',
    gap: 10
  },
  infoTextUser: {
    fontSize: 32,
    fontWeight: '300',
    color: '#fff'
  },
  infoTextClima: {
    fontSize: 100,
    fontWeight: '300',
    color: '#fff'
  },
  infoTextMaxMin: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff'
  },
  footer: {
    width: '100%',
    paddingLeft: 20,
    gap: 10,
    marginTop: 40
  },
  footerText: {
    paddingLeft: 15,
    fontSize: 24,
    fontWeight: '300',
    color: '#fff'
  },
  footerCard: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    width: 99,
    height: 129,
    backgroundColor: 'rgba(255, 255, 255, 0.23)',
    borderRadius: 8,
    marginRight: 14
  },
  footerCardTitle: {
    fontSize: 16,
    fontWeight: '600'
  },
  footerCardPreview: {
    fontSize: 24,
    fontWeight: '300'
  }
});
