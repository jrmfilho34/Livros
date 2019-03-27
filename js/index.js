$(document).ready(function(){

// Comando 1
var data = { 
  livros: [{ titulo: 'Orange is The New Black', autor: 'Piper Kerman', checked: true },    
          { titulo: 'A Origem das Espécies', autor: 'Charles Darwin', checked: false }], 
  cabecalho: 'Livros Preferidos', 
  novoLivro: '',
  novoAutor: ''
};
// Comando 2
new Vue({ 
  el: '#app', 
  data: data ,
  methods:{
  	addLivro:function(){
       var titulo = this.novoLivro.trim();
       var autor = this.novoAutor.trim();
       if(titulo && autor){
       	this.livros.push({
       		titulo:titulo,
       		autor:autor,
       		checked:false
       	});
       	this.novoAutor = '';
       	this.novoLivro = '';
       }

  	}
  }
});

});