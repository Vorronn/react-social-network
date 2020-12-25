import profilePageReducer from "./profilePageReducer";
import messagePageReducer from "./messagePageReducer";
import sidebarReducer from "./sidebarReducer";

let store = {
    _state : {
        profilePage: {
            posts: [
                {id: 1, message: 'Hello world', like: 15},
                {id: 2, message: 'Hello Alex', like: 45},
                {id: 3, message: 'Hello Sergey', like: 5},
                {id: 4, message: 'Hello Mickl', like: 4},
                {id: 5, message: 'Hello Mom', like: 3}
            ],
            newTextPost: ''
        },
        messagesPage: {
            messages: [
                {id: 1, message: 'Hello', owns: false},
                {id: 2, message: 'Yo', owns: false},
                {id: 3, message: 'How are you?', owns: true},
                {id: 4, message: 'She lives in NewYork. Doesn not she?', owns: false},
                {id: 5, message: 'Yes', owns: true}
            ],
            newMessage: '',
            dialogs: [
                {id: 1, name: 'Alex', urlIcon: 'https://cdn.icon-icons.com/icons2/122/PNG/512/instagram_socialnetwork_20033.png'},
                {id: 2, name: 'Alesia', urlIcon: 'https://icon-icons.com/icons2/702/PNG/512/XXX_icon-icons.com_61683.png'},
                {id: 3, name: 'Olga', urlIcon: 'https://cdn.icon-icons.com/icons2/43/PNG/512/Click_film_Movies_7953.png'},
                {id: 4, name: 'Basia', urlIcon: 'https://cdn.icon-icons.com/icons2/12/PNG/256/videos_video_media_film_camera_hd_1727.png'},
                {id: 5, name: 'Anton', urlIcon: 'https://cdn.icon-icons.com/icons2/42/PNG/256/themoviesex_movies_movies_movies_movie_7662.png'}
            ]
        },
        sidebar: {
            contact: [
                {id: 1, sity: "Minsk", status: "online", name: 'Alex', urlIcon: 'https://cdn.icon-icons.com/icons2/122/PNG/512/instagram_socialnetwork_20033.png'},
                {id: 2, sity: "Vitebsk", status: "online", name: 'Alesia', urlIcon: 'https://icon-icons.com/icons2/702/PNG/512/XXX_icon-icons.com_61683.png'},
                {id: 3, sity: "London", status: "offline", name: 'Olga', urlIcon: 'https://cdn.icon-icons.com/icons2/43/PNG/512/Click_film_Movies_7953.png'},
                {id: 4, sity: "Vitebsk", status: "online", name: 'Basia', urlIcon: 'https://cdn.icon-icons.com/icons2/12/PNG/256/videos_video_media_film_camera_hd_1727.png'},
                {id: 5, sity: "Vitebsk", status: "offline", name: 'Anton', urlIcon: 'https://cdn.icon-icons.com/icons2/42/PNG/256/themoviesex_movies_movies_movies_movie_7662.png'}
            ]
        }
    },

    _callSubscriber () {
        console.log('Change state');
    },

    getState() {
        let state = this._state;
        return state;
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profilePageReducer(this._state.profilePage, action);
        this._state.messagesPage = messagePageReducer(this._state.messagesPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this.getState());
    }
}

export default store;