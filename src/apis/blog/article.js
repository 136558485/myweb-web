import {get, post, put, del} from '../../utils/https'

/**
 * 根据分类id获取文章列表
 * 
 * @param {*} param 
 * @returns 
 */
export function getArticleByCatalogId(param) {
    return post('/queryArticles', param);
}

/**
 * 新增文章
 * 
 * @param {*} param 
 * @returns 
 */
export function newArticle(param) {
    return post('/newArticle', param);
}

/**
 * 查询文章详情
 * 
 * @param {*} param 
 * @returns 
 */
export function getArticleDetailById(id) {
    return get("/getArticleDetail?id=" + id);
}

/**
 * 删除文章
 * 
 * @param {*} param 
 * @returns 
 */
export function deleteArticle(param) {
    return del('/deleteArticle?id='+param.id)
}

/**
 * 更新文章内容
 * 
 * @param {*} param 
 * @returns 
 */
export function updateArticleContent(param) {
    return post('/updateArticleContent', param)
}

export function uploadImgFile(param, head) {
    return post('/uploadImgFile', param, head)
}

// export function getArticleByCatalogId() {
//     // return get('/getArticleByCatalogId');
//     let articlesList = [{
//         id: "10001",
//         title: "第一篇文章",
//         author: "laugher",
//         createdate: "2021/10/17",
//         modifydate: "2021/10/18",
//         summary: "balabalan巴拉巴拉...",
//         imgSrc:"https://1.s91i.faiusr.com/4/AFsI-7eaAhAEGAAgw9X-igYoqu67ugUwhAc4-wI!800x800.png.webp?v=1633675971775"
//     },{
//         id: "10002",
//         title: "第二篇文章",
//         author: "laugher",
//         createdate: "2021/10/17",
//         modifydate: "2021/10/18",
//         summary: "balabalan巴拉巴拉...",
//         imgSrc:"https://1.s91i.faiusr.com/4/AFsI-7eaAhAEGAAgscq-igYolvj-lQYwhAc4-wI!800x800.png.webp?v=1632625969100"
//     },{
//         id: "10003",
//         title: "第三篇文章",
//         author: "laugher",
//         createdate: "2021/10/17",
//         modifydate: "2021/10/18",
//         summary: "balabalan巴拉巴拉...",
//         imgSrc:"https://1.s91i.faiusr.com/4/AFsI9_jNAhAEGAAgupfAgwYogI6GgwcwhAc4-wI!800x800.png.webp?v=1617955770149"
//     },{
//         id: "10004",
//         title: "第四篇文章",
//         author: "laugher",
//         createdate: "2021/10/17",
//         modifydate: "2021/10/18",
//         summary: "balabalan巴拉巴拉...",
//         imgSrc:"https://1.s91i.faiusr.com/4/AFsIo4jwAhAEGAAgkf-QigYogIe1hgUwhAc4-wI!800x800.png.webp?v=1632911249641"
//     },{
//         id: "10005",
//         title: "第五篇文章",
//         author: "laugher",
//         createdate: "2021/10/17",
//         modifydate: "2021/10/18",
//         summary: "balabalan巴拉巴拉...",
//         imgSrc:"https://1.s91i.faiusr.com/4/AFsIo4jwAhAEGAAgkf-QigYogIe1hgUwhAc4-wI!800x800.png.webp?v=1632911249641"
//     }];
//     return articlesList;
// }