import React, { createContext, useState } from 'react';

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (favoriteMeetup) => {},
    removeFavorite: (meetupId) => {},
    itemIsFavorite: (meetupId) => {},
});

export const FavoritesContextProvider = (props) => {
    const [favorited, setFavorited] = useState([]);

    function addFavoriteHandler(favoriteMeetup) {
        setFavorited((prevFavorited) => {
            return prevFavorited.concat(favoriteMeetup);
        });
    };

    function removeFavoriteHandler(meetupId) {
        setFavorited((prevFavorited) => {
            return prevFavorited.filter(meetup => meetup.id !== meetupId);
        })
    };

    function itemIsFavoriteHandler(meetupId) {
        return favorited.some(meetup => meetup.id === meetupId);
    };

    const context = {
        favorites: favorited,
        totalFavorites: favorited.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        itemIsFavorite: itemIsFavoriteHandler,
    };

    return <FavoritesContext.Provider value={context}>
        {props.children}
    </FavoritesContext.Provider>
}

export default FavoritesContext;