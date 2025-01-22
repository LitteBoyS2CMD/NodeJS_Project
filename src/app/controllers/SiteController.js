const Course = require('../models/Course');

class SiteController {
    index(req, res) {
        Course.find({})
        .then(courses => {
            // Nếu không có lỗi, trả về danh sách khóa học dưới dạng JSON
            res.json(courses);
        })
        .catch(err => {
            // Nếu có lỗi, xử lý lỗi và trả về một trạng thái lỗi hoặc thông báo
            console.error(err);
            res.status(500).json({ error: 'Internal Server Error' });
        });
    }
    search(req, res) {
        res.render('Search')
    }
}
module.exports = new SiteController