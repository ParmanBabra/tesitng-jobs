module.exports.hostPath = (req) => {
    return req.protocol + '://' + req.get('host');
}