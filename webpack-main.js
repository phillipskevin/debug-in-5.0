import { Component, debug } from "can";

Component.extend({
    tag: "my-app",

    view: `
		<h1>{{message}}</h1>
	`,

	ViewModel: {
		message: { default: "Hello, World" }
	}
});
