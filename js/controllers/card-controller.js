App.CardController = Ember.ObjectController.extend({
    actions:{

        deleteCard:function(card){
            console.log("deleteCard");
            card.destroyRecord();
        }
    }
});