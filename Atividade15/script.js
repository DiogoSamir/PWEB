  function AbrirSite(curso) {
        if (confirm("Tem certeza que deseja abrir esse curso?")) {
            open("http://www.fatecsorocaba.edu.br/" + curso + ".asp", "", "width=600,height=300");
        }
    }