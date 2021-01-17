
workers = [];
var worker1= {
    "siteName": "天悦容城工程",
    "workerId": "01",
    "workerName": "小明",
    "sex": "男",
    "birth": "1999-12-11",
    "phone": "01234567890",
    "address": "中国",
    "workType": "混凝土工",
    "duty":"大头兵",
    "registerDate": "2020/12/1 下午2:13:40",
    "avatar":"image/avatar0.jpg",
    "state":"测试"
};
var worker2= {
    "siteName": "天悦容城工程",
    "workerId": "02",
    "workerName": "迪迦",
    "sex": "男",
    "birth": "2020-1-1",
    "phone": "110",
    "address": "M78",
    "workType": "混凝土工",
    "duty":"大头兵",
    "registerDate": "2020/12/2 下午2:13:40",
    "avatar":"image/avatar1.png",
    "state":"测试"
};
// 添加到数组
workers[0]=worker1;
workers[1]=worker2;

//检验输入查询工地名称
function checkSearchSiteName(){
    var str = document.getElementById('searchSiteName').value;
    var warn=$("#lblWarnSiteName");
    // var foc=$("#searchSiteName");
    var reg=/^([\u4e00-\u9fa5]){2,10}$/; //只能是中文，长度为2-10位
    if(str ==null || str == ""){
        warn.html("不能为空!");
        // foc.focus();
        return false;
    }else if(!reg.test(str)){
        warn.html("应为2-10个汉字!");
        // foc.focus();
        return false;
    }
    else
        warn.html("");
    return true;
}
//检验输入查询姓名
function checkSearchWorkerName(){
    var str = document.getElementById('searchWorkerName').value;
    var warn=$("#lblWarnWorkerName0");
    var foc=$("#searchWorkerName");
    var reg=/^([\u4e00-\u9fa5]){2,5}$/; //只能是中文，长度为2-5位
    if(str ==null || str == ""){
        warn.html("不能为空!");
        // foc.focus();
        return false;
    }else if(!reg.test(str)){
        warn.html("应为2-5个汉字!");
        // foc.focus();
        return false;
    }
    else
        warn.html("");
    return true;
}

//检验新建姓名
function checkWorkerName(){
    var str = document.getElementById('workerName').value;
    var reg=/^([\u4e00-\u9fa5]){2,5}$/; //只能是中文，长度为2-5位
    var warn=$("#lblWarnWorkerName");
    var foc=$("#workerName");
    if(str ==null || str == ""){
        warn.html("不能为空!");
        // foc.focus();
        return false;
    }else if(!reg.test(str)){
        warn.html("应为2-5个汉字!");
        // foc.focus();
        return false;
    }
    else
        warn.html("");
    return true;
}
// 检验修改姓名
function checkWorkerName2(){
    var str = document.getElementById('workerName2').value;
    var reg=/^([\u4e00-\u9fa5]){2,5}$/; //只能是中文，长度为2-5位
    var warn=$("#lblWarnWorkerName2");
    var foc=$("#workerName2");
    if(str ==null || str == ""){
        warn.html("不能为空!");
        // foc.focus();
        return false;
    }else if(!reg.test(str)){
        warn.html("应为2-5个汉字!");
        // foc.focus();
        return false;
    }
    else
        warn.html("");
    return true;
}
//检验新建编码
function checkWorkerId(){
    var chongfu=false;
    var str = document.getElementById('workerId').value;
    var warn=$("#lblWarnWorkerId");
    var foc=$("#workerId");
    for (var i = 0; i < workers.length; i++) {
        if(workers[i].workerId == str){
            chongfu=true;
        }
    }
    var reg=/^([a-zA-Z0-9]){1,50}$/i; //只能是字母、数字，长度为1-50位
    if(str ==null || str == ""){
        warn.html("不能为空!");
        // foc.focus();
        return false;
    }else if(!reg.test(str)){
        warn.html("应为1-50位字母、数字!");
        // foc.focus();
        return false;
    }
    else if(chongfu){
        warn.html("编号重复！");
        foc.focus();
        return false;
    }
    else
        warn.html("");
    return true;
}
checkId='';
function checkWorkerId2(){
    var count=0;
    var exist=0;
    // var chongfu=false;
    var str = document.getElementById('workerId2').value;
    var warn=$("#lblWarnWorkerId2");
    var foc=$("#workerId2");
    for (var i = 0; i < workers.length; i++) {
        if(workers[i].workerId == str){
            exist=1;
        }
    }
    for (var i = 0; i < workers.length; i++) {
        if(workers[i].workerId == str && str!=checkId){
            count++;
        }
    }
    var reg=/^([a-zA-Z0-9]){1,50}$/i; //只能是字母、数字，长度为1-50位

    if(str ==null || str == ""){
        warn.html("不能为空!");
        // foc.focus();
        return false;
    }else if(!reg.test(str)){
        warn.html("应为1-50位字母、数字!");
        // foc.focus();
        return false;
    }//else if(exist==0){
        //warn.html("人员不存在！");
        //foc.focus();
        //return false;
    //}
    else if(count>0){
        warn.html("编号重复！");
        foc.focus();
        return false;
    }
    else
        warn.html("");
    return true;
}

