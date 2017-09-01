/*
 * Name: db.js
 * Desc: db api
 * Author: T.T
 * Last Update: 2017/6/22 09:13
 */
import Config from '@/common/config'

export default {
    /*------------------------------------------------------------------------------------------------------*/
    /*--- ##FILE -----------------------------------------------------------------------------------------*/
    /*------------------------------------------------------------------------------------------------------*/

    /**
     * 上传文件到 /uploaded
     * 上传时触发事件 "uploadProgress" 0-100 上传完成度
     * @param {*} obj 为this
     * @param {*} blob 为文件
     */
    // fileUpload(obj, blob) {
    //     return new Promise(
    //         function(resolve) {
    //             var dbUrl = Config.dbBaseUrl + '/fileUpload';

    //             var formData = new FormData();
    //             formData.append("image", blob, "head.jpg");
    //             obj.$http.post(dbUrl, formData, {
    //                 progress(event) {
    //                     //上传时触发事件 uploadProgress
    //                     //0-100
    //                     obj.$emit('uploadProgress', parseFloat(event.loaded / event.total * 100), true)
    //                 }
    //             }).then(res => {
    //                 resolve(res.data);
    //             });
    //         }
    //     );
    // },

    // deleteFile(obj, data) {
    //     return new Promise(
    //         function(resolve) {
    //             var dbUrl = Config.dbBaseUrl + '/deleteFile';
    //             obj.$http.post(dbUrl, { data: data }, {
    //                 headers: {
    //                     'Content-Type': 'application/x-www-form-urlencoded'
    //                 },
    //                 emulateJSON: true
    //             }).then(res => {
    //                 resolve(res.data);
    //             });
    //         }
    //     );
    // },

    /*------------------------------------------------------------------------------------------------------*/
    /*--- ##HOME -----------------------------------------------------------------------------------------*/
    /*------------------------------------------------------------------------------------------------------*/

    /**
     * 获取课程的大主题（如软件开发，硬件开发等）
     * @param {*} obj 为this
     */
    getArticle(obj, options) {
        return new Promise(
            function(resolve) {
                let dbUrl = Config.dbUrl + '/getArticle/?pagenum=' + options.pagenum + '&pagesize=' + options.pagesize;
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
                let dbUrl = Config.dbUrl + '/getTop10Article';
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
                let dbUrl = Config.dbUrl + '/getHotKeywords';
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
                let dbUrl = Config.dbUrl + '/getArticleDetails/?id=' + options.id;
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
                var dbUrl = Config.dbUrl + '/newArticle';
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
                var dbUrl = Config.dbUrl + '/setArticle';
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
                var dbUrl = Config.dbUrl + '/newComment';
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
    // getHomeList(obj) {
    //     return new Promise(
    //         function(resolve) {
    //             var dbUrl = Config.dbBaseUrl + '/getHomeList';
    //             obj.$http({
    //                 url: dbUrl,
    //                 method: 'GET'
    //             }).then(res => {
    //                 resolve(res.data);
    //             });
    //         }
    //     );
    // },
    // getNews(obj, options) {
    //     return new Promise(
    //         function(resolve) {
    //             var dbUrl = Config.dbBaseUrl + '/getNews?pagesize=' + options.pagesize + '&pagenum=' + options.pagenum;
    //             obj.$http({
    //                 url: dbUrl,
    //                 method: 'GET'
    //             }).then(res => {
    //                 resolve(res.data);
    //             });
    //         }
    //     );
    // },
    // getNewsEvent(obj, options) {
    //     return new Promise(
    //         function(resolve) {
    //             var dbUrl = Config.dbBaseUrl + '/getNewsEvent?pagesize=' + options.pagesize + '&pagenum=' + options.pagenum;
    //             obj.$http({
    //                 url: dbUrl,
    //                 method: 'GET'
    //             }).then(res => {
    //                 resolve(res.data);
    //             });
    //         }
    //     );
    // },

    // /*------------------------------------------------------------------------------------------------------*/
    // /*--- ##COURSE -----------------------------------------------------------------------------------------*/
    // /*------------------------------------------------------------------------------------------------------*/

    // /**
    //  * 获取课程的大主题（如软件开发，硬件开发等）
    //  * @param {*} obj 为this
    //  */
    // getCourseSubject(obj) {
    //     return new Promise(
    //         function(resolve) {
    //             var dbUrl = Config.dbBaseUrl + '/getCourseSubject';
    //             obj.$http({
    //                 url: dbUrl,
    //                 method: 'GET'
    //             }).then(res => {
    //                 resolve(res.data);
    //             });
    //         }
    //     );
    // },

    // /**
    //  * 获取课程的类型（如前端开发，后端开发，数据库等）
    //  * @param {*} obj 为this
    //  * @param {*} options { subject_id: 主题ID }
    //  */
    // getCourseType(obj, options) {
    //     return new Promise(
    //         function(resolve) {
    //             var dbUrl = Config.dbBaseUrl + '/getCourseType';
    //             obj.$http({
    //                 url: dbUrl,
    //                 method: 'GET'
    //             }).then(res => {
    //                 resolve(res.data);
    //             });
    //         }
    //     );
    // },

    // /**
    //  * 获取课程列表（如C, C++, JAVA等）
    //  * @param {*} obj 为this
    //  * @param {*} options { type_id: 类型ID }
    //  */
    // getCourse(obj, options) {
    //     return new Promise(
    //         function(resolve) {
    //             var dbUrl = Config.dbBaseUrl + '/getCourse';
    //             if (options.hasOwnProperty('type_id')) {
    //                 dbUrl += '?type_id=' + options.type_id;
    //             }
    //             if (options.hasOwnProperty('keyword')) {
    //                 dbUrl += '?keyword=' + options.keyword;
    //             }
    //             obj.$http({
    //                 url: dbUrl,
    //                 method: 'GET'
    //             }).then(res => {
    //                 resolve(res.data);
    //             });
    //         }
    //     );
    // },

    // /**
    //  * 获取课程详情
    //  * @param {*} obj 为this
    //  * @param {*} options { course_id: 课程ID }
    //  */
    // getCourseDetails(obj, options) {
    //     return new Promise(
    //         function(resolve) {
    //             var dbUrl = Config.dbBaseUrl + '/getCourseDetails?course_id=' + options.course_id;
    //             obj.$http({
    //                 url: dbUrl,
    //                 method: 'GET'
    //             }).then(res => {
    //                 resolve(res.data);
    //             });
    //         }
    //     );
    // },

    // /**
    //  * 获取课程内容名字列表
    //  * @param {*} obj 为this
    //  * @param {*} options { course_id: 课程ID }
    //  */
    // getCourseLectureList(obj, options) {
    //     return new Promise(
    //         function(resolve) {
    //             var dbUrl = Config.dbBaseUrl + '/getCourseLectureList?course_id=' + options.course_id;
    //             obj.$http({
    //                 url: dbUrl,
    //                 method: 'GET'
    //             }).then(res => {
    //                 resolve(res.data);
    //             });
    //         }
    //     );
    // },

    // /**
    //  * 
    //  * @param {*} obj 为this
    //  * @param {*} options { lecture_id: 课程内容ID }
    //  */
    // getCourseLecture(obj, options) {
    //     return new Promise(
    //         function(resolve) {
    //             var dbUrl = Config.dbBaseUrl + '/getCourseLecture?lecture_id=' + options.lecture_id;
    //             obj.$http({
    //                 url: dbUrl,
    //                 method: 'GET'
    //             }).then(res => {
    //                 resolve(res.data);
    //             });
    //         }
    //     );
    // },

    // /**
    //  * 获取课程章节
    //  * @param {*} obj 为this
    //  * @param {*} options { course_id: 课程ID }
    //  */
    // getCourseChapter(obj, options) {
    //     return new Promise(
    //         function(resolve) {
    //             var dbUrl = Config.dbBaseUrl + '/getCourseChapter?course_id=' + options.course_id;
    //             obj.$http({
    //                 url: dbUrl,
    //                 method: 'GET'
    //             }).then(res => {
    //                 resolve(res.data);
    //             });
    //         }
    //     );
    // },

    // /*------------------------------------------------------------------------------------------------------*/
    // /*--- ##Entrance Exam ----------------------------------------------------------------------------------*/
    // /*------------------------------------------------------------------------------------------------------*/

    // /**
    //  * 获取随机的入学考试题目
    //  * @param {*} obj 为this
    //  * @param {*} options { count: 题目个数 }
    //  */
    // getEntranceExam(obj, options) {
    //     return new Promise(
    //         function(resolve) {
    //             var dbUrl = Config.dbBaseUrl + '/getEntranceExam?count=' + options.count;
    //             obj.$http({
    //                 url: dbUrl,
    //                 method: 'GET'
    //             }).then(res => {
    //                 resolve(res.data);
    //             });
    //         }
    //     );
    // },

    // /**
    //  * 将用户的入学考试提交至数据库
    //  * @param {*} obj 为this
    //  * @param {*} data { exam_id: exam_id, user_id: user_id, details: details }
    //  */
    // newStudentEntranceExam(obj, data) {
    //     return new Promise(
    //         function(resolve) {
    //             var dbUrl = Config.dbBaseUrl + '/newStudentEntranceExam';
    //             obj.$http.post(dbUrl, { data: data }, {
    //                 headers: {
    //                     'Content-Type': 'application/x-www-form-urlencoded'
    //                 },
    //                 emulateJSON: true
    //             }).then(res => {
    //                 resolve(res.data);
    //             });

    //         }
    //     );
    // },

    // /**
    //  * 判断用户是否已完成入学考试
    //  * @param {*} obj 为this
    //  * @param {*} options { sid: student id }
    //  */
    // isStudentEntranceExamDone(obj, options) {
    //     return new Promise(
    //         function(resolve) {
    //             var dbUrl = Config.dbBaseUrl + '/isStudentEntranceExamDone?sid=' + options.sid;
    //             obj.$http({
    //                 url: dbUrl,
    //                 method: 'GET'
    //             }).then(res => {
    //                 resolve(res.data);
    //             });
    //         }
    //     );
    // },

    // /*------------------------------------------------------------------------------------------------------*/
    // /*--- ##Document ---------------------------------------------------------------------------------------*/
    // /*------------------------------------------------------------------------------------------------------*/

    // /**
    //  * 获取Documents Total
    //  * @param {*} obj 为this
    //  * @param {*} options document.id
    //  */
    // getDocumentCount(obj, options) {
    //     return new Promise(
    //         function(resolve) {
    //             var dbUrl = Config.dbBaseUrl + '/getDocumentCount?' + options.id;
    //             obj.$http({
    //                 url: dbUrl,
    //                 method: 'GET'
    //             }).then(res => {
    //                 resolve(res.data);
    //             });
    //         }
    //     );
    // },

    // /**
    //  * 获取Documents
    //  * @param {*} obj 为this
    //  * @param {*} options {typeNum: 文档类型 , type: 关于all、hot、is_star、week、month , tag: 关键词 ,search: 搜索内容 }
    //  */
    // getDocument(obj, options) {
    //     return new Promise(
    //         function(resolve) {
    //             var dbUrl = Config.dbBaseUrl + '/getDocument?pagesize=' + options.pagesize + '&pagenum=' + options.pagenum;
    //             if (options.id) { //for student_id or team_id
    //                 dbUrl += '&' + options.id;
    //             }
    //             if (options.tag) {
    //                 dbUrl += '&tag=' + options.tag;
    //             }
    //             if (options.type) {
    //                 dbUrl += "&type=" + options.type;
    //             }
    //             if (options.sort) {
    //                 dbUrl += '&sort=' + options.sort;
    //             }

    //             obj.$http({
    //                 url: dbUrl,
    //                 method: 'GET'
    //             }).then(res => {
    //                 resolve(res.data);
    //             });
    //         }
    //     );
    // },
    // /**
    //  * Search Documents
    //  * @param {*} obj 为this
    //  * @param {*} options {typeNum: 文档类型 , type: 关于all、hot、is_star、week、month , tag: 关键词 ,search: 搜索内容 }
    //  */
    // searchDocument(obj, options) {
    //     return new Promise(
    //         function(resolve) {
    //             var dbUrl = Config.dbBaseUrl + '/searchDocument?search=' + options.search + '&pagesize=' + options.pagesize + '&pagenum=' + options.pagenum;
    //             if (options.id) { //for student_id or team_id
    //                 dbUrl += '&' + options.id;
    //             }
    //             if (options.tag) {
    //                 dbUrl += '&tag=' + options.tag;
    //             }
    //             if (options.type) {
    //                 dbUrl += "&type=" + options.type;
    //             }
    //             if (options.sort) {
    //                 dbUrl += '&sort=' + options.sort;
    //             }

    //             obj.$http({
    //                 url: dbUrl,
    //                 method: 'GET'
    //             }).then(res => {
    //                 resolve(res.data);
    //             });
    //         }
    //     );
    // },

    // /**
    //  * 获取DocumentType
    //  * @param {*} obj 为this
    //  */
    // getDocumentType(obj) {
    //     return new Promise(
    //         function(resolve) {
    //             var dbUrl = Config.dbBaseUrl + '/getDocumentType';
    //             obj.$http({
    //                 url: dbUrl,
    //                 method: 'GET'
    //             }).then(res => {
    //                 resolve(res.data);
    //             });
    //         }
    //     );
    // },

    // /**
    //  * 获取Documents详情
    //  * @param {*} obj 为this
    //  * @param {*} options docuemnt.id
    //  */
    // getDocumentDetails(obj, options) {
    //     return new Promise(
    //         function(resolve) {
    //             var dbUrl = Config.dbBaseUrl + '/getDocumentDetails?id=' + options.id;
    //             obj.$http({
    //                 url: dbUrl,
    //                 method: 'GET'
    //             }).then(res => {
    //                 resolve(res.data);
    //             });
    //         }
    //     );
    // },

    // /**
    //  * 获取Documents详情
    //  * @param {*} obj 为this
    //  * @param {*} options team.id
    //  */
    // setDocument(obj, data) {
    //     return new Promise(
    //         function(resolve) {
    //             var dbUrl = Config.dbBaseUrl + '/setDocument';
    //             obj.$http.post(dbUrl, { data: data }, {
    //                 headers: {
    //                     'Content-Type': 'application/x-www-form-urlencoded'
    //                 },
    //                 emulateJSON: true
    //             }).then(res => {
    //                 resolve(res.data);
    //             });

    //         }
    //     );
    // },

    // /**
    //  * New Documents
    //  * @param {*} obj 为this
    //  */
    // newDocument(obj, data) {
    //     return new Promise(
    //         function(resolve) {
    //             var dbUrl = Config.dbBaseUrl + '/newDocument';
    //             obj.$http.post(dbUrl, { data: data }, {
    //                 headers: {
    //                     'Content-Type': 'application/x-www-form-urlencoded'
    //                 },
    //                 emulateJSON: true
    //             }).then(res => {
    //                 resolve(res.data);
    //             });

    //         }
    //     );
    // },

    // /*------------------------------------------------------------------------------------------------------*/
    // /*--- ##Document FAV AND LIKE --------------------------------------------------------------------------*/
    // /*------------------------------------------------------------------------------------------------------*/

    // /**
    //  * 获取是否对此文章点赞
    //  * @param {*} obj 
    //  * @param {*} options 
    //  */
    // isStudentLikeDocument(obj, options) {
    //     return new Promise(
    //         function(resolve) {
    //             var dbUrl = Config.dbBaseUrl + '/isStudentLikeDocument?student_id=' + options.student_id + '&document_id=' + options.document_id;
    //             obj.$http({
    //                 url: dbUrl,
    //                 method: 'GET'
    //             }).then(res => {
    //                 resolve(res.data);
    //             });
    //         }
    //     );
    // },

    // /**
    //  * 获取是否对此文章收藏
    //  * @param {*} obj 
    //  * @param {*} options 
    //  */
    // isStudentFavDocument(obj, options) {
    //     return new Promise(
    //         function(resolve) {
    //             var dbUrl = Config.dbBaseUrl + '/isStudentFavDocument?student_id=' + options.student_id + '&document_id=' + options.document_id;
    //             obj.$http({
    //                 url: dbUrl,
    //                 method: 'GET'
    //             }).then(res => {
    //                 resolve(res.data);
    //             });
    //         }
    //     );
    // },

    // /**
    //  * 点赞
    //  * @param {*} obj 
    //  * @param {*} data 
    //  */
    // newStudentLikeDocument(obj, data) {
    //     return new Promise(
    //         function(resolve) {
    //             var dbUrl = Config.dbBaseUrl + '/newStudentLikeDocument';
    //             obj.$http.post(dbUrl, { data: data }, {
    //                 headers: {
    //                     'Content-Type': 'application/x-www-form-urlencoded'
    //                 },
    //                 emulateJSON: true
    //             }).then(res => {
    //                 resolve(res.data);
    //             });

    //         }
    //     );
    // },

    // /**
    //  * 取消赞
    //  * @param {*} obj 
    //  * @param {*} data 
    //  */
    // delStudentLikeDocument(obj, data) {
    //     return new Promise(
    //         function(resolve) {
    //             var dbUrl = Config.dbBaseUrl + '/delStudentLikeDocument';
    //             obj.$http.post(dbUrl, { data: data }, {
    //                 headers: {
    //                     'Content-Type': 'application/x-www-form-urlencoded'
    //                 },
    //                 emulateJSON: true
    //             }).then(res => {
    //                 resolve(res.data);
    //             });

    //         }
    //     );
    // },

    // /**
    //  * 收藏文档
    //  * @param {*} obj 
    //  * @param {*} data 
    //  */
    // newStudentFavDocument(obj, data) {
    //     return new Promise(
    //         function(resolve) {
    //             var dbUrl = Config.dbBaseUrl + '/newStudentFavDocument';
    //             obj.$http.post(dbUrl, { data: data }, {
    //                 headers: {
    //                     'Content-Type': 'application/x-www-form-urlencoded'
    //                 },
    //                 emulateJSON: true
    //             }).then(res => {
    //                 resolve(res.data);
    //             });

    //         }
    //     );
    // },

    // /**
    //  * 取消赞
    //  * @param {*} obj 
    //  * @param {*} data 
    //  */
    // delStudentFavDocument(obj, data) {
    //     return new Promise(
    //         function(resolve) {
    //             var dbUrl = Config.dbBaseUrl + '/delStudentFavDocument';
    //             obj.$http.post(dbUrl, { data: data }, {
    //                 headers: {
    //                     'Content-Type': 'application/x-www-form-urlencoded'
    //                 },
    //                 emulateJSON: true
    //             }).then(res => {
    //                 resolve(res.data);
    //             });

    //         }
    //     );
    // },

    // /**
    //  * 获取document评论
    //  * @param {*} obj 
    //  * @param {*} options 
    //  */
    // getDocumentComment(obj, options) {
    //     return new Promise(
    //         function(resolve) {
    //             var dbUrl = Config.dbBaseUrl + '/getDocumentComment?document_id=' + options.document_id + '&pagesize=' + options.pagesize + '&pagenum=' + options.pagenum;
    //             obj.$http({
    //                 url: dbUrl,
    //                 method: 'GET'
    //             }).then(res => {
    //                 resolve(res.data);
    //             });
    //         }
    //     )
    // },

    // /**
    //  * 发布新的评论
    //  * @param {*} obj 
    //  * @param {*} options 
    //  */
    // newDocumentComment(obj, data) {
    //     return new Promise(
    //         function(resolve) {
    //             var dbUrl = Config.dbBaseUrl + '/newDocumentComment';
    //             obj.$http.post(dbUrl, { data: data }, {
    //                 headers: {
    //                     'Content-Type': 'application/x-www-form-urlencoded'
    //                 },
    //                 emulateJSON: true
    //             }).then(res => {
    //                 resolve(res.data);
    //             });
    //         }
    //     );
    // },

    // /**
    //  * 获取Documents
    //  * @param {*} obj 为this
    //  * @param {*} options team.id
    //  */
    // getDocumentCourse(obj, options) {
    //     return new Promise(
    //         function(resolve) {
    //             var dbUrl = Config.dbBaseUrl + '/getDocumentCourse';
    //             obj.$http({
    //                 url: dbUrl,
    //                 method: 'GET'
    //             }).then(res => {
    //                 resolve(res.data);
    //             });
    //         }
    //     );
    // },

    // /*-------------------------------------------------------------------------------------------------------*/
    // /*--- ##STUDENT -----------------------------------------------------------------------------------------*/
    // /*-------------------------------------------------------------------------------------------------------*/

    // /**
    //  * 新学生注册
    //  * @param {*} obj 为this
    //  * @param {*} data { name, sex, dob, id_number, head_image, cellphone, email,password,address, city, province, country, zipcode, diploma, graduate_school, major, minor, english_level, hobby, guardian_01_name, guardian_01_relation, guardian_01_cellphone, guardian_02_name, guardian_02_relation, guardian_02_cellphone, note}
    //  */
    // newStudent(obj, data) {
    //     return new Promise(
    //         function(resolve) {
    //             var dbUrl = Config.dbBaseUrl + '/newStudent';
    //             obj.$http.post(dbUrl, { data: data }, {
    //                 headers: {
    //                     'Content-Type': 'application/x-www-form-urlencoded'
    //                 },
    //                 emulateJSON: true
    //             }).then(res => {
    //                 resolve(res.data);
    //             });
    //         }
    //     );
    // },

    // /**
    //  * 登录判断
    //  * @param {*} obj 为this
    //  * @param {*} options { email/cellphone, password}
    //  */
    // getStudentId(obj, options) {
    //     return new Promise(
    //         function(resolve) {
    //             var dbUrl = Config.dbBaseUrl + '/getStudentId?username=' + options.username + '&password=' + options.password;
    //             obj.$http({
    //                 url: dbUrl,
    //                 method: 'GET'
    //             }).then(res => {
    //                 resolve(res.data);
    //             });
    //         }
    //     );
    // },

    // /**
    //  * 获取用户Profile
    //  * @param {*} obj 为this
    //  * @param {*} options { id: student id}
    //  */
    // getStudentProfile(obj, options) {
    //     return new Promise(
    //         function(resolve) {
    //             var dbUrl = Config.dbBaseUrl + '/getStudentProfile?id=' + options.id;
    //             obj.$http({
    //                 url: dbUrl,
    //                 method: 'GET'
    //             }).then(res => {
    //                 resolve(res.data);
    //             });
    //         }
    //     );
    // },

    // /**
    //  * 获取用户详情
    //  * @param {*} obj 为this
    //  * @param {*} options { uid: user id}
    //  */
    // getStudentDetails(obj, options) {
    //     return new Promise(
    //         function(resolve) {
    //             var dbUrl = Config.dbBaseUrl + '/getStudentDetails?sid=' + options.sid;
    //             obj.$http({
    //                 url: dbUrl,
    //                 method: 'GET'
    //             }).then(res => {
    //                 resolve(res.data);
    //             });
    //         }
    //     );
    // },

    // /**
    //  * 获取用户详情
    //  * @param {*} obj 为this
    //  * @param {*} options { uid: user id}
    //  */
    // setStudentDetails(obj, data) {
    //     return new Promise(
    //         function(resolve) {
    //             var dbUrl = Config.dbBaseUrl + '/setStudentDetails';
    //             obj.$http.post(dbUrl, { data: data }, {
    //                 headers: {
    //                     'Content-Type': 'application/x-www-form-urlencoded'
    //                 },
    //                 emulateJSON: true
    //             }).then(res => {
    //                 resolve(res.data);
    //             });
    //         }
    //     );
    // },

    // /**
    //  * 获取用户详情
    //  * @param {*} obj 为this
    //  * @param {*} options { uid: user id}
    //  */
    // setStudentHeadImage(obj, data) {
    //     return new Promise(
    //         function(resolve) {
    //             var dbUrl = Config.dbBaseUrl + '/setStudentHeadImage';
    //             obj.$http.post(dbUrl, { data: data }, {
    //                 headers: {
    //                     'Content-Type': 'application/x-www-form-urlencoded'
    //                 },
    //                 emulateJSON: true
    //             }).then(res => {
    //                 resolve(res.data);
    //             });
    //         }
    //     );
    // },

    // /**
    //  * 判断Email是否存在
    //  * @param {*} obj 为this
    //  * @param {*} options { email }
    //  */
    // isStudentEmailExist(obj, options) {
    //     return new Promise(
    //         function(resolve) {
    //             var dbUrl = Config.dbBaseUrl + '/isStudentEmailExist?email=' + options.email;
    //             obj.$http({
    //                 url: dbUrl,
    //                 method: 'GET'
    //             }).then(res => {
    //                 resolve(res.data);
    //             });
    //         }
    //     );
    // },

    // /**
    //  * 判断Cellphone是否存在
    //  * @param {*} obj 为this
    //  * @param {*} options { cellphone }
    //  */
    // isStudentCellphoneExist(obj, options) {
    //     return new Promise(
    //         function(resolve) {
    //             var dbUrl = Config.dbBaseUrl + '/isStudentCellphoneExist?cellphone=' + options.cellphone;
    //             obj.$http({
    //                 url: dbUrl,
    //                 method: 'GET'
    //             }).then(res => {
    //                 resolve(res.data);
    //             });
    //         }
    //     );
    // },

    // /**
    //  * Search student username
    //  * @param {*} obj 为this
    //  * @param {*} options { cellphone, email }
    //  */
    // searchStudentUsername(obj, options) {
    //     return new Promise(
    //         function(resolve) {
    //             var dbUrl = Config.dbBaseUrl + '/searchStudentUsername?username=' + options.username;
    //             obj.$http({
    //                 url: dbUrl,
    //                 method: 'GET'
    //             }).then(res => {
    //                 resolve(res.data);
    //             });
    //         }
    //     );
    // },

    // /*-------------------------------------------------------------------------------------------------------*/
    // /*--- ##STUDENT COURSE ----------------------------------------------------------------------------------*/
    // /*-------------------------------------------------------------------------------------------------------*/

    // /**
    //  * Get Student Course Take
    //  * @param {*} obj 为this
    //  */
    // getStudentCourseTake(obj, options) {
    //     return new Promise(
    //         function(resolve) {
    //             var dbUrl = Config.dbBaseUrl + '/getStudentCourseTake?student_id=' + options.student_id;

    //             obj.$http({
    //                 url: dbUrl,
    //                 method: 'GET'
    //             }).then(res => {
    //                 resolve(res.data);
    //             });
    //         }
    //     );
    // },

    // /**
    //  * Get Student Course Take
    //  * @param {*} obj 为this
    //  */
    // setStudentCourseTake(obj, data) {
    //     return new Promise(
    //         function(resolve) {
    //             var dbUrl = Config.dbBaseUrl + '/setStudentCourseTake';
    //             obj.$http.post(dbUrl, { data: data }, {
    //                 headers: {
    //                     'Content-Type': 'application/x-www-form-urlencoded'
    //                 },
    //                 emulateJSON: true
    //             }).then(res => {
    //                 resolve(res.data);
    //             });
    //         }
    //     );
    // },

    // /**
    //  * Get Student Course Take
    //  * @param {*} obj 为this
    //  */
    // isStudentTakeCourse(obj, options) {
    //     return new Promise(
    //         function(resolve) {
    //             var dbUrl = Config.dbBaseUrl + '/isStudentTakeCourse?student_id=' + options.student_id;

    //             obj.$http({
    //                 url: dbUrl,
    //                 method: 'GET'
    //             }).then(res => {
    //                 resolve(res.data);
    //             });
    //         }
    //     );
    // },


    // /*--------------------------------------------------------------------------------------------------------*/
    // /*--- ##Student NOTIFY -----------------------------------------------------------------------------------*/
    // /*--------------------------------------------------------------------------------------------------------*/

    // /**
    //  * Get Student Course Take
    //  * @param {*} obj 为this
    //  */
    // getStudentUnreadNotifyCount(obj, options) {
    //     return new Promise(
    //         function(resolve) {
    //             var dbUrl = Config.dbBaseUrl + '/getStudentUnreadNotifyCount?student_id=' + options.student_id;

    //             obj.$http({
    //                 url: dbUrl,
    //                 method: 'GET'
    //             }).then(res => {
    //                 resolve(res.data);
    //             });
    //         }
    //     );
    // },
    // getStudentUnreadNotify(obj, options) {
    //     return new Promise(
    //         function(resolve) {
    //             var dbUrl = Config.dbBaseUrl + '/getStudentUnreadNotify?pagenum=' + options.pagenum + '&pagesize=' + options.pagesize + '&student_id=' + options.student_id;

    //             obj.$http({
    //                 url: dbUrl,
    //                 method: 'GET'
    //             }).then(res => {
    //                 resolve(res.data);
    //             });
    //         }
    //     );
    // },
    // getStudentReadNotifyCount(obj, options) {
    //     return new Promise(
    //         function(resolve) {
    //             var dbUrl = Config.dbBaseUrl + '/getStudentReadNotifyCount?student_id=' + options.student_id;

    //             obj.$http({
    //                 url: dbUrl,
    //                 method: 'GET'
    //             }).then(res => {
    //                 resolve(res.data);
    //             });
    //         }
    //     );
    // },
    // getStudentReadNotify(obj, options) {
    //     return new Promise(
    //         function(resolve) {
    //             var dbUrl = Config.dbBaseUrl + '/getStudentReadNotify?pagenum=' + options.pagenum + '&pagesize=' + options.pagesize + '&student_id=' + options.student_id;

    //             obj.$http({
    //                 url: dbUrl,
    //                 method: 'GET'
    //             }).then(res => {
    //                 resolve(res.data);
    //             });
    //         }
    //     );
    // },
    // setStudentNotifyRead(obj, data) {
    //     return new Promise(
    //         function(resolve) {
    //             var dbUrl = Config.dbBaseUrl + '/setStudentNotifyRead';
    //             obj.$http.post(dbUrl, { data: data }, {
    //                 headers: {
    //                     'Content-Type': 'application/x-www-form-urlencoded'
    //                 },
    //                 emulateJSON: true
    //             }).then(res => {
    //                 resolve(res.data);
    //             });
    //         }
    //     );
    // },
    // delStudentNotify(obj, data) {
    //     return new Promise(
    //         function(resolve) {
    //             var dbUrl = Config.dbBaseUrl + '/delStudentNotify';
    //             obj.$http.post(dbUrl, { data: data }, {
    //                 headers: {
    //                     'Content-Type': 'application/x-www-form-urlencoded'
    //                 },
    //                 emulateJSON: true
    //             }).then(res => {
    //                 resolve(res.data);
    //             });
    //         }
    //     );
    // },
    // /*-------------------------------------------------------------------------------------------------------*/
    // /*--- ##STUDENT TEAM ------------------------------------------------------------------------------------*/
    // /*-------------------------------------------------------------------------------------------------------*/

    // /**
    //  * Get Student Team List
    //  * @param {*} obj 为this
    //  */
    // getStudentTeam(obj, options) {
    //     return new Promise(
    //         function(resolve) {

    //             var dbUrl = Config.dbBaseUrl + '/getStudentTeam?student_id=' + options.student_id;

    //             obj.$http({
    //                 url: dbUrl,
    //                 method: 'GET'
    //             }).then(res => {
    //                 resolve(res.data);
    //             });
    //         }
    //     );
    // },

    // /*-------------------------------------------------------------------------------------------------------*/
    // /*--- ##STUDENT TEAM MEMBER -----------------------------------------------------------------------------*/
    // /*-------------------------------------------------------------------------------------------------------*/

    // isStudentTeamMember(obj, options) {
    //     return new Promise(
    //         function(resolve) {
    //             var dbUrl = Config.dbBaseUrl + '/isStudentTeamMember?student_id=' + options.student_id + '&team_id=' + options.team_id;
    //             obj.$http({
    //                 url: dbUrl,
    //                 method: 'GET'
    //             }).then(res => {
    //                 resolve(res.data);
    //             });
    //         }
    //     );
    // },

    // /*-------------------------------------------------------------------------------------------------------*/
    // /*--- ##STUDENT FOLLOW TEAM -----------------------------------------------------------------------------*/
    // /*-------------------------------------------------------------------------------------------------------*/

    // /**
    //  * Get Student Team List
    //  * @param {*} obj 为this
    //  */
    // getStudentFollowTeam(obj, options) {
    //     return new Promise(
    //         function(resolve) {

    //             var dbUrl = Config.dbBaseUrl + '/getStudentFollowTeam?student_id=' + options.student_id;

    //             obj.$http({
    //                 url: dbUrl,
    //                 method: 'GET'
    //             }).then(res => {
    //                 resolve(res.data);
    //             });
    //         }
    //     );
    // },

    // newStudentFollowTeam(obj, data) {
    //     return new Promise(
    //         function(resolve) {
    //             var dbUrl = Config.dbBaseUrl + '/newStudentFollowTeam';
    //             obj.$http.post(dbUrl, { data: data }, {
    //                 headers: {
    //                     'Content-Type': 'application/x-www-form-urlencoded'
    //                 },
    //                 emulateJSON: true
    //             }).then(res => {
    //                 resolve(res.data);
    //             });
    //         }
    //     );
    // },

    // isStudentFollowTeam(obj, options) {
    //     return new Promise(
    //         function(resolve) {
    //             var dbUrl = Config.dbBaseUrl + '/isStudentFollowTeam?student_id=' + options.student_id + '&team_id=' + options.team_id;
    //             obj.$http({
    //                 url: dbUrl,
    //                 method: 'GET'
    //             }).then(res => {
    //                 resolve(res.data);
    //             });
    //         }
    //     );
    // },

    // delStudentFollowTeam(obj, data) {
    //     return new Promise(
    //         function(resolve) {
    //             var dbUrl = Config.dbBaseUrl + '/delStudentFollowTeam';
    //             obj.$http.post(dbUrl, { data: data }, {
    //                 headers: {
    //                     'Content-Type': 'application/x-www-form-urlencoded'
    //                 },
    //                 emulateJSON: true
    //             }).then(res => {
    //                 resolve(res.data);
    //             });
    //         }
    //     );
    // },


    // /*-------------------------------------------------------------------------------------------------------*/
    // /*--- ##STUDENT Document --------------------------------------------------------------------------------*/
    // /*-------------------------------------------------------------------------------------------------------*/
    // getStudentDocument(obj, options) {
    //     return new Promise(
    //         function(resolve) {
    //             var dbUrl = Config.dbBaseUrl + '/getStudentDocument?pagenum=' + options.pagenum +
    //                 '&pagesize=' + options.pagesize +
    //                 '&student_id=' + options.student_id;
    //             obj.$http({
    //                 url: dbUrl,
    //                 method: 'GET'
    //             }).then(res => {
    //                 resolve(res.data);
    //             });
    //         }
    //     );
    // },


    // /*-------------------------------------------------------------------------------------------------------*/
    // /*--- ##TEAM --------------------------------------------------------------------------------------------*/
    // /*-------------------------------------------------------------------------------------------------------*/

    // /**
    //  * Get Student Team List
    //  * @param {*} obj 为this
    //  */
    // getTeam(obj, options) {
    //     return new Promise(
    //         function(resolve) {
    //             var dbUrl;
    //             if (options.keyword) {
    //                 dbUrl = Config.dbBaseUrl + '/getTeam?keyword=' + options.keyword + '&pagenum=' + options.pagenum + "&pagesize=" + options.pagesize;
    //             } else {
    //                 dbUrl = Config.dbBaseUrl + '/getTeam?pagenum=' + options.pagenum + "&pagesize=" + options.pagesize;
    //             }

    //             obj.$http({
    //                 url: dbUrl,
    //                 method: 'GET'
    //             }).then(res => {
    //                 resolve(res.data);
    //             });
    //         }
    //     );
    // },

    // /**
    //  * Get student team details
    //  * @param {*} obj 为this
    //  */
    // getTeamDetails(obj, options) {
    //     return new Promise(
    //         function(resolve) {
    //             var dbUrl = Config.dbBaseUrl + '/getTeamDetails?id=' + options.id;
    //             obj.$http({
    //                 url: dbUrl,
    //                 method: 'GET'
    //             }).then(res => {
    //                 resolve(res.data);
    //             });
    //         }
    //     );
    // },

    // /**
    //  * determine is student a team leader
    //  * @param {*} obj 为this
    //  */
    // isStudentTeamLeader(obj, options) {
    //     return new Promise(
    //         function(resolve) {
    //             var dbUrl = Config.dbBaseUrl + '/isStudentTeamLeader?student_id=' + options.student_id + '&team_id=' + options.team_id;
    //             obj.$http({
    //                 url: dbUrl,
    //                 method: 'GET'
    //             }).then(res => {
    //                 resolve(res.data);
    //             });
    //         }
    //     );
    // },

    // /**
    //  * Update the team's details
    //  * @param {*} obj 为this
    //  */
    // setTeamDetails(obj, data) {
    //     return new Promise(
    //         function(resolve) {
    //             var dbUrl = Config.dbBaseUrl + '/setTeamDetails';
    //             obj.$http.post(dbUrl, { data: data }, {
    //                 headers: {
    //                     'Content-Type': 'application/x-www-form-urlencoded'
    //                 },
    //                 emulateJSON: true
    //             }).then(res => {
    //                 resolve(res.data);
    //             });
    //         }
    //     );
    // },

    // /**
    //  * Get Student Team List
    //  * @param {*} obj 为this
    //  */
    // searchTeam(obj, options) {
    //     return new Promise(
    //         function(resolve) {
    //             var dbUrl = Config.dbBaseUrl + '/searchTeam?keyword=' + options.keyword + '&pagenum=' + options.pagenum + "&pagesize=" + options.pagesize;

    //             obj.$http({
    //                 url: dbUrl,
    //                 method: 'GET'
    //             }).then(res => {
    //                 resolve(res.data);
    //             });
    //         }
    //     );
    // },

    // /*-------------------------------------------------------------------------------------------------------*/
    // /*--- ##TEAM FOLLOW -------------------------------------------------------------------------------------*/
    // /*-------------------------------------------------------------------------------------------------------*/

    // /**
    //  * Get student team follow count
    //  * @param {*} obj 为this
    //  */
    // getTeamFollowCount(obj, options) {
    //     return new Promise(
    //         function(resolve) {
    //             var dbUrl = Config.dbBaseUrl + '/getTeamFollowCount?team_id=' + options.team_id;
    //             obj.$http({
    //                 url: dbUrl,
    //                 method: 'GET'
    //             }).then(res => {
    //                 resolve(res.data);
    //             });
    //         }
    //     );
    // },

    // /**
    //  * get student team follows
    //  * @param {*} obj 为this
    //  */
    // getTeamFollow(obj, options) {
    //     return new Promise(
    //         function(resolve) {
    //             var dbUrl = Config.dbBaseUrl + '/getTeamFollow?team_id=' + options.team_id;
    //             obj.$http({
    //                 url: dbUrl,
    //                 method: 'GET'
    //             }).then(res => {
    //                 resolve(res.data);
    //             });
    //         }
    //     );
    // },

    // /*-------------------------------------------------------------------------------------------------------*/
    // /*--- ##TEAM MEMBER -------------------------------------------------------------------------------------*/
    // /*-------------------------------------------------------------------------------------------------------*/

    // getTeamMember(obj, options) {
    //     return new Promise(
    //         function(resolve) {
    //             var dbUrl = Config.dbBaseUrl + '/getTeamMember?team_id=' + options.team_id;
    //             obj.$http({
    //                 url: dbUrl,
    //                 method: 'GET'
    //             }).then(res => {
    //                 resolve(res.data);
    //             });
    //         }
    //     );
    // },

    // newTeamMember(obj, data) {
    //     return new Promise(
    //         function(resolve) {
    //             var dbUrl = Config.dbBaseUrl + '/newTeamMember';
    //             obj.$http.post(dbUrl, { data: data }, {
    //                 headers: {
    //                     'Content-Type': 'application/x-www-form-urlencoded'
    //                 },
    //                 emulateJSON: true
    //             }).then(res => {
    //                 resolve(res.data);
    //             });
    //         }
    //     );
    // },

    // delTeamMember(obj, data) {
    //     return new Promise(
    //         function(resolve) {
    //             var dbUrl = Config.dbBaseUrl + '/delTeamMember';
    //             obj.$http.post(dbUrl, { data: data }, {
    //                 headers: {
    //                     'Content-Type': 'application/x-www-form-urlencoded'
    //                 },
    //                 emulateJSON: true
    //             }).then(res => {
    //                 resolve(res.data);
    //             });
    //         }
    //     );
    // },

    // /*-------------------------------------------------------------------------------------------------------*/
    // /*--- ##TEAM COMMENT ----------------------------------------------------------------------------*/
    // /*-------------------------------------------------------------------------------------------------------*/

    // getTeamComment(obj, options) {
    //     return new Promise(
    //         function(resolve) {
    //             var dbUrl = Config.dbBaseUrl + '/getTeamComment?pagesize=' + options.pagesize + '&pagenum=' + options.pagenum + '&team_id=' + options.team_id;
    //             obj.$http({
    //                 url: dbUrl,
    //                 method: 'GET'
    //             }).then(res => {
    //                 resolve(res.data);
    //             });
    //         }
    //     );
    // },

    // getTeamCommentCount(obj, options) {
    //     return new Promise(
    //         function(resolve) {
    //             var dbUrl = Config.dbBaseUrl + '/getTeamCommentCount?&team_id=' + options.team_id;
    //             obj.$http({
    //                 url: dbUrl,
    //                 method: 'GET'
    //             }).then(res => {
    //                 resolve(res.data);
    //             });
    //         }
    //     );
    // },

    // newTeamComment(obj, data) {
    //     return new Promise(
    //         function(resolve) {
    //             var dbUrl = Config.dbBaseUrl + '/newTeamComment';
    //             obj.$http.post(dbUrl, { data: data }, {
    //                 headers: {
    //                     'Content-Type': 'application/x-www-form-urlencoded'
    //                 },
    //                 emulateJSON: true
    //             }).then(res => {
    //                 resolve(res.data);
    //             });
    //         }
    //     );
    // },

    // /*-------------------------------------------------------------------------------------------------------*/
    // /*--- ##STUDENT FAV COURSE ------------------------------------------------------------------------------*/
    // /*-------------------------------------------------------------------------------------------------------*/

    // /**
    //  * 获取学生已经收藏了课程
    //  * @param {*} obj 为this
    //  * @param {*} options { student_id, course_id }
    //  */
    // getStudentFavCourse(obj, options) {
    //     return new Promise(
    //         function(resolve) {
    //             var dbUrl = Config.dbBaseUrl + '/getStudentFavCourse?student_id=' + options.student_id;
    //             obj.$http({
    //                 url: dbUrl,
    //                 method: 'GET'
    //             }).then(res => {
    //                 resolve(res.data);
    //             });
    //         }
    //     );
    // },

    // /**
    //  * 新课程收藏
    //  * @param {*} obj 为this
    //  * @param {*} data { student_id, course_id}
    //  */
    // newStudentFavCourse(obj, data) {
    //     return new Promise(
    //         function(resolve) {
    //             var dbUrl = Config.dbBaseUrl + '/newStudentFavCourse';
    //             obj.$http.post(dbUrl, { data: data }, {
    //                 headers: {
    //                     'Content-Type': 'application/x-www-form-urlencoded'
    //                 },
    //                 emulateJSON: true
    //             }).then(res => {
    //                 resolve(res.data);
    //             });
    //         }
    //     );
    // },

    // /**
    //  * 判断学生是否已经收藏了课程
    //  * @param {*} obj 为this
    //  * @param {*} options { student_id, course_id }
    //  */
    // isStudentFavCourse(obj, options) {
    //     return new Promise(
    //         function(resolve) {
    //             var dbUrl = Config.dbBaseUrl + '/isStudentFavCourse?student_id=' + options.student_id + '&course_id=' + options.course_id;
    //             obj.$http({
    //                 url: dbUrl,
    //                 method: 'GET'
    //             }).then(res => {
    //                 resolve(res.data);
    //             });
    //         }
    //     );
    // },

    // /**
    //  * 删除课程收藏·
    //  * @param {*} obj 为this
    //  * @param {*} data { student_id, course_id}
    //  */
    // delStudentFavCourse(obj, data) {
    //     return new Promise(
    //         function(resolve) {
    //             var dbUrl = Config.dbBaseUrl + '/delStudentFavCourse';
    //             obj.$http.post(dbUrl, { data: data }, {
    //                 headers: {
    //                     'Content-Type': 'application/x-www-form-urlencoded'
    //                 },
    //                 emulateJSON: true
    //             }).then(res => {
    //                 resolve(res.data);
    //             });
    //         }
    //     );
    // },

    // /*-------------------------------------------------------------------------------------------------------*/
    // /*--- ##STUDENT FAV DOC ---------------------------------------------------------------------------------*/
    // /*-------------------------------------------------------------------------------------------------------*/


    // getStudentFavDocument(obj, options) {
    //     return new Promise(
    //         function(resolve) {
    //             var dbUrl = Config.dbBaseUrl + '/getStudentFavDocument?pagenum=' + options.pagenum +
    //                 '&pagesize=' + options.pagesize +
    //                 '&student_id=' + options.student_id;
    //             obj.$http({
    //                 url: dbUrl,
    //                 method: 'GET'
    //             }).then(res => {
    //                 resolve(res.data);
    //             });
    //         }
    //     );
    // },

    // /*-------------------------------------------------------------------------------------------------------*/
    // /*--- ##STUDENT FAV SDK ---------------------------------------------------------------------------------*/
    // /*-------------------------------------------------------------------------------------------------------*/

    // /**
    //  * 新课程收藏
    //  * @param {*} obj 为this
    //  * @param {*} data { student_id, sdk_id}
    //  */
    // newStudentFavSDK(obj, data) {
    //     return new Promise(
    //         function(resolve) {
    //             var dbUrl = Config.dbBaseUrl + '/newStudentFavSDK';
    //             obj.$http.post(dbUrl, { data: data }, {
    //                 headers: {
    //                     'Content-Type': 'application/x-www-form-urlencoded'
    //                 },
    //                 emulateJSON: true
    //             }).then(res => {
    //                 resolve(res.data);
    //             });
    //         }
    //     );
    // },

    // /**
    //  * 判断学生是否已经收藏了课程
    //  * @param {*} obj 为this
    //  * @param {*} options { student_id, course_id }
    //  */
    // isStudentFavSDK(obj, options) {
    //     return new Promise(
    //         function(resolve) {
    //             var dbUrl = Config.dbBaseUrl + '/isStudentFavSDK?student_id=' + options.student_id + '&sdk_id=' + options.sdk_id;
    //             obj.$http({
    //                 url: dbUrl,
    //                 method: 'GET'
    //             }).then(res => {
    //                 resolve(res.data);
    //             });
    //         }
    //     );
    // },

    // /**
    //  * 删除课程收藏·
    //  * @param {*} obj 为this
    //  * @param {*} data { student_id, course_id}
    //  */
    // delStudentFavSDK(obj, data) {
    //     return new Promise(
    //         function(resolve) {
    //             var dbUrl = Config.dbBaseUrl + '/delStudentFavSDK';
    //             obj.$http.post(dbUrl, { data: data }, {
    //                 headers: {
    //                     'Content-Type': 'application/x-www-form-urlencoded'
    //                 },
    //                 emulateJSON: true
    //             }).then(res => {
    //                 resolve(res.data);
    //             });
    //         }
    //     );
    // },


    // /*-------------------------------------------------------------------------------------------------------*/
    // /*--- SDK -----------------------------------------------------------------------------------------------*/
    // /*-------------------------------------------------------------------------------------------------------*/

    // /**
    //  * 获取SDK Typies
    //  * @param {*} obj 为this
    //  * @param {*} options { subject_id: subject id}
    //  */
    // getSDKType(obj, options) {
    //     return new Promise(
    //         function(resolve) {
    //             var dbUrl = Config.dbBaseUrl + '/getSDKType?subject_id=' + options.subject_id;
    //             obj.$http({
    //                 url: dbUrl,
    //                 method: 'GET'
    //             }).then(res => {
    //                 resolve(res.data);
    //             });
    //         }
    //     );
    // },

    // /**
    //  * 获取SDK List
    //  * @param {*} obj 为this
    //  * @param {*} options { subject_id: subject id}
    //  */
    // getSDK(obj, options) {
    //     return new Promise(
    //         function(resolve) {
    //             var dbUrl = Config.dbBaseUrl + '/getSDK?type_id=' + options.type_id;
    //             obj.$http({
    //                 url: dbUrl,
    //                 method: 'GET'
    //             }).then(res => {
    //                 resolve(res.data);
    //             });
    //         }
    //     );
    // },

    // /**
    //  * 获取SDK Details
    //  * @param {*} obj 为this
    //  * @param {*} options { type_id: type id}
    //  */
    // getSDKDetails(obj, options) {
    //     return new Promise(
    //         function(resolve) {
    //             var dbUrl = Config.dbBaseUrl + '/getSDKDetails?id=' + options.id;
    //             obj.$http({
    //                 url: dbUrl,
    //                 method: 'GET'
    //             }).then(res => {
    //                 resolve(res.data);
    //             });
    //         }
    //     );
    // }
}