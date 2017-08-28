/*
 * Name: datetime.js
 * Desc: date and time formatter
 * Author: T.T
 * Last Update: 2017/5/12 09:13
 */

export default {
    dateFormat(value) {
        var da = new Date(value.replace("/Date(", "").replace(")/", "").split("+")[0]);
        return da.getFullYear() + "-" + ((da.getMonth() + 1) < 10 ? "0" + (da.getMonth() + 1) : (da.getMonth() + 1)) + "-" + (da.getDate() < 10 ? "0" + da.getDate() : da.getDate()) + " " + (da.getHours() < 10 ? "0" + da.getHours() : da.getHours()) + ":" + (da.getMinutes() < 10 ? "0" + da.getMinutes() : da.getMinutes()) + ":" + (da.getSeconds() < 10 ? "0" + da.getSeconds() : da.getSeconds());
    },
    getTimespan(time) {
        var tarTime = new Date(this.dateFormat(time));
        var now = new Date();
        var span = now.getTime() - tarTime.getTime();

        var days = Math.floor(span / (24 * 3600 * 1000));
        if (days > 0)
            return days + " days ago";
        var leave1 = span % (24 * 3600 * 1000); //计算天数后剩余的毫秒数
        var hours = Math.floor(leave1 / (3600 * 1000));
        if (hours > 0)
            return hours + " hours ago";
        var leave2 = leave1 % (3600 * 1000); //计算小时数后剩余的毫秒数
        var minutes = Math.floor(leave2 / (60 * 1000));
        if (minutes > 0)
            return minutes + " minutes ago";
        var leave3 = leave2 % (60 * 1000); //计算分钟数后剩余的毫秒数
        var seconds = Math.round(leave3 / 1000);
        if (seconds > 0)
            return seconds + " seconds ago";
    }
}