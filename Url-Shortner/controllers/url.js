const shortid = require('shortid');
const URL = require("../models/url");
async function generateUrl(req, res) {
    const body = req.body;
    if(!body.url) return res.status(404).json({error: 'Url is required'});
    const ShortID = shortid();
    await URL.create({
      shortId: ShortID,
      reedirectURL: body.url,
      visitHistory: [],
    });

    // return res.json({ id: shortID });
    return res.json({ id: ShortID });

}

module.exports = {
    generateUrl,
};
