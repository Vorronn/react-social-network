import profilePageReducer, {deletePost, savePostActionCreator} from "./profilePageReducer";

let state = {posts: [
    {id: 1, message: 'Hello world', like: 15},
    {id: 2, message: 'Hello Alex', like: 45},
    {id: 3, message: 'Hello Sergey', like: 5},
    {id: 4, message: 'Hello Mickl', like: 4},
    {id: 5, message: 'Hello Mom', like: 3}
]};

it('length of posts should be incremented', () => {
    let action = savePostActionCreator("new post");

    let newState = profilePageReducer(state, action);

    expect(newState.posts.length).toBe(6);
})

it('message "new post"', () => {
    let action = savePostActionCreator("new post");

    let newState = profilePageReducer(state, action);

    expect(newState.posts[5].message).toBe("new post");
})

it('length of posts should be decrement', () => {
    let action = deletePost(5);

    let newState = profilePageReducer(state, action);

    expect(newState.posts.length).toBe(4);
})

it('length of posts not should decrement', () => {
    let action = deletePost(1000);

    let newState = profilePageReducer(state, action);

    expect(newState.posts.length).toBe(5);
})