String.prototype.trim = function()
    {
        return this.replace(/(^\s*)|(\s*$)/g, "");
    }
function checkBirth(){//检验新建出生日期
    var str = document.getElementById('birth').value;
    var warn=$("#lblWarnBirth");
    var foc=$("#birth");
    if(str ==null || str == ""){
        warn.html("不能为空！");
        // foc.focus();
        // alert("请输入格式正确的日期\n\r日期格式：yyyy-mm-dd\n\r例    如：2008-08-08\n\r");
        return false;
    }

    if(isDate(str.trim())==false){
         $("#birth").select();
        return false;
    }else
        warn.html("");
    return true;

}
function isDate(dateString){//判断输入框中输入的日期格式是否为 yyyy-mm-dd 或yyyy-m-d
    var str = document.getElementById('birth').value;
    var warn=$("#lblWarnBirth");
    var foc=$("#birth");
    if(dateString.trim()=="") return true;
    //年月日正则表达式
    var r=dateString.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);

    if(r==null|| str ==null || str == ""){
        warn.html("格式:2008-08-08");
        // foc.focus();
        // alert("请输入格式正确的日期\n\r日期格式：yyyy-mm-dd\n\r例    如：2008-08-08\n\r");
        return false;
    }
    var d=new Date(r[1],r[3]-1,r[4]);
    var num = (d.getFullYear()==r[1]&&(d.getMonth()+1)==r[3]&&d.getDate()==r[4]);
    if(num==0 || str ==null || str == ""){
        warn.html("格式:2008-08-08");
        // foc.focus();
        return false;
        // alert("请输入格式正确的日期\n\r日期格式：yyyy-mm-dd\n\r例    如：2008-08-08\n\r");
    }else
        warn.html("");
    return (num!=0);

}
function checkBirth2(){//检验修改出生日期
    var str = document.getElementById('birth2').value;
    var warn=$("#lblWarnBirth2");
    var foc=$("#birth2");
    if(str ==null || str == ""){
        warn.html("不能为空！");
        // foc.focus();
        // alert("请输入格式正确的日期\n\r日期格式：yyyy-mm-dd\n\r例    如：2008-08-08\n\r");
        return false;
    }
    if(isDate2(str.trim()) == false){
        foc.select();
        return false;
    }else
        warn.html("");
    return true;

}
function isDate2(dateString){//验证是否为日期
    var str = document.getElementById('birth2').value;
    var warn=$("#lblWarnBirth2");
    var foc=$("#birth2");
    if(dateString.trim()=="") return true;
    //年月日正则表达式
    var r=dateString.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);

    if(r==null|| str ==null || str == ""){
        warn.html("格式:2008-08-08");
        // foc.focus();
        // alert("请输入格式正确的日期\n\r日期格式：yyyy-mm-dd\n\r例    如：2008-08-08\n\r");
        return false;
    }
    var d=new Date(r[1],r[3]-1,r[4]);
    var num = (d.getFullYear()==r[1]&&(d.getMonth()+1)==r[3]&&d.getDate()==r[4]);
    if(num==0 || str ==null || str == ""){
        warn.html("格式:2008-08-08");
        // foc.focus();
        return false;
        // alert("请输入格式正确的日期\n\r日期格式：yyyy-mm-dd\n\r例    如：2008-08-08\n\r");
    }else
        warn.html("");
    return (num!=0);

}
function checkPhone(){
    var str = document.getElementById('phone').value;
    var warn=$("#lblWarnPhone");
    var foc=$("#phone");
    var reg=/^([0-9]){3,11}$/i; //只能是字母、数字，长度为11位
    if(str ==null || str == ""){
        warn.html("不能为空");
        return false;
        // foc.focus();
    }else  if(!reg.test(str)){
        warn.html("应为3-11位数字");
        return false;
        // foc.focus();
    }
    else
        warn.html("");
    return true;
}
function checkPhone2(){
    var str = document.getElementById('phone2').value;
    var warn=$("#lblWarnPhone2");
    var foc=$("#phone2");
    var reg=/^([0-9]){3,11}$/i; //只能是字母、数字，长度为11位
    if(str ==null || str == ""){
        warn.html("不能为空");
        return false;
        // foc.focus();
    }else  if(!reg.test(str)){
        warn.html("应为3-11位数字");
        return false;
        // foc.focus();
    }
    else
        warn.html("");
    return true;
}
function checkAddress(){
    var str = document.getElementById('address').value;
    var warn=$("#lblWarnAddress");
    var foc=$("#address");
    // var reg=/^([\u4e00-\u9fa5][a-zA-Z0-9]){0,50}$/;
    if(str ==null || str == ""){
        warn.html("地址不能为空！");
        // foc.focus();
        return false;
    }
    // if(!reg.test(str)){
    //     warn.html("只能包含中文、字母、数字");
    //     foc.focus();
    // }
    else
        warn.html("");
    return true;
}
function checkAddress2(){
    var str = document.getElementById('address2').value;
    var warn=$("#lblWarnAddress2");
    var foc=$("#address2");
    // var reg=/^([\u4e00-\u9fa5][a-zA-Z0-9]){0,50}$/;
    if(str ==null || str == ""){
        warn.html("地址不能为空！");
        // foc.focus();
        return false;
    }
        // if(!reg.test(str)){
        //     warn.html("只能包含中文、字母、数字");
        //     foc.focus();
    // }
    else
        warn.html("");
    return true;
}
function checkDate(){
    var str = document.getElementById('registerDate').value;
    var warn=$("#lblWarnRegister");
    var foc=$("#registerDate");
    // var reg=/^([\u4e00-\u9fa5][a-zA-Z0-9]){0,50}$/;
    if(str ==null || str == ""){
        warn.html("日期不能为空！");
        foc.focus();
        return false;
    }
        // if(!reg.test(str)){
        //     warn.html("只能包含中文、字母、数字");
        //     foc.focus();
    // }
    else
        warn.html("");
    return true;
}
function checkDate2(){
    var str = document.getElementById('registerDate2').value;
    var warn=$("#lblWarnRegister2");
    var foc=$("#registerDate2");
    // var reg=/^([\u4e00-\u9fa5][a-zA-Z0-9]){0,50}$/;
    if(str ==null || str == ""){
        warn.html("日期不能为空！");
        foc.focus();
        return false;
    }
        // if(!reg.test(str)){
        //     warn.html("只能包含中文、字母、数字");
        //     foc.focus();
    // }
    else
        warn.html("");
    return true;
}

