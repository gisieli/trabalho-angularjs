myApp.controller('FormCtrl', function($scope){

	$scope.indexTarefa = 0;
	$scope.clicouEditar = false;

	$scope.list = [
	{
		name: "Pessoa 1",
		email: "pessoa1@ciss.com.br",
		phonenumber: 4635368500
	},
	{
		name: "Pessoa 2",
		email: "pessoa1@ciss.com.br",
		phonenumber: 4635368500
	},
	{
		name: "Pessoa 3",
		email: "pessoa1@ciss.com.br",
		phonenumber: 4635368500
	}

	];

	$scope.cadastraPessoa = function( nome, email, telefone ) {
		if (!!data) {
			$scope.list.push({
				nomePessoa: nome,
				emailPessoa: email,
				telefonePessoa: telefone
			});

			$scope.pessoa = undefined;
		}
	};

	$scope.editaPessoa = function ( nome, email, telefone ){
		$scope.clicouEditar = true;
		$scope.indexPessoa = dataIndex;
		$scope.renomear = $scope.list[nome, email, telefone].nomePessoa;
		//Posso editar qualquer uma das info
	};

	$scope.renomearCadastro = function ( novoNome, novoEmail, novoTelefone ){
		var editObj= {};
		editObj = {
			'nomePessoa' : novoNome,
			'emailPessoa' : novoEmail,
			'telefonePessoa': novoTelefone

		}

		$scope.list[$scope.indexPessoa] = editObj;
		$scope.clicouEditar = false;
	}

	$scope.removePessoa = function ( remove ){
		 $scope.list.splice(remove, 1);

	}

	$scope.cancelarEdicao = function ( cancelar ){
		$scope.clicouEditar = false;
	}
});