class Button
{
    constructor(height, width, text )
    {
        this.height = height ;
        this.width = width;
        this.text = text;
        
    }


    showBtn()
    {
        document.write('<button width="' + this.width +'" height="'+this.height+'"> ' + this.text + '</button>');
    }
}



let button = new Button("10px" ,"12px", "ПРивіт");

button.showBtn();


class BootstrapButton extends Button
{
    constructor(height, width, text, color)
    {
        super( height, width ,text);
        this.color = color;
    }

    
    showBtn()
    {
        document.write('<style> .but{ \n background-color: '+this.color+'; \n width:' + this.width +' ; \n height: '+this.height+' ;} \n </style>')
        document.write('<button  class="but"> ' + this.text + '</button>');

    }


}


let button1 = new BootstrapButton("100px","150px","Tool","#4CAF50");
button1.showBtn();
