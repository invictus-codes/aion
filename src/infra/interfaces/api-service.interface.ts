interface ApiServiceInterface {
	readonly baseUrl: string

	get<T>(apiPath: string, options?: Record<string, any>): Promise<T>
	post<T>(apiPath: string, options?: Record<string, any>): Promise<T>
	put<T>(apiPath: string, options?: Record<string, any>): Promise<T>
	delete<T>(apiPath: string, options?: Record<string, any>): Promise<T>
}
