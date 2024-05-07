import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Product({ data, addToCart }) {
 return (
   <View style={styles.container}>
    <View>
      <Text style={styles.title}>{data.name}</Text>
      <Text>R$ {data.price}</Text>
    </View>
    
    <TouchableOpacity style={styles.buttonAdd}  onPress={addToCart} >
      <Text style={styles.buttonText}>+</Text>
    </TouchableOpacity>
   </View>
  );
}

const styles = StyleSheet.create({
    container:{
        borderWidth: 1,
        borderColor: '#DFDFDF',
        borderRadius: 4,
        marginBottom: 14,
        padding: 8,
        paddingBottom: 12,
        paddingTop: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    title:{
        fontWeight: 'bold',
    },
    buttonAdd:{
        paddingStart: 12,
        paddingEnd: 12,
        backgroundColor: '#168fff',
        paddingTop: 6,
        paddingBottom: 6,
        borderRadius: 5
    }
})