import React, { createContext, useState } from 'react';

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
});

const FavoritesContextProvider = (props) => {
    const [favorited, setFavorited] = useState([]);

    const context = {
        favorites: favorited,
        totalFavorites: favorited.length,
    };

    return <FavoritesContext.Provider value={context}>
        {props.children}
    </FavoritesContext.Provider>
}

export default FavoritesContextProvider;
