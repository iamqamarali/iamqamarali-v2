export default {
    diffForHumans(datetime){
        // if date is not very old return x minutes ago
        const now = new Date();
        const diff = now - new Date(datetime);
        if(diff < 60000)
            return 'Just now';
        if(diff < 3600000)
            return `${Math.floor(diff/60000)} minutes ago`;
        if(diff < 86400000)
            return `${Math.floor(diff/3600000)} hours ago`;
        if(diff < 604800000)
            return `${Math.floor(diff/86400000)} days ago`;
        if(diff < 2592000000)
            return `${Math.floor(diff/604800000)} weeks ago`;
        if(diff < 31536000000)
            return `${Math.floor(diff/2592000000)} months ago`;
        return `${Math.floor(diff/31536000000)} years ago`;
    },
    
    formatDate(datetime){            
        const date = new Date(datetime);
        const month = date.toLocaleString('default', { month: 'long' });
        const year = date.getFullYear();
        const day = date.getDate();
        const hour = date.getHours();
        const minute = date.getMinutes();
        const ampm = hour >= 12 ? ' PM' : ' AM';

        return `${month} ${day}, ${year} ${hour}:${minute}${ampm}`;
    }
} 