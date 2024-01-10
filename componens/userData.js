import { StyleSheet, Text, View } from "react-native";
export default UserData = (props)=>{
    const item = props.item;
    return(
      <View style={styles.Box}>
      <Text style={styles.item}>{item.id}</Text>
      <Text style={styles.item}>{item.name}</Text>
      <Text style={styles.item}>{item.email}</Text>
    </View>
    );
  }
  const styles = StyleSheet.create({
    item:{
      fontSize:24,
      color:'orange',
      flex:1,
      margin:2,
      backgroundColor:'purple',
      textAlign: 'center',
    },
    Box:{
      flexDirection:'row',
      borderWidth:2,
      borderColor:'orange',
      marginBottom:10,
    }
  });