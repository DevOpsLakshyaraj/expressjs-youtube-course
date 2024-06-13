// Handlebars helpers
module.exports = {
    eq: function (val1, val2) {
        if (val1 === val2) {
            return true;
        } else {
            return false;
        }
    },

    count: function(arg) {
        console.log(typeof(arg))
        if (typeof(arg) === "object") {
            return Object.keys(arg).length;
        } else if (typeof(arg) !== "object" && typeof(arg) !== "string") {
            throw new Error('Argument must be of type object/string!!!')
        }
        else {
            return arg.length;
        }
    }
}