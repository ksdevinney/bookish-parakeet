import React, { useContext } from 'react';
import FavoritesContext from '../store/favorites-context';
import MeetupList from '../components/meetups/MeetupList';

const Favorites = () => {
    const favoritesCx = useContext(FavoritesContext);

    let content;

    if (favoritesCx.totalFavorites === 0) {
        content = <p>No favorites to display.</p>
    } else {
        content = <MeetupList meetups={favoritesCx.favorites} />
    }

    return (
        <section>
            <h1>My Favorites</h1>
            {content}
        </section>
    )
}

export default Favorites
