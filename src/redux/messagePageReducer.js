const NEW_MESSAGE = "NEW_MESSAGE";

let initialState = {
    messages: [
        {id: 1, message: 'Hello', owns: false},
        {id: 2, message: 'Yo', owns: false},
        {id: 3, message: 'How are you?', owns: true},
        {id: 4, message: 'She lives in NewYork. Doesn not she?', owns: false},
        {id: 5, message: 'Yes', owns: true}
    ],
    dialogs: [
        {id: 1, name: 'Alex', urlIcon: 'https://cdn.icon-icons.com/icons2/122/PNG/512/instagram_socialnetwork_20033.png'},
        {id: 2, name: 'Alesia', urlIcon: 'https://icon-icons.com/icons2/702/PNG/512/XXX_icon-icons.com_61683.png'},
        {id: 3, name: 'Olga', urlIcon: 'https://cdn.icon-icons.com/icons2/43/PNG/512/Click_film_Movies_7953.png'},
        {id: 4, name: 'Basia', urlIcon: 'https://cdn.icon-icons.com/icons2/12/PNG/256/videos_video_media_film_camera_hd_1727.png'},
        {id: 5, name: 'Anton', urlIcon: 'https://cdn.icon-icons.com/icons2/42/PNG/256/themoviesex_movies_movies_movies_movie_7662.png'}
    ]
};

const messagePageReducer = (state = initialState, action) => {

    switch(action.type){
        case NEW_MESSAGE:
            let newMessage = {
                id: 6,
                message: action.newMessage,
                owns: true
            }
            return {
                ...state,
                messages: [...state.messages, newMessage]
            };
        default:
            return state;
    }
}

export const addNewMessageActionCreator = (newMessage) => {
    return(
        {type: NEW_MESSAGE, newMessage}
    )
}

export default messagePageReducer;