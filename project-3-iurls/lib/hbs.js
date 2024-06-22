const moment = require('moment');

module.exports = {
    truncate: function(string) {
        if (string.length > 30) {
            return string.slice(0, 30) + '...';
        } else {
            return string;
        }
    },

    formatDate: function(timestamp) {
        return moment(timestamp).fromNow()
    }
}