

define(['jquery', 'backbone','homeView', 'feeds','feedView', 'headerView', 'footerView'], function($,Backbone,HomeView,FeedCollection,FeedView, HeaderView, FooterView) 
{


    function renderHeader(){
        new HeaderView();
    }

    function renderFooter(){
        new FooterView();
    }

    renderHeader();
    renderFooter();


    var AppRouter = Backbone.Router.extend({
        routes: {
            '': 'home',
            'userfeedback/:id' : 'userfeedback'
        },

        home: function() {
            if (!this.homeView) {
                this.homeView = new HomeView();
            }
            this.homeView.render();
        },

        userfeedback : function(id){
            console.log("userfeedback");
            console.log(id);
            if(!this.feedView){
                this.feedView = new FeedView({collection:FeedCollection,mid : id});
            }

            $('.displayBoard').html(this.feedView.render().el);
        }
    });
    return AppRouter;
});
