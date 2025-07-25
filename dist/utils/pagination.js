"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginate = paginate;
function paginate(array, page, limit) {
    const total = array.length;
    const start = (page - 1) * limit;
    const end = start + limit;
    const data = array.slice(start, end);
    return { data, total, page, limit };
}
