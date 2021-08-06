gdjs.MainMenuCode = {};
gdjs.MainMenuCode.GDLoginButtonObjects1= [];
gdjs.MainMenuCode.GDLoginButtonObjects2= [];
gdjs.MainMenuCode.GDCreateLoginButtonObjects1= [];
gdjs.MainMenuCode.GDCreateLoginButtonObjects2= [];
gdjs.MainMenuCode.GDLoginObjects1= [];
gdjs.MainMenuCode.GDLoginObjects2= [];
gdjs.MainMenuCode.GDTitleObjects1= [];
gdjs.MainMenuCode.GDTitleObjects2= [];
gdjs.MainMenuCode.GDLoginButtonTextObjects1= [];
gdjs.MainMenuCode.GDLoginButtonTextObjects2= [];
gdjs.MainMenuCode.GDCreateLoginButtonTextObjects1= [];
gdjs.MainMenuCode.GDCreateLoginButtonTextObjects2= [];

gdjs.MainMenuCode.conditionTrue_0 = {val:false};
gdjs.MainMenuCode.condition0IsTrue_0 = {val:false};
gdjs.MainMenuCode.condition1IsTrue_0 = {val:false};


gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDLoginButtonObjects1Objects = Hashtable.newFrom({"LoginButton": gdjs.MainMenuCode.GDLoginButtonObjects1});gdjs.MainMenuCode.eventsList0 = function(runtimeScene) {

{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "LoginScene", false);
}}

}


};gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDCreateLoginButtonObjects1Objects = Hashtable.newFrom({"CreateLoginButton": gdjs.MainMenuCode.GDCreateLoginButtonObjects1});gdjs.MainMenuCode.eventsList1 = function(runtimeScene) {

{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "CreateLoginScene", false);
}}

}


};gdjs.MainMenuCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("LoginButton"), gdjs.MainMenuCode.GDLoginButtonObjects1);

gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDLoginButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MainMenuCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("CreateLoginButton"), gdjs.MainMenuCode.GDCreateLoginButtonObjects1);

gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDCreateLoginButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MainMenuCode.eventsList1(runtimeScene);} //End of subevents
}

}


};

gdjs.MainMenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MainMenuCode.GDLoginButtonObjects1.length = 0;
gdjs.MainMenuCode.GDLoginButtonObjects2.length = 0;
gdjs.MainMenuCode.GDCreateLoginButtonObjects1.length = 0;
gdjs.MainMenuCode.GDCreateLoginButtonObjects2.length = 0;
gdjs.MainMenuCode.GDLoginObjects1.length = 0;
gdjs.MainMenuCode.GDLoginObjects2.length = 0;
gdjs.MainMenuCode.GDTitleObjects1.length = 0;
gdjs.MainMenuCode.GDTitleObjects2.length = 0;
gdjs.MainMenuCode.GDLoginButtonTextObjects1.length = 0;
gdjs.MainMenuCode.GDLoginButtonTextObjects2.length = 0;
gdjs.MainMenuCode.GDCreateLoginButtonTextObjects1.length = 0;
gdjs.MainMenuCode.GDCreateLoginButtonTextObjects2.length = 0;

gdjs.MainMenuCode.eventsList2(runtimeScene);
return;

}

gdjs['MainMenuCode'] = gdjs.MainMenuCode;
