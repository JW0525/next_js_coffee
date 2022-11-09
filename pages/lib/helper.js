export function getAllPost(id) {
  const postData = [
    { id: 1, title: "New Post", description: "Post data From Server" },
    { id: 2, title: "New Post", description: "Post data From Server" }
  ];

  if (id) {
    return postData.filter(post => post.id == id)
  }
  
  return postData;
}