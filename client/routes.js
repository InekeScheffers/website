FlowRouter.route('/', {
  name: 'welcome',
  triggersEnter: [function () {
    Meteor.defer(function () {
      $('main').attr('class', 'light-theme');
    });
  }],
  action: function(){
    BlazeLayout.render('content', { content: 'welcome' });
    window.document.title = 'Welcome to GirlCode tutorials!';
  }
});

FlowRouter.route('/:pageName', {
  name: 'pages',
  triggersEnter: [function () {
    Meteor.defer(function () {
      $('main').attr('class', 'light-theme');
    });
  }],
  action: function(params){
    BlazeLayout.render('content', { content: params.pageName });
    window.document.title = 'GirlCode - ' + params.pageName;
  }
});

FlowRouter.route('/tutorials/:pageName', {
    name: 'tutorials',
    triggersEnter: [function () {
      Meteor.defer(function () {
        $('main').attr('class', 'dark-theme');
      });
    }],
    action: function(params) {
      BlazeLayout.render('content', { content: params.pageName });
      window.document.title = params.pageName;
    }
});
