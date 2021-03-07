const getDateTimeFormatted = (d)=>{
    let date = [
        d.getFullYear(),
        ('0'+(d.getMonth()+1)).slice(-2),
        ('0' + d.getDate()).slice(-2)
    ].join('-');
    
    let time = [
        ('0' + d.getHours()).slice(-2),
        ('0' + d.getMinutes()).slice(-2),
        ('0' + d.getSeconds()).slice(-2)
    ].join(':');

    return [date,time].join(' ');
}

module.exports = getDateTimeFormatted;