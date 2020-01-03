const insults = [
    "test",
    "test1",
    "test2",
    "test3",
]

const getInsult = () => {
    return insults[Math.floor(Math.random() * insults.length)];
}

module.exports = async (req, res) => {
    res.send(getInsult());
}