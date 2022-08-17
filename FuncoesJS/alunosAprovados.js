const alunos = [
	{
		nome: 'Pedro',
		nota: 5,
		turma: '1C',
	},
	{
		nome: 'Felipe',
		nota: 9,
		turma: '2D',
	},
	{
		nome: 'João',
		nota: 7,
		turma: '1C',
	},
];

function alunosAprovados(alunos, media) {
	let aprovados = [];

	for (let i = 0; i < alunos.length; i++) {
		let { nota, nome } = alunos[i];

		if (nota >= media) {
			aprovados.push(nome);
		}
	}

	return aprovados;
}

console.log(alunosAprovados(alunos, 5));
