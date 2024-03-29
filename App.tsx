import { FlatList, Text, View } from "react-native";
import UserData from "./componens/userData";

const App = () =>{
  const users = [
    {
      id:1,
      name:"Dinesh Yadav",
      email:"dinesh@gmail.com"
    },
    {
      id:2,
      name:"Dinesh kumar",
      email:"dinesh@gmail.com"
    },
    {
      id:3,
      name:"dineshyaduvanshee",
      email:"dinesh@gmail.com"
    },
    {
      id:4,
      name:"mahesh",
      email:"mahesh@gmail.com"
    },
    {
      id:5,
      name:"Ritesh",
      email:"ritesh@gmail.com"
    },
    {
      id:6,
      name:"Nilesh",
      email:"nilesh@gmail.com"
    },
    {
      id:7,
      name:"Titu",
      email:"titu@gmail.com"
    },
    {
      id:8,
      name:"shailvi",
      email:"shailvi@gmail.com"
    },
    {
      id:9,
      name:"Avani",
      email:"avani@gmail.com"
    },{
      id:10,
      name:"pari",
      email:"pari@gmail.com"
    } 
  ];
  
  return(
    <View>
      <Text style={{fontSize:25,textAlign:'center'}}>Component in Loop with FlatList</Text>
      <FlatList 
      data ={users}
      renderItem={({item})=><UserData item={item} />}
      />
    </View>
  );
}


export default App;
