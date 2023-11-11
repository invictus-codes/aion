import {ApiServiceImpl} from "~~/src/infra/interfaces/implementations/api-service.implementation";

export default defineNuxtPlugin(() => {
	const apiService = new ApiServiceImpl(useFetch)
	return {
		provide: { apiService }
	}
})
