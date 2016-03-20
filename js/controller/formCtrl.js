myApp.controller('FormCtrl', function($scope){

	$scope.indexPessoa = 0;
	$scope.clicouEditar = false;

	$scope.list = [
	{
		nomePessoa: "Pessoa 1",
		emailPessoa: 'pessoa1@ciss.com.br',
		telefonePessoa: 4677777777
	},
	{
		nomePessoa: "Pessoa 2",
		emailPessoa: 'pessoa2@ciss.com.br',
		telefonePessoa: 4655555555
	},
	{
		nomePessoa: "Pessoa 3",
		emailPessoa: 'pessoa3@ciss.com.br',
		telefonePessoa: 4612345678
	}

	];

	$scope.cadastraPessoa = function( nome, email, telefone ) {
		if (!!nome) {
			$scope.list.push({
				nomePessoa: nome,
				emailPessoa: email,
				telefonePessoa: telefone
			});

			$scope.nome = undefined;
			$scope.email = undefined;
			$scope.telefone = undefined;
		}
	};

	$scope.editaPessoa = function ( dataIndex ){
		$scope.clicouEditar = true;
		$scope.indexPessoa = dataIndex;
		$scope.renomearNome = $scope.list[dataIndex].nomePessoa;
		$scope.renomearEmail = $scope.list[dataIndex].emailPessoa;
		$scope.renomearTelefone = $scope.list[dataIndex].telefonePessoa;
	};

	$scope.renomearPessoa = function ( novoNome, novoEmail, novoTelefone ){
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

		$scope.nome = undefined;
		$scope.email = undefined;
		$scope.telefone = undefined;

		$scope.clicouEditar = false;
	}

	$scope.cancelarEdicao = function ( cancelar ){
		$scope.clicouEditar = false;
	}

});