import { Image } from 'react-native';

export function renderPokebal (){
    return   <Image 
            source={require("../Assets/pokebal.png")}
            style={{ width: 75, height: 75, top: -15 }}
            />
    
}