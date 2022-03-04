// // import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native'
// // import React from 'react'
// // import { useEffect, useState } from 'react'





// // export default function App() {

// //   const [data, setdata] = useState([])

// //   url = "https://jsonplaceholder.typicode.com/posts"

// //   useEffect(() => {

// //     fetch(url)
// //       .then(response => response.json())
// //       .then(json => {
// //         setdata(json)
// //         console.log(data)
// //       })
// //   }, [])

// //   renderItem = () => {
// //     return (
// //       <View>
// //         <Text >{data.title}</Text>
// //       </View>
// //     )

// //   }
// //   return (
// //     <View >
// //       <FlatList>
// //         data={data}
// //         renderItem={renderItem}
// //         keyExtractor={item => item.id}


// //       </FlatList>
// //     </View>
// //   )
// // }

// import React from 'react';
// import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';

// // const DATA = [
// //   {
// //     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
// //     title: 'First Item',
// //   },
// //   {
// //     id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
// //     title: 'Second Item',
// //   },
// //   {
// //     id: '58694a0f-3da1-471f-bd96-145571e29d72',
// //     title: 'Third Item',
// //   },
// // ];

// const [data, setdata] = useState([])

// url = "https://jsonplaceholder.typicode.com/posts"



// useEffect(() => {

//   fetch(url)
//     .then(response => response.json())
//     .then(json => {
//       setdata(json)
//       console.log(data)
//     })
// }, [])

// const Item = ({ title }) => (
//   <View style={styles.item}>
//     <Text style={styles.title}>{title}</Text>
//   </View>
// );

// const App = () => {
//   const renderItem = ({ item }) => (
//     <Item title={item.title} />
//   );

//   return (
//     <SafeAreaView style={styles.container}>
//       <FlatList
//         data={data}
//         renderItem={renderItem}
//         keyExtractor={item => item.id}
//       />
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: StatusBar.currentHeight || 0,
//   },
//   item: {
//     backgroundColor: '#f9c2ff',
//     padding: 20,
//     marginVertical: 8,
//     marginHorizontal: 16,
//   },
//   title: {
//     fontSize: 32,
//   },
// });

// export default App;



import React, { useEffect, useState } from 'react';
 
import { ActivityIndicator, View, StyleSheet, SafeAreaView, FlatList, Text } from 'react-native';
 
export default function App() {
 
  const [JSON_DATA, setJSON_DATA] = useState('');
 
  const [showIndicator, setShowIndicator] = useState(true);
 
  useEffect(() =>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(Response => Response.json())
    .then(json => {setJSON_DATA(json),console.log(json)})
    .catch((err)=>console.log(err))

},[])
 
  const ItemRender = ({ title,body,id }) => (
    <View >
      <Text > {id}</Text>
      <Text > {body}</Text>
      <Text > {title}</Text>

    </View>
  );
 
  const header = () => {
    return (
      <View style={{
        height: 50,
        width: "100%",
        backgroundColor: "#00B8D4",
        justifyContent: 'center',
        alignItems: 'center'
      }}>
 
        <Text style={{ fontSize: 24, color: 'white' }}> JSON FlatList in React Native </Text>
 
      </View>
    );
  }
 
  const divider = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: 'black',
        }}
      />
    );
  }
 
  return (
    <SafeAreaView >
 
      <ActivityIndicator
        size="large"
        color="red"
        animating={showIndicator}
         />
 
      <FlatList
        data={JSON_DATA}
        renderItem={({ item }) => <ItemRender body={item.id+ item.title+ item.body} />}
        ItemSeparatorComponent={divider}
        keyExtractor={item => item.id}
        ListHeaderComponent={header}
      />
 
    </SafeAreaView>
  );
}
 
