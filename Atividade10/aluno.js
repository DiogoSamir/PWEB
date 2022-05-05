let aluno1 = {RA: 0030482013002, Nome: "Caio Pereira"};

let aluno2 = new Object();
aluno2["RA"] = 0030482013002;
aluno2.Nome = "Caio Pereira";

function Aluno(ra, nome) {
    this.RA = ra;
    this.Nome = nome;
}

let aluno3 = new Aluno(0030482013002, "Caio Pereira");

alert("Aluno 1: " + aluno1.RA + " " + aluno1.Nome);
alert("Aluno 2: " + aluno2["RA"] + " " + aluno1["Nome"]);
alert("Aluno 3: " + aluno3.RA + " " + aluno1.Nome);