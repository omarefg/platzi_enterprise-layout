const { createServer } = require('http')
const { extname } = require('path')
const { readFile } = require('fs')
const { exec } = require('child_process')

const PORT = 3000
const mimeTypes = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.png': 'image/png',
    '.jpg': 'image/jpg',
    '.svg': 'image/svg+xml',
    '.woff': 'application/font-woff',
    '.ttf': 'application/font-ttf',
    '.eot': 'application/vnd.ms-fontobject',
}

function getCommand () {
    let command = ''
    switch (process.platform) {
        case 'darwin': {
            command = 'open'
            break
        }
        case 'win32': {
            command = 'start'
            break
        }
        default: command = 'xdg-open'
    }
    return command
}

function printErrorAndExit (error) {
    console.log(error)
    process.exit(1)
}

function getFile (req) {
	let file = '.' + req.url
    if (file == './') {
        file = './index.html'
	}
	return file
}

const server = createServer((req, res) => {
	const file = getFile(req)
    const ext = extname(file)
    const contentType = mimeTypes[ext]

    readFile(file, (error, content) => {
		if (error) {
			res.writeHead(500)
    		res.end()
		} else {
			res.writeHead(200, { 'Content-Type': contentType })
			res.end(content, 'utf-8')
		}
    })
})

server.listen(PORT, (error) => {
    error && printErrorAndExit(error)
    const url = `http://localhost:${PORT}`
    console.log(`Server running at ${url}`)
    // exec(`${getCommand()} ${url}`)
})