import { View, Text, FlatList, StyleSheet, StatusBar } from 'react-native'
import React, { useState, useEffect } from 'react'

export default function App2() {

    const [data, setData] = useState('')

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(Response => Response.json())
            .then(json => { setData(json), console.log(json) })
            .catch((err) => console.log(err))

    }, [])

    const Header = () => {
        return (
            <View>
                <Text style={{ fontSize: 20, textAlign: "center", paddingTop: 15, color: "red" }}>JSON Flat List In React Native</Text>
            </View>
        )

    }
    const ItemRender = ({ title, body, id }) => (
        <View style={styles.item} >
            <Text style={styles.container} >UserId : {id}</Text>
            <Text style={styles.title} >Title : {title}</Text>
            <Text >Body:  {body}</Text>

        </View>
    );

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            marginTop: StatusBar.currentHeight || 0,
        },
        item: {
            backgroundColor: '#f9c2ff',
            padding: 20,
            marginVertical: 8,
            marginHorizontal: 16,
        },
        title: {
            fontSize: 17,
        },
    });





    return (
        <View>
            <Header></Header>
            <FlatList
                data={data}
                renderItem={({ item }) => <ItemRender id={item.id} title={item.title} body={item.body} />}
            />


        </View>
    )
}