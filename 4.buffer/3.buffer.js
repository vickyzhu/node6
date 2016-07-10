var buffer = new Buffer(6);
var buf1 = new Buffer('珠');
var buf2 = new Buffer('峰');
//targetBuffer, 目标buffer
//targetStart,  目标的开始
//sourceStart,  原buffer的开始
//sourceEnd     原buffer的结束
/*buf1.copy(buffer,0,0,3);
buf2.copy(buffer,3,0,3);*/
/*buf1.copy(buffer,0);
buf2.copy(buffer,3);//默认是从原buffer的开始考到结束
console.log(buffer.toString());*/

//合并buffer Buffer.concat();
//list, 要合并buffer的列表以数组形式
//totalLength 总长度
var bu1 = new Buffer('珠峰')
var bu2 = new Buffer('培训')
/*var newBuffer = Buffer.concat([bu1,bu2]);
console.log(newBuffer.toString());*/
//连接buffer
Buffer.myConcat = function (list,totalLength) {

};
Buffer.myConcat([bu1,bu2],100);
//判断长度传递没有，判断不够长，过长的状况
