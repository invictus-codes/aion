const API_URL = "https://jsonplaceholder.typicode.com"

export class ApiServiceImpl implements ApiServiceInterface {
	readonly baseUrl = API_URL

	constructor(
		private httpProvider: <T>(url: string, options: Record<string, any>) => Promise<{ data: T }>
	) {
	}

	async get<T>(apiPath: string, options?: Record<string, any>) {
		const method = 'get'
		const {data} = await this.httpProvider<T>([this.baseUrl, apiPath].join('/'), {options, method})
		return data

	}

	async post<T>(apiPath: string, options?: Record<string, any>) {
		const method = 'post'
				const {data} = await this.httpProvider<T>([this.baseUrl, apiPath].join('/'), {options, method})
		return data
	}

	async put<T>(apiPath: string, options?: Record<string, any>) {
		const method = 'put'
				const {data} = await this.httpProvider<T>([this.baseUrl, apiPath].join('/'), {options, method})
		return data
	}

	async delete<T>(apiPath: string, options?: Record<string, any>) {
		const method = 'delete'
				const {data} = await this.httpProvider<T>([this.baseUrl, apiPath].join('/'), {options, method})
		return data
	}
}
