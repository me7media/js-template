template.dom = {
    main : `<div><span>Main</span></div>`,
    posts :  `<div>
                    <h1>{header}</h1>
                    <p>{content}</p>
            <button class="btn">Buton</button>
                </div>`,
    messages: `<a href='{url}'>{href}</a><br>`
    };
    
    template.methods = {
    main : function (data){
        return data;
    },
    posts : function (data){
        return template.contentToData(data, 'posts');
    },
    messages : function (data){
        return template.contentToData(data, 'messages');
        }
    };
    
    template.params = {
        posts : [{header: 'hghghghgh', content : 'dfgdfgfg'}, {header: '111111', content : 'df22gdfgfg'}],
        messages:[
            {url: '/1', href: '1111'},
            {url: '/2', href: '2222'},
            {url: '/3', href: '33333'},
            {url: '/4', href: '44444'}
        ]
    }
    template.getAjax = {
        masssages: {
        url: '\q',
        method: 'post',
        }
        }