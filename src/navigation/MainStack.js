import React from 'react'
import { Platform } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Home';
import Category  from '../screens/Category';
import ProductDetail  from '../screens/ProductDetail';
import { colors } from '../constants/themes'

const Stack = createNativeStackNavigator();

const MainStack = () => {
    return (
        <Stack.Navigator 
            initialRouteName='Home'
            screenOptions={{
                headerStyle: {
                    backgroundColor: Platform.OS === 'android' ? colors.secondaryColor : ''
                },
                headerTintColor: Platform.OS === 'android' ? 'white' : 'colors.textColor',
                // headerTitleStyle: {
                //     fontFamily: 'OpenSans-Bold'
                // }
            }}
        >
            <Stack.Screen name='Home' component={ Home } 
                options={
                {headerShown: false}
                }
            />
            <Stack.Screen name='Category' 
                component={ Category }
                options={({route})=> ({title: route.params.title})}
            />
            <Stack.Screen name='ProductDetail' component={ ProductDetail }/>
        </Stack.Navigator>
    )
}

export default MainStack;