interface config {
	auth: {
		authorizeURL: string
		tokenURL: string
		redirect: string
		scope: string[]
	}
	cookie: {
		spotifyAccessToken: string
		spotifyAuthState: string
		spotifyRefreshToken: string
		spotifyTokenExpiry: string
	}
	localStorage: {
		accessToken: string
		refreshToken: string
		tokenExpiry: string
	}
	env: {
		spotifyID: string
		spotifySecret: string
	}
	path: string
	port: number
	apiURL: string
	appURL: string
}

const Config: config = require("../config/config.json")

export default Config