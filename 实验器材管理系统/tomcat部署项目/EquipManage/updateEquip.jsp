<%--
  Created by IntelliJ IDEA.
  User: HEYUANFLY
  Date: 2020-12-27
  Time: 12:47
  To change this template use File | Settings | File Templates.
--%>
<%@ page language="java" pageEncoding="utf-8" %>
<%@ page import="model.*,dao.*,util.*" %>
<%
    //1-获取js传来的更新器材信息
    String equipId = request.getParameter("equipId");
    String equipName = request.getParameter("equipName");
    String producerName = request.getParameter("producerName");
    String price = request.getParameter("price");
    String location = request.getParameter("location");
    String charger = request.getParameter("charger");
    String addDate = request.getParameter("addDate");
    String avatar = request.getParameter("avatar");

    EquipInfo e = new EquipInfo(equipId, equipName, producerName, Float.parseFloat(price), location, charger, addDate);
    EquipInfoDao dao = new EquipInfoDao();
    String updateResult = dao.updateEquip(e);
    System.out.println("updateEquip.jsp返回器材信息更新结果：" + updateResult);
    String jsonStr = JsonUtils.objectToJson(updateResult);
    out.write(jsonStr);
%>
