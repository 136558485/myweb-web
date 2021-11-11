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

/**
 * 锁定文章
 * 
 * @param {*} param 
 * @returns 
 */
export function lockArticleApi(param) {
    return put('/article/lock', param);
}

/**
 * 解锁文章
 * 
 * @param {*} param 
 * @returns 
 */
export function unLockArticleApi(param) {
    return put('/article/unlock', param);
}