//根据ID删除工人信息
function deleteWorker(workerId){
    // 温馨提示
    var con = window.confirm("确定要删除这条数据么?");
    // 判断一下
    if(con == true){
        // 找到要删除的数据删除
        for (var i = 0; i < workers.length; i++) {
            if(workers[i].workerId == workerId ||workers[i].workerId == ''){
                delete workers[i];
            }
        }
        // 删除后需要去下null值
        for(var i = 0;i<workers.length;i++){
            if(workers[i] == ''||workers[i]==null||typeof(workers[i]) == undefined){
                workers.splice(i,1);
                i=i-1;
            }
        }
        // 数据发生改变,需要刷界面
        showWorkers('WorkerInfosTable',workers);
    }
}

//弹出新建隐藏层
function ShowDiv(show_div,bg_div){
    //document.getElementById("siteName").value ='';
    document.getElementById("workerId").value = '';
    document.getElementById("workerName").value= '';
    //document.getElementById("sex").value = '';
    document.getElementById("birth").value = '';
    document.getElementById("phone").value = '';
    document.getElementById("address").value = '';
    //document.getElementById("workType").value = '';
    //document.getElementById("duty").value = '';
    document.getElementById("registerDate").value = new Date().toLocaleString( );
    document.getElementById("cvs").value = null;
    document.getElementById(show_div).style.display='block';
    document.getElementById(bg_div).style.display='block';
    var bgdiv = document.getElementById(bg_div);
    bgdiv.style.width = document.body.scrollWidth;
    bgdiv.style.height = $(document).height();
    $("#"+bg_div).height($(document).height());
}
//弹出修改隐藏层
function ShowDiv2(workerId){
        for (var i = 0; i < workers.length; i++) {
            if (workers[i].workerId == workerId) {
                var w = workers[i];
                // 将获取到的数据显示到div中的元素
                document.getElementById("siteName2").value = w.siteName;
                document.getElementById("workerId2").value = w.workerId;
                checkId=w.workerId;
                document.getElementById("workerName2").value= w.workerName;
                document.getElementById("sex2").value = w.sex;
                document.getElementById("birth2").value = w.birth;
                document.getElementById("phone2").value = w.phone;
                document.getElementById("address2").value = w.address;
                document.getElementById("workType2").value = w.workType;
                document.getElementById("duty2").value = w.duty;
                document.getElementById("registerDate2").value = w.registerDate;
                // 显示div
                document.getElementById('MyDiv2').style.display = 'block';
                document.getElementById('fade2').style.display = 'block';
                showAvatar(w.avatar);
                var bgdiv = document.getElementById('fade2');
                bgdiv.style.width = document.body.scrollWidth;
                $("#" + 'fade2').height($(document).height());
        }
    }
}
//关闭弹出层
function CloseDiv(show_div,bg_div) {
    document.getElementById(show_div).style.display='none';
    document.getElementById(bg_div).style.display='none';
}
// 添加工人
function addWorker(){
    if(checkWorkerName() && checkWorkerId()&&checkBirth()&&checkPhone()&&checkAddress()&&checkDate()){
// 接收页面数据
        var siteName = document.getElementById("siteName");
        var workerId = document.getElementById("workerId");
        var workerName = document.getElementById("workerName");
        var sex = document.getElementById("sex");
        var birth = document.getElementById("birth");
        var phone = document.getElementById("phone");
        var address = document.getElementById("address");
        var workType = document.getElementById("workType");
        var duty = document.getElementById("duty");
        var registerDate = document.getElementById("registerDate");
        var state = "正常";
        var avatar = document.getElementById("cvs").toDataURL();

// 开始添加数据
        var worker = {
            "siteName": siteName.value,
            "workerId": workerId.value,
            "workerName": workerName.value,
            "sex": sex.value,
            "birth": birth.value,
            "phone": phone.value,
            "address": address.value,
            "workType": workType.value,
            "duty": duty.value,
            "registerDate": registerDate.value,
            "avatar": avatar,
            "state": state
        };
        workers.push(worker);
// 因为数组数据发生了改变,重新调用查询方法刷新页面显示
        showWorkers('WorkerInfosTable',workers);
        CloseDiv('MyDiv', 'fade');

}}
// 修改工人
function updateWorker(){
    if(checkWorkerName2() && checkWorkerId2() && checkBirth2() && checkPhone2()&&checkAddress2()&&checkDate2()){
// 接收页面数据
    var w = {};
    w.siteName=document.getElementById("siteName2").value ;
    w.workerId=document.getElementById("workerId2").value ;
    w.workerName=document.getElementById("workerName2").value ;
    w.sex=document.getElementById("sex2").value;
    w.birth=document.getElementById("birth2").value  ;
    w.phone=document.getElementById("phone2").value  ;
    w.address=document.getElementById("address2").value  ;
    w.workType=document.getElementById("workType2").value  ;
    w.duty=document.getElementById("duty2").value;
    w.registerDate=document.getElementById("registerDate2").value;
    // w.avatar = document.getElementById("cvs2").toDataURL();
    // var canvas=document.getElementById("cvs2");
    // canvas.toBlob(function(blob) {
    //       var url = URL.createObjectURL(blob);
    //       w.avatar=url;
    // });
    // w.avatar="image/avatar0.jpg";
    w.state="正常";
    // 开始更新
    for (var i = 0; i < workers.length; i++) {
        if(workers[i].workerId == checkId){
            workers[i] = w;
        }
    }
    // 因为数组数据发生了改变,重新调用查询方法刷新页面显示
    showWorkers('WorkerInfosTable',workers);
    CloseDiv('MyDiv2','fade2');

}}
// 编写显示人员方法
function showWorkers(tableId,workers){
    // 按ID获取table
    var tb1 = document.getElementById(tableId);
    // 给tb1拼接元素
    var str = "<tr>\n" +
        "        <th>工人姓名</th>\n" +
        "        <th>工人编码</th>\n" +
        "        <th>工地名称</th>\n" +
        "        <th>工人生日</th>\n" +
        "        <th>注册时间</th>\n" +
        "        <th>工人状态</th>\n" +
        "        <th>操作</th></tr>";


    // 遍历JSON数组继续拼接
    for (var i = 0; i < workers.length; i++) {
        var worker = workers[i];
        str += "<tr><td>"+ worker.workerName+"</td>" +
            "<td>"+worker.workerId+"</td>" +
            "<td>"+worker.siteName+"</td>" +
            "<td>"+worker.birth+"</td>" +
            "<td>"+worker.registerDate+"</td>" +
            "<td>"+worker.state+"</td>"+
            "<th><button type='button' style='color: darkblue' onclick='ShowDiv2("+worker.workerId+")'>更新</button>||<button type='button' style='color: red' onclick='deleteWorker("+worker.workerId+")'>删除</button></th></tr>";
    }
    // 最后把拼接好的字符串放入table中
    tb1.innerHTML = str;
}
//上传头像
function readFile() {
    //获取上传按钮
    var input1 = document.getElementById("upload");
    if(typeof FileReader === 'undefined') {
        //result.innerHTML = "抱歉，你的浏览器不支持 FileReader";
        input1.setAttribute('disabled', 'disabled');
    } else {
        input1.addEventListener('change', readFile, false);

    }
    var file = this.files[0]; //获取上传文件列表中第一个文件
    if(!/image\/\w+/.test(file.type)) {
        //图片文件的type值为image/png或image/jpg
        alert("文件必须为图片！");
        return false;
    }
    // console.log(file);
    var reader = new FileReader(); //实例一个文件对象
    reader.readAsDataURL(file); //把上传的文件转换成url
    //当文件读取成功便可以调取上传的接口
    reader.onload = function(e) {

        var image = new Image();
        image.setAttribute("crossOrigin",'Anonymous')
        // 设置src属性
        var id= document.getElementById("workerId2").value;
        image.src = e.target.result;
        for (var i = 0; i < workers.length; i++) {
            if(workers[i].workerId == id){
                workers[i].avatar=image.src;
            }
        }
        var max = 200;
        // 绑定load事件处理器，加载完成后执行，避免同步问题
        image.onload = function() {
            // 获取 canvas DOM 对象
            var canvas = document.getElementById("cvs");
            // 获取 canvas的 2d 环境对象,
            var ctx = canvas.getContext("2d");
            // canvas清屏
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            document.getElementById("cvs").style.display='block';
            ctx.drawImage(image, 0, 0, 100, 100);

        };
    }
}
function readFile2() {
    //获取上传按钮
    var input1 = document.getElementById("upload2");
    if(typeof FileReader === 'undefined') {
        //result.innerHTML = "抱歉，你的浏览器不支持 FileReader";
        input1.setAttribute('disabled', 'disabled');
    } else {
        input1.addEventListener('change', readFile2, false);

    }
    var file = this.files[0]; //获取上传文件列表中第一个文件
    if(!/image\/\w+/.test(file.type)) {
        //图片文件的type值为image/png或image/jpg
        alert("文件必须为图片！");
        return false;
    }
    // console.log(file);
    var reader = new FileReader(); //实例一个文件对象
    reader.readAsDataURL(file); //把上传的文件转换成url
    //当文件读取成功便可以调取上传的接口
    reader.onload = function(e) {

        var image = new Image();
        image.setAttribute("crossOrigin",'Anonymous')
        // 设置src属性
        image.src = e.target.result;


        // 绑定load事件处理器，加载完成后执行，避免同步问题
        image.onload = function() {
            // 获取 canvas DOM 对象
            var canvas = document.getElementById("cvs2");
            // 获取 canvas的 2d 环境对象,
            var ctx = canvas.getContext("2d");
            // canvas清屏
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            document.getElementById("cvs2").style.display='block';
            ctx.drawImage(image, 0, 0, 100, 100);

        };
    }
}
function showAvatar(avatar) {
        var image = new Image();
        image.src = avatar;
        var max = 200;
        // 绑定load事件处理器，加载完成后执行，避免同步问题
        image.onload = function() {
            // 获取 canvas DOM 对象
            var canvas = document.getElementById("cvs2");
            // 获取 canvas的 2d 环境对象,
            var ctx = canvas.getContext("2d");
            // canvas清屏
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            document.getElementById("cvs2").style.display='block';
            ctx.drawImage(image, 0, 0, 100, 100);

        };

}
//查询
function searchWorker(){
    var result=[];
    var s=document.getElementById("searchSiteName").value;
    var w=document.getElementById("searchWorkerName").value;
    if(checkSearchSiteName() && checkSearchWorkerName()){
    for (var i = 0; i < workers.length; i++) {
        if(workers[i].siteName==s && workers[i].workerName==w){
            result.push(workers[i]);
        }
    }
    showWorkers("WorkerInfosTable", result);
    }else  if(checkSearchSiteName() && !checkSearchWorkerName()){
        for (var i = 0; i < workers.length; i++) {
            if(workers[i].siteName==s ){
                result.push(workers[i]);
            }
        }
        showWorkers("WorkerInfosTable", result);
    }else  if(!checkSearchSiteName() && checkSearchWorkerName()){
        for (var i = 0; i < workers.length; i++) {
            if( workers[i].workerName==w){
                result.push(workers[i]);
            }
        }
        showWorkers("WorkerInfosTable", result);
    }
    else
        showWorkers('WorkerInfosTable',workers);
}
