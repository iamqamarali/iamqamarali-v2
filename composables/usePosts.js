export default () => {
    const getPost = async post_id => await $fetch(`/api/admin/posts/`+ post_id)
    
    const createPost = async (data) => {
        return await $fetch('/api/admin/posts', {
            method: 'POST',
            body: data
        })
    }
    const updatePost = async (post_id , data) => {
        return await $fetch(`/api/admin/posts/${post_id}`, {
            method: 'PUT',
            body: data
        })
    }


    return {
        getPost,
        createPost,
        updatePost,
    }
}