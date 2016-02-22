export default Ember.Controller.extend({
  actions: {
    openModal: function(name) {
      $('.ui.modal').modal('show');
    },
    approveModal: function(){
      console.log('in approveModal');
    },
    denyModal: function(){
      console.log('in denyModal');
    }
  }
});
