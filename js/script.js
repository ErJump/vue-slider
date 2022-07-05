const app = new Vue ({
    el: '#app',
    data: {
        images: [
            {
                image: 'img/01.jpg',
                title: 'Svezia',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
            },
            {
                image: 'img/02.jpg',
                title: 'Svizzera',
                text: 'Lorem ipsum.',
            },
            {
                image: 'img/03.jpg',
                title: 'Gran Bretagna',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            },
            {
                image: 'img/04.jpg',
                title: 'Germania',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
            },
            {
                image: 'img/05.jpg',
                title: 'Paradise',
                text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
            }
        ], 
        active : 0,      
    },
    methods: {
        goNext : function() {
            this.active++;
            if (this.active >= 5){
                this.active = 0;
            }
        },
        goPrev : function() {
            this.active--;
            if (this.active < 0){
                this.active = 4;
            }
        },
        goOn0: function(){
            this.active=0;
        },
        goOn1: function(){
            this.active=1;
        },
        goOn2: function(){
            this.active=2;
        },
        goOn3: function(){
            this.active=3;
        },
        goOn4: function(){
            this.active=4;
        },
    }
})