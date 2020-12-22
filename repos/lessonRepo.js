var db = require('../fn/mysql-db');
// CHAPTER
exports.addChapter = function (poco) {
    var sql = `insert into chapter(name, subject) values('${poco.name}','${poco.subject}')`;
    return db.insert(sql);
}
exports.loadAllChapter = function () {
    var sql = `select * from chapter `;
    return db.load(sql);
}
exports.loadbyIdSubject = function (poco) {
    var sql = `select * from chapter where subject='${poco.subject}'`;
    return db.load(sql);
}
exports.loadbyIdChapter = function (poco) {
    var sql = `select * from chapter where idChapter='${poco.idChapter}'`;
    return db.load(sql);
}
exports.updateChapter =  function (poco) {   
    var sql = `update chapter SET  name = '${poco.name}' , subject ='${poco.subject}' where idChapter ='${poco.idChapter}' `;
    return db.update(sql);
}
exports.deleteChapter = function (id) {
    var sql = `DELETE FROM chapter WHERE idChapter =  '${id}'`;
    return db.delete(sql);
}
//LESSON-------------------------------------------------------------------------------------------------------------
exports.addLesson = function (poco) {
    var sql = `insert into lesson(title, idChapter,content1,content2,content3) values('${poco.title}','${poco.idChapter}','${poco.content1}','${poco.content2}','${poco.content3}')`;
    return db.insert(sql);
}
exports.loadAllLesson = function () {
    var sql = `select * from lesson `;
    return db.load(sql);
}
exports.loadlessonbyIdChapter = function (id) {
    var sql = `select * from lesson where idChapter='${id}'`;
    return db.load(sql);
}
exports.loadbyIdLesson = function (id) {
    var sql = `select * from lesson where idLesson='${id}'`;
    return db.load(sql);
}
exports.updateLesson =  function (poco) {   
    var sql = `update lesson SET  title = '${poco.title}' , idChapter = '${poco.idChapter}' , content1 = '${poco.content1}', content2 = '${poco.content2}', content3 = '${poco.content3}' where idLesson ='${poco.idLesson}' `;
    return db.update(sql);
}
exports.deleteLesson = function (id) {
    var sql = `DELETE FROM lesson WHERE idLesson =  '${id}'`;
    return db.delete(sql);
}