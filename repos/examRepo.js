var db = require('../fn/mysql-db');
exports.addExam = function (poco) {
    var sql = `insert into exam( question, answer1, answer2, answer3, answer4, rightanswer) values('${poco.question}','${poco.answer1}','${poco.answer2}','${poco.answer3}','${poco.answer4}','${poco.rightanswer}')`;
    return db.insert(sql);
}
exports.loadAllExam = function () {
    var sql = `select * from exam `;
    return db.load(sql);
}
exports.loadbyIdLesson = function (id) {
    var sql = `select * from exam where idLesson='${id}'`;
    return db.load(sql);
}
exports.loadbyIdExam = function (poco) {
    var sql = `select * from exam where idExam='${poco.idExam}'`;
    return db.load(sql);
}
exports.updateExam =  function (poco) {   
    var sql = `update exam SET idLesson = '${poco.idLesson}', question = '${poco.question}' , answer1 ='${poco.answer1}', answer2 ='${poco.answer2}', answer3 ='${poco.answer3}', answer4 ='${poco.answer4}', rightanswer ='${poco.rightanswer}' where idExam ='${poco.idExam}' `;
    return db.update(sql);
}
exports.deleteExam= function (id) {
    var sql = `DELETE FROM exam WHERE idExam =  '${id}'`;
    return db.delete(sql);
}
