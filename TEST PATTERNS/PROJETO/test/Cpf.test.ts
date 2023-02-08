import Cpf from "../src/Cpf";

test("Deve validar um cpf válido", function () {
	const cpf = new Cpf("935.411.347-80");
	expect(cpf.value).toBe("935.411.347-80");
});

const wrongSameDigitCpf = [
	"398-231-394-56",
	"321-234-987-98",
	"903-321-432-19"
	];

test.each(wrongSameDigitCpf)("Deve validar um cpf inválido com todos os números iguais", function (cpf) {
	expect(() => new Cpf(cpf)).toThrow(new Error("CPF Inválido"));
});
