export const getPost = () => {
  return fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json());
}

export const getUser = () => {
  return fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json());
}

export const getComment = () => {
  return fetch("https://jsonplaceholder.typicode.com/comments")
        .then(res => res.json());
}