App.ListController = Ember.ObjectController.extend({
    actions:{
        removeList:function(){
            console.log("removeList");
            var list = this.get("model");
            list.destroyRecord();

        }
    }
});