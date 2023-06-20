import AsyncStorage from '@react-native-async-storage/async-storage';




// Buscar favoritos
// Salvaar favorito
// remover favoritos


export async function getFavorites(key){
    const favorites = await AsyncStorage.getItem(key)
    return JSON.parse(favorites) || [];

}

export async function saveFavorite(key, newItem){
    let myFavorites = await getFavorites(key);

    let hasItem = myFavorites.some( item => item.id === newItem.id)

    if (hasItem){
        console.log('esse item ja esta favoritado')
        return;
    }

    myFavorites.push(newItem)


    await AsyncStorage.setItem(key, JSON.stringify(myFavorites))
    console.log("salvo com sucesso")

}


export async function removeFavorite(id){
    let receips = await getFavorites("@appreceitas")

    let myFavorites = receips.filter( item => {
        return(item.id !== id)
    })

    await AsyncStorage.setItem("@appreceitas", JSON.stringify(myFavorites))
    console.log("Item deletado")
    return myFavorites;

}

export async function isFavorite(receipe){
    let myReceipes = await getFavorites("@appreceitas")
    const favorite = myReceipes.find(item => item.id === receipe.id)

    if (favorite){
        return true;
    }

    return false;
}