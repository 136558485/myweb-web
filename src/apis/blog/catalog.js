import {get, post, put, del} from '../../utils/https'

export function getAllCatalogs() {
    return get('/getCatalogInfoList');
}

export function newCatalog(param) {
    return post('/addCatalog', param);
}

export function deleteCatalog(param) {
    return post('/deleteCatalog', param)
}