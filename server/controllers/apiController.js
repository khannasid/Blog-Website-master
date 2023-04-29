import Post from '../model/postModel.js';


export const addBlogDetails = async (req, res) => {
    const { author, email, title, content } = req.body;
    try {
        if (author && email && title && content) {
            const userDetail = new Post(req.body);
            await userDetail.save();
            return res.status(202).json({ user: res.body, msg: "Data is Save!" });
        } else {
            return res.status(500).json({ msg: 'Data is Not saved!' });
        }

    } catch (err) {
        return res.status(503).json({ msg: 'Data is Not saved!' });
    }
}