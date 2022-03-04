
import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import React, { useState, useEffect } from 'react'


export default function App2() {

    const [data, setData] = useState('')

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/photos")
            .then(response => response.json())
            .then(json => {
                setData(json)

            })

    }, [])

    // const ItemRender = ({ id ,url }) => {
    //     return (
    //         <View>
    //             <Text>UserId : {title}</Text>
    //             <Image source={{url}}></Image>
    //         </View>

    //     )
    // }


    return (
        <View>
            <Text style={styles.text} >jsonplaceholder Data</Text>
            <FlatList

                data={data}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Image style={{height:200}  } source={{
                        uri: item.url
                    }}
                    >

                    </Image>
                )}
            />


        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        color: "red",
        paddingTop: 20,
        textAlign: "center"


    }
})

