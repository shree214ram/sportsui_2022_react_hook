
const getDate = (timpstamp) => {
    // unix timestamp
    var timestamp = timpstamp;
    // convert unix timestamp to milliseconds
    var timestamp_ms = timestamp * 1000;
    // initializing the Date object
    var d_obj = new Date(timestamp_ms);
    // extracting date from the date object as 2 digit
    var date = ("0" + d_obj.getDate()).slice(-2);
    // extracting hours from the date object as 2 digit
    var hrs = ("0" + d_obj.getHours()).slice(-2);
    // extracting minutes from the date object as 2 digit
    var mins = ("0" + d_obj.getMinutes()).slice(-2);
    // extracting the seconds from the date object as 2 digit
    var sec = ("0" + d_obj.getSeconds()).slice(-2);
    // extracting year from the date object as 4 digit
    var yr = d_obj.getFullYear();
    // extracting month from the date object as 2 digit
    var mth = ("0" + (d_obj.getMonth() + 1)).slice(-2);
    //printing the values of the date and time in different formats on the console
    const result = {
        date: date + "/" + mth + "/" + yr,
        fullDate: yr + "/" + mth + "/" + date + " " + hrs + ":" + mins + ":" + sec,
        time: hrs + ":" + mins
    }
    return result
}
export default getDate;