let initialState = {
    contact: [
        {id: 1, sity: "Minsk", status: "online", name: 'Alex', urlIcon: 'https://cdn.icon-icons.com/icons2/122/PNG/512/instagram_socialnetwork_20033.png'},
        {id: 2, sity: "Vitebsk", status: "online", name: 'Alesia', urlIcon: 'https://icon-icons.com/icons2/702/PNG/512/XXX_icon-icons.com_61683.png'},
        {id: 3, sity: "London", status: "offline", name: 'Olga', urlIcon: 'https://cdn.icon-icons.com/icons2/43/PNG/512/Click_film_Movies_7953.png'},
        {id: 4, sity: "Vitebsk", status: "online", name: 'Basia', urlIcon: 'https://cdn.icon-icons.com/icons2/12/PNG/256/videos_video_media_film_camera_hd_1727.png'},
        {id: 5, sity: "Vitebsk", status: "offline", name: 'Anton', urlIcon: 'https://cdn.icon-icons.com/icons2/42/PNG/256/themoviesex_movies_movies_movies_movie_7662.png'}
    ]
}

const sidebarReducer = (state = initialState, action) => {

    return state;
}

export default sidebarReducer;