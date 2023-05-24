export default (str) => {
    // Chuyển hết sang chữ thường
    str = str.toLowerCase();     
    
    // xóa dấu
    str = str.replace(/[\u00C0-\u00C5]/ig,'a');
    str = str.replace(/[\u00C8-\u00CB]/ig,'e');
    str = str.replace(/[\u00CC-\u00CF]/ig,'i');
    str = str.replace(/[\u00D2-\u00D6]/ig,'o');
    str = str.replace(/[\u00D9-\u00DC]/ig,'u');
    str = str.replace(/[\u00D1]/ig,'n');    
    str = str.replace(/[^a-z0-9 ]+/gi,'');
    str = str.trim().replace(/ /g,'-');
    return str;
}