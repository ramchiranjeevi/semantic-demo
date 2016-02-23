export default Ember.Controller.extend({
  actions: {
    openModal: function(name) {
      $('#'+ name).modal('show');
    },

    approveModal: function(){

    },

    denyModal: function() {
    },

    createFolder: function(name){

    }
  }
});
