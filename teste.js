const avanca = document.querySelectorAll('.bnt-proximo');

avanca.forEach(button => {
    button.addEventListener('click' , function(){
        const atual = document.querySelector('.ativo');
        const proximopasso = 'passo-' + this.gitAtribute('data-proximo');

        atual.classList.remove('ativo');
        document.getElementById(proximoPasso).classList.add('ativo');  
    })
})