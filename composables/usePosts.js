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
    
    const publishPost = async (post_id) => {
        return await $fetch('/api/admin/posts/publish', {
            method: 'POST',
            body: { 
                id: post_id,
            }
        })
    }

    return {
        getPost,
        createPost,
        updatePost,
        publishPost,        
    }
}