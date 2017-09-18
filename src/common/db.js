/*
 * Name: db.js
 * Desc: db api
 * Author: T.T
 * Last Update: 2017/6/22 09:13
 */
import Config from '@/common/config'

export default {
    /**
     * 获取课程的大主题（如软件开发，硬件开发等）
     * @param {*} obj 为this
     */
    getArticle(obj, options) {
        return new Promise(
            function(resolve) {
                let dbUrl = Config.dbUrl + '/blog/getArticle/?pagenum=' + options.pagenum + '&pagesize=' + options.pagesize;
                if (options.category) {
                    dbUrl += "&category=" + options.category
                }
                if (options.keyword) {
                    dbUrl += "&keyword=" + options.keyword
                }
                obj.$http({
                    url: dbUrl,
                    method: 'GET'
                }).then(res => {
                    resolve(res.data);
                });
            }
        );
    },
    getTop10Article(obj, options) {
        return new Promise(
            function(resolve) {
                let dbUrl = Config.dbUrl + '/blog/getTop10Article';
                obj.$http({
                    url: dbUrl,
                    method: 'GET'
                }).then(res => {
                    resolve(res.data);
                });
            }
        );
    },
    getHotKeywords(obj, options) {
        return new Promise(
            function(resolve) {
                let dbUrl = Config.dbUrl + '/blog/getHotKeywords';
                obj.$http({
                    url: dbUrl,
                    method: 'GET'
                }).then(res => {
                    resolve(res.data);
                });
            }
        );
    },
    getArticleDetails(obj, options) {
        return new Promise(
            function(resolve) {
                let dbUrl = Config.dbUrl + '/blog/getArticleDetails/?id=' + options.id;
                obj.$http({
                    url: dbUrl,
                    method: 'GET'
                }).then(res => {
                    resolve(res.data);
                });
            }
        );
    },
    newArticle(obj, data) {
        return new Promise(
            function(resolve) {
                var dbUrl = Config.dbUrl + '/blog/newArticle';
                obj.$http.post(dbUrl, { data: data }, {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    emulateJSON: true
                }).then(res => {
                    resolve(res.data);
                });

            }
        );
    },
    setArticle(obj, data) {
        return new Promise(
            function(resolve) {
                var dbUrl = Config.dbUrl + '/blog/setArticle';
                obj.$http.post(dbUrl, { data: data }, {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    emulateJSON: true
                }).then(res => {
                    resolve(res.data);
                });

            }
        );
    },
    newComment(obj, data) {
        return new Promise(
            function(resolve) {
                var dbUrl = Config.dbUrl + '/blog/newComment';
                obj.$http.post(dbUrl, { data: data }, {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    emulateJSON: true
                }).then(res => {
                    resolve(res.data);
                });

            }
        );
    },

    /**
     * ##BOOK
     */
    searchBook(obj, options) {
        return new Promise(
            function(resolve) {
                let dbUrl = Config.dbUrl + '/book/searchBook?pagesize=' + options.pagesize +
                    '&pagenum=' + options.pagenum +
                    '&search=' + options.search;
                obj.$http({
                    url: dbUrl,
                    method: 'GET'
                }).then(res => {
                    resolve(res.data);
                });
            }
        );
    },
    searchOnlineBook(obj, options) {
        return new Promise(
            function(resolve) {
                let dbUrl = Config.dbUrl + '/book/searchOnlineBook?search=' + options.search;
                obj.$http({
                    url: dbUrl,
                    method: 'GET'
                }).then(res => {
                    resolve(res.data);
                });
            }
        );
    },
    newBook(obj, data) {
        return new Promise(
            function(resolve) {
                var dbUrl = Config.dbUrl + '/book/newBook';
                obj.$http.post(dbUrl, { data: data }, {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    emulateJSON: true
                }).then(res => {
                    resolve(res.data);
                });

            }
        );
    },
    /**
     * ##WORD ORIGINS
     */
    searchWordOrigin(obj, options) {
        return new Promise(
            function(resolve) {
                let dbUrl = Config.dbUrl + '/word_origin/search?pagesize=' + options.pagesize +
                    '&pagenum=' + options.pagenum +
                    '&search=' + options.search;
                obj.$http({
                    url: dbUrl,
                    method: 'GET'
                }).then(res => {
                    resolve(res.data);
                });
            }
        );
    },
}