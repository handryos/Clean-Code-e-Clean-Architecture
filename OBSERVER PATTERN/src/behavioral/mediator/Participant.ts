export default class Participant {
	messages: string[];

	constructor (readonly name: string) {
		this.messages = [];
	}

	receive (participant: Participant, message: string) {
		this.messages.push(`${participant.name}: ${message}`);
	}
}
